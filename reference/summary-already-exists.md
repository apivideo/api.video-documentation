---
title: Summary already exists
meta: 
    description: This guide explains the cause and the possible solutions for the Summary already exists error.
---

# Summary already exists

A summary already exists, or is being generated for the video that you tried adding a summary to.

## Sample error response

```json
{
  "type": "https://docs.api.video/reference/summary-already-exists",
  "title": "A summary already exists or is being created on this video.",
  "status": 409,
  "detail": "You can delete the existing summary and generate a new one.",
  "name": "videoId"
}
```

This error can occur in 3 scenarios:

- When using [Generate summaries](/reference/api/Summaries#generate-video-summary) on an already uploaded video that has a summary, or where summary generation is in progress
- When using [Update summary details](/reference/api/Summaries#update-summary-details) on a video where summary generation is in progress
- When using [Update video object](/reference/api/Videos#update-a-video-object) on a video where a summary source is already generated, or where summary generation is in progress

## Causes

1. Using the [Generate summaries](/reference/api/Summaries#generate-video-summary) or the [Update video object](/reference/api/Videos#update-a-video-object) endpoint to **generate** a summary is only allowed for videos where no summary is generated yet.
2. Using the [Update summary details](/reference/api/Summaries#update-summary-details) endpoint operation to `PATCH` a summary is only allowed when the API has already finished generating that summary. Specifically, the API does not allow using this endpoint operations when the `sourceStatus` of a summary is `waiting`.

## Solutions

1. If you received this error when you tried to **generate** a summary using the [Generate summaries](/reference/api/Summaries#generate-video-summary) or the [Update video object](/reference/api/Videos#update-a-video-object) endpoints, you first need to delete the existing summary:

    ```curl
    curl -s --location --request DELETE 'https://ws.staging.api.video/summaries/summary_1CGHWuXjhxmeH4WiZ51234/source' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Basic {Your API key}' \
    ```

    After the API responds with `204 - Deleted`, you can repeat your original request to `POST` or `PATCH` the summary.

2. If you received this error when you tried to `PATCH` an existing summary, wait for the API to finish generating that summary. You can monitor `sourceStatus` to see the status of summary generation.

## Next steps

- Learn more about the AI-driven [Summarization](/vod/create-summaries) feature