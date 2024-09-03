const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");
const algoliasearch = require("algoliasearch");
const crypto = require("crypto");

function extractMetadata(content, metadataName) {
  const regex = new RegExp(
    `---\\s*[\\s\\S]*?${metadataName}:(\\s*.*?)\\s*\\n\\s*[\\s\\S]*?^---`,
    "gm"
  );
  const match = content.match(regex);

  const res = regex.exec(content);

  if (res && res[1]) {
    return res[1].trim();
  } else {
    return null;
  }
}

function generateObjectID(file) {
  return crypto
    .createHash("md5")
    .update("documentation_" + file)
    .digest("hex");
}

function getModifiedFiled() {
  const addedFiles = JSON.parse(process.env.ADDED_FILES);
  const deletedFiles = JSON.parse(process.env.DELETED_FILES);
  const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);

  return {
    filesToIndex: [...addedFiles, ...modifiedFiles].filter(
      (file) => file.endsWith(".md") && !file.startsWith("_partials/")
    ),
    deletedFiles,
  };
}

function getAllFiles() {
  const rootDir = process.env.GITHUB_WORKSPACE;

  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach((file) => {
      const filePath = `${dir}/${file}`;
      if (fs.statSync(filePath).isDirectory()) {
        filelist = walkSync(filePath, filelist);
      } else {
        if (filePath.endsWith(".md") && filePath.indexOf("_partials/") === -1) {
          filelist = [...filelist, filePath];
        }
      }
    });
    return filelist;
  };

  return {
    filesToIndex: walkSync(rootDir),
    deletedFiles: [],
  };
}

try {
  const algoliaIndex = process.env.ALGOLIA_INDEX;
  const algoliaAppId = process.env.ALGOLIA_APPLICATION_ID;
  const algoliaApiKey = process.env.ALGOLIA_API_KEY;

  if (!algoliaIndex || !algoliaAppId || !algoliaApiKey) {
    throw new Error("Missing Algolia configuration");
  }

  const client = algoliasearch(algoliaAppId, algoliaApiKey);

  const index = client.initIndex(algoliaIndex);

  const { filesToIndex, deletedFiles } =
    process.env.MODE === "reindexation" ? getAllFiles() : getModifiedFiled();

  if (process.env.MODE === "reindexation") {
    index.clearObjects().wait();
  }

  for (const file of filesToIndex) {
    const content = fs.readFileSync(file, "utf8");

    const title = extractMetadata(content, "title");
    const description = extractMetadata(content, "description");

    if (title) {
      let slug = file.replace(".md", "");
      if(slug.indexOf("api.video-documentation/api.video-documentation/") !== -1) {
        slug = slug.split("api.video-documentation/api.video-documentation/")[1];
      }
      if (slug.endsWith("/README")) {
        slug = slug.replace("/README", "");
      }
      try {
        const record = {
          objectID: generateObjectID(file),
          type: "documentation",
          preview: description,
          title: title,
          content: [content],
          slug,
        };
        index
          .saveObject(record)
          .wait()
          .then((res) => console.log(res, slug))
          .catch((err) => console.log(err, slug));
      } catch (error) {
        console.log(`Error while indexing ${file}: ${error.message}`);
      }
    } else {
      console.log(`No title found for ${file}. Skipping...`);
    }
  }

  for (const file of deletedFiles) {
    index.deleteObject(generateObjectID(file)).wait();
  }

  core.setOutput("response", "ok");
} catch (error) {
  core.setFailed(error.message);
}
