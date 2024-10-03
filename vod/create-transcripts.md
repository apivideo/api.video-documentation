---
title: Creating transcripts for videos via the API
meta:
  description: This page gets users started on how to enable automatic transcription for videos in multiple languages using the Videos endpoint.
---

# Creating video transcripts

Add captions to your videos through a single API call, and avoid having to manually embed captions for your videos.

## How to create transcripts

The captions are uploaded per language. You can upload different captions for each language. You only need to include these attributes in your `POST` request to the [Captions endpoint](/reference/api/Captions):

| Field    | Type   |                                                                                            |
| :------- | :----- | :----------------------------------------------------------------------------------------- |
| videoId  | String | The unique identifier for the video you want to add a caption to.                          |
| language | String | A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC). <br></br>- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error. <br></br>- When the value in your request does not match any covered language, the API returns an error. <br></br>- You can find the list of supported language tags [here](#supported-caption-language-tags). |
| file     | File   | The video text track in VTT format only.                                                   |

## Supported caption file formats

Currently only **VTT** file format is supported.

## Supported caption language tags


        language:
          type: string
          enum: [ar, ca, cs, da, de, el, en, es, fa, fi, fr, he, hi, hr, hu, it, ja, ko, ml, nl, nn, no, pl, pt, ru, sk, sl, te, tr, uk, ur, vi, zh]
          example: fr
          description: |-
            Use this parameter to set the language of the video. When this parameter is set, the API creates a transcript of the video using the language you specify. You must use the [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag) format.

            `language` is a permanent attribute of the video. You can update it to another language using the [`PATCH /videos/{videoId}`](https://docs.api.video/reference/api/Videos#update-a-video-object) operation. This triggers the API to generate a new transcript using a different language.
        transcript:
          type: boolean
          description: |-
            Use this parameter to enable transcription. 
            
            - When `true`, the API generates a transcript for the video.
            - The default value is `false`.
            - If you define a video language using the `language` parameter, the API uses that language to transcribe the video. If you do not define a language, the API detects it based on the video. 
            - When the API generates a transcript, it will be available as a caption for the video.

## WebVTT file formatting

WebVTT is a format for displaying timed text tracks for captions or chapters. It is a text based format, which must be encoded using UTF-8. Check out the [Mozilla developer guide](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) for more information about WebVTT.

To ensure that you use the correct formatting in your VTT file, api.video recommends using a parser to check for errors before you upload the file. [Click here](https://w3c.github.io/webvtt.js/parser.html) for a free online VTT parser.

<Callout pad="2" type="info">
Incorrect VTT file formatting

The api.video API does not return an error for incorrectly formatted VTT files. The response from the API will be `200`, however, the captions will not be displayed.
</Callout>

The VTT file has an extension `.vtt` and the format is as in the example below:

```text
WEBVTT

00:01.000 --> 00:04.000
- Adding transcriptions is easy.

00:05.000 --> 00:09.000
- You only need a single API request.
- And a video with speech.
```

## Tutorials & Resources

- [How to programmatically add captions to your video](https://api.video/blog/tutorials/how-to-add-captions-to-your-videos/)
- [Free online VTT creator](https://www.vtt-creator.com/)