---
title: Too many requests
meta: 
    description: This guide explains the cause and the possible solutions for the Too many requests error.
---

# Too many requests

You sent too many requests and exceeded the API rate limit.

## Solution

The API returns information about the applied rate limits in the header of every response. Check these header elements:

- `X-RateLimit-Limit` shows the applied request limit per minute.
- `X-RateLimit-Remaining` shows the number of available requests you have left for the current time window.
- `X-RateLimit-Retry-After` shows the number of seconds left until the current rate limit window resets.

api.video recommends that you implement a retry method in your app that responds to the `429 - Too many requests` error. You can scale down your request volume and return the failed, rate limited requests to your queue to wait according to the value of `X-RateLimit-Retry-After`.

Read more about API rate limits in the [API reference](https://docs.api.video/reference#limitation) or get in touch via the chat box if you want to increase the limits that apply to your calls.