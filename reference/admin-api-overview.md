---
title: Admin API
meta: 
    description: This guide introduces and explains the usage of api.video's Admin API.
breadcrumbs: false
---

# Admin API

The Admin API is a tool that enables you to directly manage your api.video projects and API keys through a secure API. This is a robust solution with a simple goal: to make it easy for you to manage your projects and thus your users, and their access to your platform on a programmatic level.

Some examples where the Admin API can be especially useful:

- when you want to segment your user base and measure usage more granularly
- when you work with multiple clients and want to enable them separate access to different projects
- when you have users needing different folders/projects

## Server URL

You should direct each HTTP call to the Admin API through this server URL:

`https://admin.api.video`

## Endpoints

The Admin API offers 2 sets of endpoints: [`/projects`](/reference/admin-api/Projects) and [`/api-keys`](/reference/admin-api/API-keys). In general, the Projects endpoints enable you to programmatically list all your projects, get a specific project, and to create or update a project, while the API keys endpoints enable you to programmatically list all your API keys, get a specific API key, and to create, update, or delete an API key.  

### Knowing your hosting and delivery usage

The Admin API enables you to programmatically retrieve accurate delievery and hosting usage data per project. This is the same data that api.video uses to calculate pricing based on your usage.

<Callout pad="2" type="info">
This level of granularity is especially useful if you manage multiple clients or projects and want to accurately measure and segment their individual usage.
</Callout>

You can retrieve delivery usage data for live streams, HLS videos, and mp4 videos within a specific project. You can also retrieve hosting usage data for all your videos across a specific project. Both sets of data can be filtered for the past 7 or 30 days in a daily breakdown.

Check out the dedicated [Usage](/reference/admin-api/Usage) endpoints for more details!

## Authentication

This API uses [Basic HTTP authentication scheme](https://datatracker.ietf.org/doc/html/rfc7617), which requires an **admin API key** to interact with the Admin API.  This API key is different from your individual projects’ API keys as it’s one level above them.

<Callout pad="2" type="warning">
Contact the Customer support team to request your admin API key.
</Callout>

The basic authentication requires adding an HTTP header in your request:

```bash
Authorization: Basic $base64Credentials
```

Where `$base64Credentials` is the concatenation of your API key and `:`, then base 64 encoded. 

<Callout pad="2" type="info">
The credentials for the Admin API are in the form `username:password`, where the API key acts as the `username` and `password` is left empty.
</Callout>

### Example authentication

```curl
curl --request GET \
     --url https://admin.api.video/projects/count \
     --header 'Authorization: Basic {$adminApiKey}' \
```

## Interacting with the Admin API

- The API uses the REST approach: JSON requests and responses over HTTP.
- Every property you define in your requests should be in `snake_case`.

<Callout pad="2" type="warning">
Your calls to the Admin API are rate limited at 10 requests / second.
</Callout>

### Example: create a project with Admin API
   
When you create a project through the Admin API, you also have to create at least one related API key for it. You can use this simple workflow:

<Steps>
  <Step title="Create  the project">
  Use the [Create project](/reference/admin-api/Projects#create-project) endpoint to create a project in the hosting region you prefer:
  
  <br/>
  
  ```curl
curl --request POST \
     --url https://admin.api.video/projects \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic {$adminApiKey}' \
     --header 'Content-Type: application/json' \
     --data '
{
  "name": "My Programmatically Created Project",
  "region": "eu-central-1"
}
```
  <br/>
  
  </Step>
  <Step title="Check the response">
  
  The API returns a `201 - Project created successfully` response with the ID of the project you just created:
  <br/>
  
  ```json
  {
  "project_id": "{Your new project's ID}",
  "created_at": "2024-08-10T17:32:28Z",
  "name": "My Programmatically Created Project",
  "region": "eu-central-1"
  }
  ```
  <br/>
  
  </Step>
  <Step title="Create the API key"> 
  Use the `project_id` as the path parameter for the [Create API key](/reference/admin-api/API-keys#create-api-key) endpoint to create an API key tied to your new project:
  <br/>
  
  ```curl
curl --request POST \
     --url https://admin.api.video/projects/{Your new project's ID}/api-keys \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic {$adminApiKey}' \
     --header 'Content-Type: application/json' \
     --data '
{
  "name": "My API key"
}
  ```
  <br/>

  You're done! You can now use the API key you created to interact with your new project.
   
  </Step>
  
</Steps>

## Pagination

All lists in the API’s responses are paginated. The default page size is 20 records, and the maximum page size is 100 records. You can define page size in your requests.

Paged responses include links under the `links` object. These links help you navigate the paginated list of results:
    - `"rel": "previous"` links to the previous page, when the current page is more than 1
    - `"rel": "self”` links to the current page
    - `"rel": "next"` links to the next page when the list has more items. This is useful for building infinite scroll.

For example, if you want to retrieve the next page of results, you can make another request with the page number, which you can pull from the `links` object with the value of `rel: "next"` value.

 A call to `GET https://ws.api.video/videos?currentPage=2&pageSize=20` will give you the next 20 videos.

    - Default page size: 20 records
    - Max page size: 100 records

Paged responses do not include the total number of items. To get the count for total number of items, make a separate API call to the `/count` operation. This enables the Admin API to have better responsiveness when listing large amounts of data.
    
### Pagination example
    
<Tabs>
    <Tab title="Page 1/3">
    ```json
        {
            "items": [...],
            "pagination": {...},
            "links": [
                {
                    "rel": "self",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=1"
                },
                {
                    "rel": "next",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=2"
                }
            ]
        }
    ```
    </Tab>
    <Tab title="Page 2/3">
    ```json
        {
            "items": [...],
            "pagination": {...},
            "links": [
                {
                    "rel": "previous",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=1"
                },
                {
                    "rel": "self",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=2"
                },
                {
                    "rel": "next",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=3"
                }
            ]
}
    ```
    </Tab>
    <Tab title="Page 3/3">
    ```json
        {
            "items": [...],
            "pagination": {...},
            "links": [
                {
                    "rel": "previous",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=2"
                },
                {
                    "rel": "self",
                    "href": "/projects?page_size=20&name=aaa&sort_by=name&sort_order=desc&page=3"
                },
            ]
        }
    ```
    </Tab>
</Tabs>