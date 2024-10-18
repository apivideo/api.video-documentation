---
title: Summary already exists
meta: 
    description: This guide explains the cause and the possible solutions for the Summary already exists error.
---

# Summary already exists

A summary already exists for the video that you tried adding a summary to.

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

## Causes

This error can occur in 3 scenarios:

- When using [`POST /summaries`](reference/api/Summaries#generate-video-summary) on an already uploaded video that has a summary, or where summary generation is in progress
- When using [`PATCH /summaries/{summaryId}/source`](reference/api/Summaries#update-summary-details) on a video where a summary source is already generated, or where summary generation is in progress
- When using [`PATCH /videos/{videoId}`](reference/api/Videos#update-a-video-object) on a video where a summary source is already generated, or where summary generation is in progress

The API does not allow updating already generated summaries.

## Solution

To recreate or fix an incorrect summary for a video, you first need to delete the existing summary:

```curl
curl -s --location --request DELETE 'https://ws.staging.api.video/summaries/summary_1CGHWuXjhxmeH4WiZ51234/source' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic {Your API key}' \
```

After the API responds with `204 - Deleted`, you can repeat your original request to `POST` or `PATCH` the summary. 

## Next steps

- Learn more about the AI-driven [Summarization](/vod/create-summaries) feature