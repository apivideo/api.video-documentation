---
title: Postman Collection
meta: 
    description: This guide explains how you can fork the official api.video Postman collection.
---

# Postman Collection

Use this Postman collection to interact with api.video's API:

<a href="https://www.postman.com/apivideo/api-video-s-public-workspace/collection/25448896-dc28e101-288e-421f-9f28-bf61b6fe2a96/api-video/fork?origin=tab" class="custom-api-video-button">
  ▶ Fork our collection
</a>

## Forking the collection to your Postman workspace

1. Click the button above
2. Add your [API key](https://dashboard.api.video/project-settings/api-keys) to the Variables

   ![Adding api.video API keys as Postman variables](/_assets/postman-1.png)

3. Add the API Key variable to Authorization

   ![Adding the API key as a variable for Postman authorization](/_assets/postman-2.png)

## Switching environments

We recommend using Postman for testing purposes only and not for production.

To set the environment, simply replace the `baseUrl` variable.

| baseUrl                                                 | Environment |
| ------------------------------------------------------- | ----------- |
| [https://sandbox.api.video](https://sandbox.api.video/) | Sandbox     |
| [https://ws.api.video](https://ws.api.video/)           | Production  |
