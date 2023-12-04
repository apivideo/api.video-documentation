const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const algoliasearch = require('algoliasearch');
const crypto = require('crypto');

function extractMetadata(content, metadataName) {
    const regex = new RegExp(`---\\s*[\\s\\S]*?${metadataName}:(\\s*.*?)\\s*\\n\\s*[\\s\\S]*?^---`, 'gm');
    const match = content.match(regex);

    const res = regex.exec(content)

    if (res && res[1]) {
        return res[1].trim();
    } else {
        return null;
    }
}

function generateObjectID(file) {
    return crypto.createHash('md5').update("documentation_" + file).digest('hex');
}

try {
    process.env.ALGOLIA_INDEX = "production_website";
    process.env.ALGOLIA_APPLICATION_ID = "QDRPG7YL60";
    process.env.ALGOLIA_API_KEY = "fd45b48e56c34f96813ff2580ee67d88";

    const addedFiles = JSON.parse(process.env.ADDED_FILES);
    const deletedFiles = JSON.parse(process.env.DELETED_FILES);
    const modifiedFiles = JSON.parse(process.env.MODIFIED_FILES);
    const algoliaIndex = process.env.ALGOLIA_INDEX;
    const algoliaAppId = process.env.ALGOLIA_APPLICATION_ID;
    const algoliaApiKey = process.env.ALGOLIA_API_KEY;

    if (!algoliaIndex || !algoliaAppId || !algoliaApiKey) {
        throw new Error("Missing Algolia configuration")
    }

    const client = algoliasearch(algoliaAppId, algoliaApiKey)

    const index = client.initIndex(algoliaIndex)

    const filesToIndex = [...addedFiles, ...modifiedFiles].filter(file =>
        file.endsWith('.md') && !file.startsWith('_partials/')
    );

    for (const file of filesToIndex) {
        const content = fs.readFileSync(file, 'utf8');

        const title = extractMetadata(content, 'title');
        const description = extractMetadata(content, 'description');

        if (title) {
            let slug = file.replace('.md', '')
            if (slug.endsWith('/README')) {
                slug = slug.replace('/README', '');
            }
            const record = { objectID: generateObjectID(file), type: "documentation", preview: description, title: title, content: [content], slug }
            index.saveObject(record).wait()
        } else {
            console.log(`No title found for ${file}. Skipping...`);
        }
    }

    for (const file of deletedFiles) {
        index.deleteObject(generateObjectID(file)).wait()
    }

    core.setOutput("response", "ok");
} catch (error) {
    core.setFailed(error.message);
}
