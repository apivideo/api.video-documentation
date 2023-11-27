---
title: Adding captions
meta:
  description: This page gets users started on how to add captions to their videos using the api.video Captions endpoint.
---

# Adding captions

Add captions to your videos through a single API call, and avoid having to manually embed captions for your videos.

## How to upload captions

The captions are uploaded per language. You can upload different captions for each language. You only need to include these attributes in your `POST` request to the [Captions endpoint](/reference/api/Captions):

| Field    | Type   |                                                                                            |
| :------- | :----- | :----------------------------------------------------------------------------------------- |
| videoId  | String | The unique identifier for the video you want to add a caption to.                          |
| language | String | A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).<br>- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.<br>- When the value in your request does not match any covered language, the API returns an error.<br>- This endpoint uses [Symfony](https://symfony.com) to reference the list of supported language tags. You can find the list of supported tags [here](https://github.com/symfony/symfony/blob/6.3/src/Symfony/Component/Intl/Resources/data/locales/meta.php). |
| file     | File   | The video text track in VTT format only.                                                   |

## Supported caption file formats

Currently only **VTT** file format is supported.

## WebVTT file formatting


{% capture content %}
Incorrect VTT file formatting

The api.video API does not return an error for incorrectly formatted VTT files. The response from the API will be `200`, however, the captions will not be displayed.
{% endcapture %}
{% include "_partials/callout.html" kind: "info", content: content %}

The VTT file has an extension `.vtt` and the format is as in the example below:

```text
WEBVTT

00:01.000 --> 00:04.000
- Adding captions is easy.

00:05.000 --> 00:09.000
- You only need a single API request.
- And a properly formatted VTT file.
```

For more information on VTT formatting: <https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API>

You can check the formatting of the VTT with a free online tool here: <https://w3c.github.io/webvtt.js/parser.html>

## Tutorials & Resources

- [How to programmatically add captions to your video](https://api.video/blog/tutorials/how-to-add-captions-to-your-videos/)
- [Free online VTT creator](https://www.vtt-creator.com/)