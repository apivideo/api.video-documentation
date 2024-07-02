---
title: Admin API
meta: 
    description: This guide introduces and explains the usage of api.video's Admin API.
breadcrumbs: false
---

# Admin API

The Admin API is a tool that enables you to directly manage your api.video projects and API keys through a secure API. 

The Admin API is a robust solution with a simple goal: to make it easy for you to manage your projects and thus your users, and their access to your platform on a programmatic level.

Some examples where the Admin API can be especially useful:

- when you want to segment your user base and measure usage more granularly
- when you work with multiple clients and want to enable them separate access to different projects
- when you have users needing different folders/projects

## Endpoints

The Admin API offers 2 sets of endpoints: [`/projects`](/reference/admin-api/Projects) and `/api-keys`. In general, the Projects endpoints enable you to programmatically list all your projects, get a specific project, and to create or update a project, while the API keys endpoints enable you to programmatically list all your API keys, get a specific API key, and to create, update, or delete an API key.  

## Server URL

You should direct cach HTTP call to the Admin API through this URL:

`https://admin.api.video`

## Authentication

This API uses [Basic HTTP authentication scheme](https://datatracker.ietf.org/doc/html/rfc7617), which requires an **admin API key** to interact with the Admin API.  This API key is different from your individual projects’ API keys as it’s one level above them.

<Callout pad="2" type="success">
Contact the Customer support team to receive your API key.
</Callout>

The basic authentication requires adding an HTTP header in your request:

```bash
Authorization: Basic $base64Credentials
```

Where `$base64Credentials` is the concatenation of your API key and `:`, then base 64 encoded. 

<Callout pad="2" type="success">
The credentials for the Admin API are in the form `username:password`, where the API key acts as the `username` and `password` is left empty.
</Callout>

### Example authentication

```json
curl -u "$adminApiKey:" https://admin.api.video/projects/count
```

## Interact with the Admin API

- The API uses the REST approach: JSON requests and responses over HTTP.
- Every property you define in your requests should be in `snake_case`.
- All lists in the API’s responses are paginated:
    - Default page size: 20 records
    - Max page size: 100 records
- Paged responses do not include the total number of items. To get the count for total number of items, make a separate API call to the `/count` operation. This enables the Admin API to have better responsiveness when listing large amounts of data.

### Example usage of `/count`

```json
GET https://admin.api.video/projects/count
Authorization: Basic $base64Credentials

200 OK
{
	"count": 142305
}
```
Where `$base64Credentials` is the concatenation of your API key and `:`, then base 64 encoded.

- Paged responses include links under the `links` collection. These links help you navigate the paginated list of results.
    1. `"rel": "previous"`: the previous page link, when the current page is more than 1
    2. `"rel": "self”`: the current page link
    3. `"rel": "next"`: the next page link, when the list has more items, useful for building infinite scroll
    
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