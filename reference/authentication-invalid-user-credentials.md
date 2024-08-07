---
title: Invalid user credentials
meta: 
    description: This guide explains the cause and the possible solutions for the Invalid user credentials error.
---

# Invalid user credentials

The API key or the refresh token you sent may be invalid.

## Solution

Check if the API key you use is correct or not. You can generate new API keys in the [dashboard](https://dashboard.api.video/project-settings/api-keys).

Check if your refresh token is correct or not. You can fetch a new token using the [Authenticate](/reference/api/Advanced-authentication#get-bearer-token) endpoint.

## Learning resources

### Tutorials

- [Authentication steps](https://api.video/blog/tutorials/authentication-tutorial/) \- Walk through how to authenticate and retrieve an access token.
- [When your token expires, hit refresh and protect your API key](https://api.video/blog/tutorials/when-your-token-expires-hit-refresh-and-protect-your-api-key/) \- Use refresh tokens to retrieve a new access token when yours expires.

### Tools

You can cut down on mistakes by using one of our clients. We offer clients for our API in these languages:

- [NodeJS](../sdks/api-clients/apivideo-nodejs-client.md)
- [Python](../sdks/api-clients/apivideo-python-client.md)
- [PHP](../sdks/api-clients/apivideo-php-client.md)
- [Go](../sdks/api-clients/apivideo-go-client.md)
- [C#](../sdks/api-clients/apivideo-csharp-client.md)
- [Java](../sdks/api-clients/apivideo-java-client.md)
- [Swift](../sdks/api-clients/apivideo-swift5-client.md)
- [Android](../sdks/api-clients/apivideo-android-client.md)