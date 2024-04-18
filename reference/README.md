---
title: API reference
hide_side_table_of_contents: true
meta:
  description: The API reference serves as a practical developers' documentation about api.video's solutions for video on demand, live streaming, and delivery.
---

<p style="font-size: 34px; font-weight: 600; text-align: left;">
  <span style="font-size: 34px; font-weight: 600; text-align: left; ">
    api.video </span>
  <span style="font-size: 34px; font-weight: 600; text-align: left; color: #fa5b30; text-decoration: none;">
    API reference</span>
</p>
</p>

<p style="opacity: 0.8; font-size: 18px; text-align: left;">
  <span style="opacity: 0.8; font-size: 18px; text-align: left;"
    >This page describes how to authenticate, set up, and securely implement the api.video API solutions with your product.</span
  >
  <br />
</p>

api.video API is built with the [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) standard, the most common standard used today.

## OpenAPI & Swagger

We are following the [OpenAPI](https://www.openapis.org/) specs. You can find our API specs [here](https://github.com/apivideo/api.video-documentation/blob/main/openapi.yaml).

## Environments

| Environment | URL                                                      |
| ----------- | -------------------------------------------------------- |
| Production  | [https://ws.api.video](https://ws.api.video)           |
| Sandbox     | [https://sandbox.api.video](https://sandbox.api.video) |

There are two environments that you can utilize right now. Before you upgrade your account to paid account, you are working in Sandbox mode.

Once you've upgraded you can switch between sandbox and production by toggling the button on the [overview page](https://dashboard.api.video/overview) on the api.video dashboard.

![Switching to the sandbox environment in the Dashboard](/_assets/reference/sandbox-switch.png)

{% capture content %}
**The sandbox mode has these limitations**

- Limited to 30 seconds videos and live streams.
- Will include an unremovable watermark
- Videos or recorded live streams will be deleted after 24 hours, after upload or recording.
{% endcapture %}
{% include "_partials/callout.html" kind: "warning", content: content %}

## Security

Follow these best practices to secure your API keys:

- Do not embed API keys directly in code. API keys that are embedded in code can be accidentally exposed to the public. For example, you may forget to remove the keys from code that you share. Instead of embedding your API keys in your applications, store them in environment variables or in files outside of your application’s source tree.
- Do not store API keys in files inside your application’s source tree. If you store API keys in files, keep the files outside your application’s source tree to help ensure your keys do not end up in your source code control system. This is particularly important if you use a public source code management system such as GitHub.
- Review your code before publicly releasing it. Ensure that your code does not contain API keys or any other private information before you make your code publicly available.
- Delete unneeded API keys to minimize exposure to attacks.
- Limit one API key pair's usage to a specific system of your platform backend. This limits the scope of each key. If an API key is compromised, you can delete or regenerate the impacted key without needing to update your other API keys.

## Limitation

api.video limits the number of accepted API requests **per minute**. The limitation that the API applies to your calls depends on these factors:

* the [API environment](https://docs.api.video/reference#environments) you send your calls in
* your [pricing plan](https://api.video/pricing)
* the request method that your calls use

|         | Sandbox | Production |
| ------- | ------- | ---------- |
| Uploads | 40      | 100        |
| Writes  | 40      | 200        |
| Reads   | 100     | 500        |

The API returns information about the applied rate limits in the header of every response. Check these header elements:

- `X-RateLimit-Limit` shows the applied request limit per minute.
- `X-RateLimit-Remaining` shows the number of available requests you have left for the current time window.
- `X-RateLimit-Retry-After` shows the number of seconds left until the current rate limit window resets.

api.video recommends that you implement a retry method in your app that responds to the `429 - Too many requests` error. You can scale down your request volume and return the failed, rate limited requests to your queue to wait according to the value of `X-RateLimit-Retry-After`.

If you want to increase the limits that apply to your calls get in touch with the support team via the chat box.

### Video upload

Video upload (VOD) is limited in size and minutes. We support upload for videos that are:

- at most 30 GiB in size.
- at most 1440 minutes in length.

## Pagination

All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can [list videos](/reference/api/Videos#list-all-video-objects), [list livestreams](/reference/api/Live-Streams#list-all-live-streams), etc.

Each of the responses has next, previous, first, last and self URLs formatted query strings provided for easier querying of the results pages. You can use the limit parameter to define the number of results on a page.

If for example you have created 900 videos, after calling `GET https://ws.api.video/videos?pageSize=25` you will receive a response that lists 25 videos. At the bottom of the response is the `pagination` object:

```json
"pagination": {
    "currentPage": 1,
    "currentPageItems": 25,
    "pageSize": 25,
    "pagesTotal": 2,
    "itemsTotal": 35,
    "links": [
      {
        "rel": "self",
        "uri": "/videos?currentPage=1&pageSize=25"
      },
      {
        "rel": "first",
        "uri": "/videos?currentPage=1&pageSize=25"
      },
      {
        "rel": "next",
        "uri": "/videos?currentPage=2&pageSize=25"
      },
      {
        "rel": "last",
        "uri": "/videos?currentPage=2&pageSize=25"
      }
    ]
```

In order to retrieve the next 25 videos, you will need to make another request with the page number, and you can pull it from the object `links` with the `rel: "next"` value. A call to `GET https://ws.api.video/videos?currentPage=2&pageSize=25z` will give you the next 25 videos.

## API Clients

|                                                                          |                                                                            |                                                                           |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [PHP API Client](https://github.com/apivideo/api.video-php-client)       | [Android API Client](https://github.com/apivideo/api.video-android-client) | [Go API Client](https://github.com/apivideo/api.video-go-client)          |
| [C# API Client](https://github.com/apivideo/api.video-csharp-client)     | [Swift SDK](https://github.com/apivideo/api.video-swift5-client)                | [Node.js API Client](https://github.com/apivideo/api.video-nodejs-client) |
| [Python API Client](https://github.com/apivideo/api.video-python-client) | [Java API Client](https://github.com/apivideo/api.video-java-client)       |
