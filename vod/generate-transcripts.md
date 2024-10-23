---
title: Generate transcripts for videos via the API
meta:
  description: This page gets you started on how to enable automatic transcription for videos in multiple languages using the Videos endpoint.
---

# Generate video transcripts

api.video's AI-driven transcription feature can generate video transcripts using a single API call. You can now avoid manually uploading captions, as the generated transcripts are available as video captions in the standard WebVTT format. 

Enable your audience to have seamless user experience regardless of their language or location, and also provide more inclusive and accessible content by inviting deaf or hard-of-hearing users!

<Callout pad="2" type="success">

api.video uses [Whisper](https://openai.com/index/whisper/) for multilingual speech recognition in videos. With data security in mind, we run Whisper's ASR models on our own infrastructure and do not expose data outside our service. You control who gets access to your videos and transcripts.
</Callout>

## How to generate transcripts

To enable transcription, set these **optional** parameters when you create a video object using a `POST` request to the [Create video object endpoint](/reference/api/Videos#create-a-video-object):

| Field        | Type      | Description                                                                                                                                                                                        |
|--------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `transcript` | `boolean` | When `true`, the API generates a transcript for the video. The default value is `false`.                                                                                                           |
| `language`   | `string`  | A valid language identifier using [IETF language tags](https://en.wikipedia.org/wiki/IETF_language_tag). You can use primary subtags like `en` or `fr`.<br/><br/>When the value in your request does not match any covered language, the API returns an error. |

The API generates transcripts using the `transcript` parameter. You can define the video `language`, and the API creates a transcript of the video using the language you specify. If you do not specify a language for the video, the API will detect it automatically. 

<Callout pad="2" type="info">

If you do not set the `language` parameter, the API analyzes the first `30 seconds` of the video and determines the language. When this analysis does not have confident results, for example in case of low quality audio, the API does not generate a transcript.
</Callout>

To help you understand how a video's language was defined, the API returns the `languageOrigin` attribute in the response when you create a video object:

| Field        | Type      | Description                                                                                                                                                                                        |
|--------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `languageOrigin` | `string` | Returns the origin of the last update on the video's `language` attribute.<br/><br/>The possible values are: `api` and `auto`.<br/><br/>- `api` means that the last update was requested from the API.<br/>- `auto` means that the last update was done automatically by the API. |

## About the `language` parameter

When you set the `language` parameter, make sure that it matches the actual language used in the video. Your setting forces the API to transcribe in that language. Mismatching language settings or videos with dialogue in multiple languages can return low quality transcripts.

`language` is a permanent attribute of a video object. You can update it to another language using the [`PATCH /videos/{videoId}`](/reference/api/Videos#update-a-video-object) operation. This triggers the API to generate a new transcript using a different language.

When the API generates a transcript, it will be available as a caption for your video. Your audience will be able to select during video playback. You can interact with captions generated through transcription using the [Captions endpoints](/reference/api/Captions).

## Examples

Transcribe a video regardless of the language, using `POST /videos`:

  ```json
  {
    "title": "An awesome video",
	  "transcript": true
  }
  ```

Transcribe a video and force the source language to English, using `POST /videos`:

  ```json
  {
    "title": "Yet another awesome video",
	  "language": "en",
	  "transcript": true
  }
  ```

Generate transcript for a previously uploaded video, using `PATCH /videos/{videoId}`:

  ```json
  {
	  "language": "en",
	  "transcript": true
  }
  ```

Set a default language for a new video, using `POST /videos`:

  ```json
  {
    "title": "Another awesome video",
    "language": "en"
  }
  ```

Set a default language for an existing video, using `PATCH /videos/{videoId}`:

  ```json
  {
	  "language": "fr"
  }
  ```

## Supported languages

Transcription is currently available for these languages:

| Language | IETF Language Tag |
|----------|-------------------|
| Arabic | `ar` |
| Catalan | `ca` |
| Czech | `cs` |
| Danish | `da` |
| German | `de` |
| Greek | `el` |
| English | `en` |
| Spanish | `es` |
| Persian | `fa` |
| Finnish | `fi` |
| French | `fr` |
| Hebrew | `he` |
| Hindi | `hi` |
| Croatian | `hr` |
| Hungarian | `hu` |
| Italian | `it` |
| Japanese | `ja` |
| Korean | `ko` |
| Malayalam | `ml` |
| Dutch | `nl` |
| Norwegian Nynorsk | `nn` |
| Norwegian | `no` |
| Polish | `pl` |
| Portuguese | `pt` |
| Russian | `ru` |
| Slovak | `sk` |
| Slovenian | `sl` |
| Telugu | `te` |
| Turkish | `tr` |
| Ukrainian | `uk` |
| Urdu | `ur` |
| Vietnamese | `vi` |
| Chinese | `zh` |

## Next steps

- Learn more about the WebVTT format and managing captions in the [Captions guide](/vod/add-captions)
- Check out other AI-driven features like video translation and AI summary [in our blog](https://api.video/blog/product-updates/ai-video-features/)