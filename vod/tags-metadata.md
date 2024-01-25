---
title: Video tags and metadata
meta: 
  description: TBA
---

# Video tags and metadata

When you create or update a [video object](/vod/video-object), api.video enables you to define tags and metadata for your videos. This guide helps you understand the concept of these attributes, and how you can use them for effective video management.

## Tags

The concept of `tags` is simple - you can use them to label and categorize videos. Each video object accepts multiple tags, so you can be as granular as you want when categorizing content. The tags you define can then be used to filter for specific content when listing videos.

### How to use tags

You can add, update, or remove tags, and use them to filter videos through both the API and the [api.video Dashboard](https://dashboard.api.video/).

**Through the API**

1. You can **create tags** in the very first step of the video upload process. When creating a video object, simply add the `tags` attribute to your request body, and define the tags as an array of strings:
    
    ```json
    "tags": [
    		"maths",
    		"string theory",
    		"video"
    	]
    ```
    
    Check out the [API reference](/reference/api/Videos#create-a-video-object) for a complete request example.
    
2. Both **updating** and **removing tags** can be done through the [Update a video object](/reference/api/Videos#update-a-video-object) endpoint. Here’s an example. Let’s say you have 2 tags defined for a video:
    
    ```json
    "tags": [
    		"nice_tag",
    		"boring_old_tag"
    	]
    ```
    
    Now, let’s remove `boring_old_tag`, and add `awesome_new_tag` to the video. We’ll also keep the `nice_tag`. 
    
    The `tags` array in your request should look like this:
    
    ```json
    "tags": [
    		"nice_tag",
    		"awesome_new_tag"
    	]
    ```
    
    That’s it!
    
3. When **listing videos**, you can filter results with the `tags` parameter. Simply add the tag you want to filter for to your request. You can add multiple tags to further narrow down search results. Check out the [List all video objects](/reference/api/Videos#list-all-video-objects) endpoint in the API reference for examples.

### Use case examples

- When you’re building a platform for user generated content, surface the `tags` field for your users to enable them to categorize their videos. This gives your users more control over their content, and can even enable features like tag-based content recommendations, and trending tags.
- When you have both private and public videos, use tags to easily filter for each type.

## Metadata

Metadata is a powerful tool that enables you to add an extra layer of data to your videos. You can define an array of custom key-value pairs and use the data to drive certain features and enhance your application or website. Each video can have multiple key-value pairs in `metadata`, and you can use them to filter for specific content when listing videos, and to integrate video content into your app or website even more.

### How to use metadata

You can add, update, or delete metadata to create an additional layer of data and filter videos using both the API and the api.video Dashboard.

**Through the API**

1. You can **add metadata** in the very first step of the video upload process. When creating a video object, simply add the `metadata` attribute to your request body, and define it as an array of objects. Each object has a key-value pair, where every key and value is a string:
    
    ```json
    "metadata": [
        {
          "key": "lesson_type",
          "value": "physics"
        },
        {
          "key": "teacher_name",
          "value": "Albert E."
        }
      ]
    ```
    
    Check out the [API reference](/reference/api/Videos#create-a-video-object) for a complete request example.
    
2. Both **updating** and **removing metadata** can be done through the [Update a video object](/reference/api/Videos#update-a-video-object) endpoint. Check out this example: let’s say you have 3 key-value pairs of metadata defined for a video:
    
    ```json
    "metadata": [
        {
          "key": "user_id",
          "value": "123456"
        },
        {
          "key": "user_plan",
          "value": "free"
        },
        {
          "key": "video_label",
          "value": "demo"
        }
      ]
    ```
    
    Let’s say that this user `123456` loves your platform so much that they upgraded from a `free` plan to a `pro` plan. Let’s update the value of `user_plan`, and let’s remove the `video_label` from this video. 
    
    The `metadata` array in your request should look like this:
    
    ```json
    "metadata": [
        {
          "key": "user_id",
          "value": "123456"
        },
        {
          "key": "user_plan",
          "value": "pro"
        }
      ]
    ```
    
    That’s it!
    
    {% capture content %}
    The [Update a video object](/reference/api/Videos#create-a-video-object) endpoint is a `PATCH` operation that implements JSON Merge Patch. This means that tags and metadata you define in your `PATCH` request will replace the existing contents of the `tags` and `metadata` arrays. To avoid losing tags and metadata that you already defined and want to keep, make sure that you include them in your request.
    {% endcapture %}
    {% include "_partials/callout.html" kind: "info", content: content %}
    
3. When **listing videos**, you can filter results with the `metadata` parameter. Simply add the key and value that you want to filter for to your request. You can add multiple key-value pairs to further narrow down search results. Check out the [List all video objects](/reference/api/Videos#list-all-video-objects) endpoint in the API reference for examples.

### Use case examples

- When building an e-learning platform, you can use metadata to add structure to your videos. Think of keys like `chapter_index`, `lesson_number`, `difficulty_level`, and so on.
- You can introduce human-readable `ID`s, or slugs for each video. These can be independent from the video’ title, and the `videoID`.
- When building a UGC platform, you can connect each video to the user that uploaded them. Simply define a key-value pair like `“user_id”: “123456”` and fill it programmatically, whenever a user uploads a video.
- You can add notes, track statuses, or even use it to surface embedded metadata like geolocation for your videos. The possibilities are endless!

## Managing tags and metadata in the Dashboard

1. You can add and remove both tags and metadata by opening the **Video Details** of any video listed on the [Your Videos](https://dashboard.api.video/videos) page.
    
    ![Video list in api.video dashboard](/_assets/vod/tags-metadata/documentation_tagsandmeta_videolist.png)
    
2. Once there, click on **Update video**. 
3. Add or remove the tags and the key-value pairs for metadata that you want, then click on **Update video** again. That’s it!
4. To filter videos based on these tags or key-value pairs, open the [Your Videos](https://dashboard.api.video/videos) page and select the Filter dropdown:
    
    ![Video list filtering by tags or metadata in the api.video dashboard](/_assets/vod/tags-metadata/documentation_tagsandmeta_filtering.png)
    
5. Add the tag or metadata you want to filter for and click on **Apply**. The videos list will be filtered to only show videos that you are looking for.

## What’s the difference then?

In the end, both `tags` and `metadata` are just strings tied to a specific video. Tags have very straightforward usage: labeling and categorization. 

The power of metadata however lies in all the different ways you can use it, and enhance your product with an extra layer of information.

[Sign-up](https://dashboard.api.video/register) for a free sandbox account and try using metadata with your videos. If you have any questions, or would like to share your use case, join the [api.video Community](https://community.api.video/)!