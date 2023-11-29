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
    const modifiedFiles = ["sdks/nocode/bubbleio-api-calls.md", "sdks/nocode/all-live-events.md", "sdks/nocode/live-stream-created.md", "sdks/nocode/bubbleio-uploader.md", "sdks/nocode/strapi.md", "sdks/nocode/README.md", "sdks/nocode/wordpress.md", "sdks/nocode/bubbleio-plugin.md", "sdks/nocode/contentful.md", "sdks/nocode/zapier.md", "sdks/nocode/video-created.md", "sdks/nocode/video-encoding-completed.md", "sdks/nocode/live-stream-ended.md", "sdks/nocode/create-video.md", "sdks/nocode/live-stream-started.md", "sdks/nocode/bubbleio-player-element.md", "sdks/security/README.md", "sdks/README.md", "sdks/livestream/swift-livestream-library.md", "sdks/livestream/README.md", "sdks/livestream/apivideo-android-livestream-module.md", "sdks/livestream/apivideo-flutter-livestream.md", "sdks/vod/apivideo-swift-uploader.md", "sdks/vod/apivideo-android-uploader.md", "sdks/vod/apivideo-flutter-uploader.md", "sdks/vod/apivideo-typescript-media-recorder.md", "sdks/vod/apivideo-react-native-uploader.md", "sdks/vod/README.md", "sdks/vod/apivideo-typescript-uploader.md", "sdks/vod/apivideo-typescript-media-stream-composer.md", "sdks/vod/apivideo-android-upstream.md", "sdks/api-clients/apivideo-php-client.md", "sdks/api-clients/apivideo-android-client.md", "sdks/api-clients/apivideo-java-client.md", "sdks/api-clients/README.md", "sdks/api-clients/apivideo-go-client.md", "sdks/api-clients/apivideo-python-client.md", "sdks/api-clients/apivideo-swift5-uploader-client.md", "sdks/api-clients/apivideo-nodejs-client.md", "sdks/api-clients/apivideo-swift5-client.md", "sdks/api-clients/apivideo-android-uploader-client.md", "sdks/player/apivideo-player-sdk.md", "sdks/player/apivideo-flutter-player.md", "sdks/player/apivideo-swift-player-analytics.md", "sdks/player/apivideo-hlsjs-analytics.md", "sdks/player/README.md", "sdks/player/apivideo-react-player.md", "sdks/player/apivideo-swift-player.md", "sdks/player/apivideo-react-native-player.md", "sdks/player/apivideo-player-analytics.md", "sdks/player/apivideo-android-player-analytics.md", "sdks/player/apivideo-android-player.md", "sdks/player/apivideo-videojs-analytics.md", "README.md", "delivery-analytics/video-playback-features.md", "delivery-analytics/private-video-on-hls-or-external-players.md", "delivery-analytics/private-video-session-tokens.md", "delivery-analytics/private-video-delivery-with-mp4-built-in-players.md", "delivery-analytics/video-security-best-practices.md", "delivery-analytics/how-to-player-sdk-analytics.md", "delivery-analytics/private-videos-with-custom-players-session-retention.md", "delivery-analytics/player-customization.md", "delivery-analytics/analytics.md", "delivery-analytics/private-video-delivery-web-browser.md", "delivery-analytics/video-privacy-access-management.md", "delivery-analytics/README.md", "delivery-analytics/player-best-practices.md", "delivery-analytics/using-custom-domains.md", "delivery-analytics/private-video-get-started.md", "delivery-analytics/ads.md", "delivery-analytics/delivery-analytics-quickstart.md", "delivery-analytics/domain-referrer.md", "live-streaming/working-with-live-streams.md", "live-streaming/add-or-delete-a-live-stream-thumbnail.md", "live-streaming/README.md", "live-streaming/create-a-live-stream.md", "live-streaming/restreams.md", "live-streaming/list-live-streams.md", "live-streaming/live-stream-best-practices.md", "vod/demo-loom-clone.md", "vod/video-playback-features.md", "vod/list-videos-2.md", "vod/demos-udemy-clone.md", "vod/add-a-permanent-watermark.md", "vod/video-object.md", "vod/azure-cold-storage-backup.md", "vod/delete-a-video.md", "vod/video-tagging.md", "vod/upload-a-video-regular-upload.md", "vod/demos-tiktok-clone.md", "vod/demos-template-overview.md", "vod/creating-and-managing-chapters.md", "vod/demos-prog-upload-uploader.md", "vod/delegated-upload-tokens.md", "vod/amazon-cold-storage-backup.md", "vod/README.md", "vod/video-management-basics.md", "vod/video-best-practices.md", "vod/video-download.md", "vod/update-video-details.md", "vod/upload-from-source.md", "vod/show-video-details.md", "vod/backup-and-cold-storage.md", "vod/show-video-upload-status.md", "vod/demos-airbnb-clone.md", "vod/google-cold-storage-backup.md", "vod/clip-a-video.md", "vod/add-captions.md", "vod/demos-video-uploader.md", "vod/demo-youtube-clone.md", "vod/progressive-upload.md", "vod/add-a-thumbnail-to-your-video.md", "vod/encoding-transcoding.md", "vod/get-started-in-5-minutes.md", "reference/video-content-range-by-part-total-parts-zero.md", "reference/uploaded-file-multiple-files.md", "reference/webhook-limit-reached.md", "reference/video-content-range-by-bytes-to-byte-too-high-total.md", "reference/create-and-manage-webhooks.md", "reference/progressive-upload-errors-content-range-by-part.md", "reference/authentication-invalid-api-key.md", "reference/authentication-invalid-authorization-header-value.md", "reference/video-content-range-by-bytes-range-mismatch.md", "reference/authentication-invalid-refresh-token.md", "reference/postman-collection.md", "reference/video-source-already-copied.md", "reference/uploaded-file-empty.md", "reference/authorization-suspended-account.md", "reference/video-content-range-started-with-bytes.md", "reference/authentication-invalid-access-token.md", "reference/video-content-range-by-bytes-total-bytes-zero.md", "reference/authentication-invalid-upload-token.md", "reference/video-content-range-by-part-part-zero.md", "reference/invalid-query-parameter.md", "reference/video-source-already-downloaded.md", "reference/video-content-range-malformed.md", "reference/resource-not-found.md", "reference/video-content-range-by-bytes-from-byte-too-high.md", "reference/errors.md", "reference/progressive-upload-errors-general.md", "reference/video-content-range-by-bytes-range-too-large.md", "reference/video-content-range-by-part-uploaded-file-too-small.md", "reference/unrecognized-request-url.md", "reference/uploaded-file-too-large.md", "reference/method-not-allowed.md", "reference/video-content-range-by-part-different-total-parts.md", "reference/video-content-range-by-bytes-range-too-small.md", "reference/README.md", "reference/video-content-range-started-with-part.md", "reference/authentication-missing-upload-token.md", "reference/video-content-range-by-part-part-already-sent.md", "reference/video-content-range-by-bytes-total-bytes-too-low.md", "reference/video-source-already-uploaded.md", "reference/video-content-range-by-bytes-total-bytes-too-high.md", "reference/disposable-bearer-token-authentication.md", "reference/video-content-range-by-bytes-different-total-bytes.md", "reference/authentication-missing-authorization-header.md", "reference/invalid-payload.md", "reference/video-content-range-by-bytes-range-overlap.md", "reference/video-content-range-by-part-total-parts-too-high.md", "reference/progressive-upload-errors.md", "reference/uploaded-file-no-file.md", "reference/uploaded-file-invalid-file.md", "reference/video-content-range-already-initiated.md", "reference/video-content-range-by-part-total-parts-too-low.md", "reference/authentication-guide.md", "reference/basic-authentication.md", "reference/video-upload-errors.md", "reference/invalid-attribute.md", "reference/general-errors.md", "reference/video-content-range-by-part-part-too-high-total.md", "reference/video-content-range-by-part-part-too-high-allowed.md", "reference/video-content-range-by-bytes-to-byte-too-high-allowed.md", "get-started/wistia-migration.md", "get-started/migration-guides.md", "get-started/azure-migration.md", "get-started/aws-migration.md", "get-started/start-building.md", "get-started/infra.md", "get-started/gcs-migration.md", "get-started/vimeo-migration.md"]; // JSON.parse(process.env.MODIFIED_FILES);
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
