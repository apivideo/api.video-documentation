---
title: Generate video summaries
meta:
  description: This page explains how to generate video summaries manually or automatically using the Videos and Summaries endpoints and the api.video dashboard.
---

# Create video summaries

api.video's AI-driven summarization feature can generate concise and accurate outlines of your videos. Each summary consist of an abstract and key takeaways based on the exact contents of a video. All of these are available directly in the player, on your dashboard, and through the API.

Provide your audience with detailed descriptions and key points of your videos, and also enable more inclusive and accessible content by inviting deaf or hard-of-hearing users!

<Callout pad="2" type="success">

A summary is based on the transcription of a video. api.video uses [Whisper](https://openai.com/index/whisper/) for multilingual speech recognition and transcripton. We run Whisper's ASR models on our own infrastructure and do not expose data outside our service. You control who gets access to your videos and summaries.
</Callout>

## Summary data structure

Summaries consist of 2 elements:

- an **abstract** that provides a short outline of the contents of the video
- 3 **takeaways** in chronologial order, highlighting the key points of the video

Each summary is identified by a `summaryId`. The API separates summary data into `summary` and `source` objects. A `summary` object contains information about the summary:

```json
{
  "summaryId": "summary_1CGHWuXjhxmeH4WiZ51234",
  "createdAt": "2024-07-14T23:36:07+00:00",
  "updatedAt": "2024-07-14T23:36:07+00:00",
  "videoId": "vilkR8K3N7yrRcxcMt91234",
  "origin": "auto",
  "sourceStatus": "completed"
}
```

The `source` contains the actual abstract and the takeaways:

```json
{
  "abstract": "In this lecture, we discuss how complicated quantum theory is, using the famous example of Schrödingers cat. We also discuss practical applications like quantum computing.",
  "takeaways": [
    "Quantum theory is complicated.",
    "Schrödinger's cat is neither dead, nor alive.",
    "Quantum computers are super cool."
  ]
}
```

Visit the [API reference](/reference/api/Summaries) for detailed explanations of each field and attribute in the `summary` object.

## How to create summaries

You have 3 methods to create summaries. You can use:

- the dashboard to enable summary generation during video upload, and for already uploaded videos
- the `/videos` endpoint for automatic summarization via the API
- the `/summaries` endpoint for more granular control on summary creation via the API

This guide explains all 3 methods.

### Generate summaries in the dashboard

When you use the dashboard to [upload videos](https://dashboard.api.video/videos), simply switch on the **Summary** toggle during the upload process.

<Callout pad="2" type="info">

A summary is based on the transcription of a video. When you create summaries, we recommend that you also enable transcription. This enables our API to create video summaries faster.
</Callout>

For already uploaded videos, open the **Video Details** page and then the Summarization tab. Click on **Summarize** to generate a summary, or **Summarize again** to recreate a summary.

### Automatic summarization

When you use the API to upload videos, the easiest method to enable summary creation when you create a video object.

To enable summarization, set the **optional** `transcriptSummary` parameter in your `POST` request to the [Create video object endpoint](/reference/api/Videos#create-a-video-object). You generate an abstract only, or just the takeaways: use the `transcriptSummaryAttributes` array to select which elements you want the API to generate. We recommend that you also enable the **optional** `transcript` and `language` parameters. 

When you define the video `language`, the API creates a summary of the video using the language you specify. Check out the list of supported languages [here](/vod/generate-transcripts#supported-languages). If you do not specify a language for the video, the API will detect it automatically.

| Field                         | Type               | Description                                                                                                                                                                                                                                                    |
|-------------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transcriptSummary`           | `boolean`          | When `true`, the API generates a summary for the video. The default value is `false`.                                                                                                                                                                          |
| `transcriptSummaryAttributes` | `array of strings` | Accepts `abstract`, `takeaways`, or both. The API only generates the elements you add to this array.<br/><br/>If you do not use this parameter, the API generates a full summary.                                                                                       |
| `transcript`                  | `boolean`          | When `true`, the API generates a transcript for the video. The default value is `false`.                                                                                                                                                                       |
| `language`                    | `string`           | A valid language identifier using [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag). You can use primary subtags like `en` or `fr`.<br/><br/>When the value in your request does not match any covered language, the API returns an error. |

You can also trigger automatic summarization for already uploaded videos. Use the same parameters in your `PATCH` request to the [Update video object](/reference/api/Videos#update-a-video-object) endpoint.

### Manual summarization

This method enables you to control every step of the summary creation. We recommend that you use this method in scenarios where you want to manually create, update, or edit the generated summary.

To summarize already uploaded videos manually, use a `POST` request to the [Summaries endpoint](/reference/api/Summaries). You have the option to define the origin of the summary generation with the `origin` request parameter.

| Field    | Type     | Description                                                                                                                                                                |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `origin` | `string` | Use this **optional** parameter to define how the API generates the summary. The only allowed value is `auto`, which means that the API generates a summary automatically. |


<Callout pad="2" type="warning">

If you do not set the `origin` parameter in your request, **the API will not generate a summary automatically**.

In this case, `sourceStatus` will return `missing`, and you have to manually add the summary source using the `PATCH /summaries/{summaryId}/source` endpoint operation.
</Callout>

## Manage summaries

The API provides dedicated endpoints to list, update, and delete summaries. You can use:

- the `/summaries` endpoint to [`GET` a list of all summaries](/reference/api/Summaries#list-summaries) in your project, and to filter the list based on `videoId`, `origin`, or `sourceStatus`
- the `/summaries/{summaryId}` endpoint to [`DELETE` a summary](/reference/api/Summaries#delete-video-summary)
- the `/summaries/{summaryId}/source` endpoint to [`GET` the source of a specific summary](/reference/api/Summaries#get-summary-details), and to [`PATCH` an existing summary](/reference/api/Summaries#update-summary-details).

## Summary generation statuses

The `summary` object returns the status of summary generation in the `sourceStatus` field. These are the available statuses:
            
- `missing`: the source for a summary is not present.
- `waiting` : the source video is being processed and a summary will be generated.
- `failed`: a technical issue prevented summary generation.
- `completed`: the summary is generated.
- `unprocessable`: the source video is unsuitable for summary generation. An example for this is a source video that has no audio, or has less than 50 words.

## Supported languages

The API creates summaries using the same language as for transcripts. Check out the [Generate transcripts guide](/vod/generate-transcripts#supported-languages) for the list of languages

## Limitations

<Callout pad="2" type="error">

- The API requires at least 50 spoken words in the video you upload to create a transcript and a summary.
- The length of a summary `abstract` is between 20 to 300 words. The exact length of the abstract depends on the contents of the video and will be roughly 1/8th of the transcript.
- When you set the `language` parameter, make sure that it matches the actual language used in the video. Your setting forces the API to summarize in that language. Mismatching language settings or videos with dialogue in multiple languages can return low quality summaries.
- Using the [Generate summaries](/reference/api/Summaries#generate-video-summary) or the [Update video object](/reference/api/Videos#update-a-video-object) endpoint to **generate** a summary is only allowed for videos where no summary is generated yet. Otherwise the API responds with the [Summary already exists](/reference/summary-already-exists) error.
- Using the [Update summary details](/reference/api/Summaries#update-summary-details) endpoint operation to `PATCH` a summary is only allowed when the API has already finished generating that summary. Specifically, the API does not allow using this endpoint operations when the `sourceStatus` of a summary is `waiting`. Otherwise the API responds with the [Summary already exists](/reference/summary-already-exists) error.
</Callout>

## Next steps

- Learn more about video transcription in the [Generate transcripts guide](/vod/generate-transcripts)
- Check out other AI-driven features like video translation and AI summary [in our blog](https://api.video/blog/product-updates/ai-video-features/)