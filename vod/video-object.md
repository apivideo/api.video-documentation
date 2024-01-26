---
title: What is a video object?
meta:
  description: Short guide to explain what api.video video objects are.
---

# What is a video object?

The video object in reference to api.video is a container of sort (not to be confused with [video container](https://headendinfo.com/video-container/)) for the video that you upload.

Before you [upload a video](/reference/api/Videos#upload-a-video), you need to [create the video object](/reference/api/Videos#create-a-video-object) that will contain the video itself after you upload it. 

{% include "_partials/dark-light-image.md" dark: "/_assets/vod/video-object/create-a-video-dark.svg", light: "/_assets/vod/video-object/create-a-video-light.svg", alt: "A diagram that shows the steps of creating a video object, and uploading a video"  %}

The video object has properties and metadata that you can create and update, below are the attributes that are available for the video object.

## Video Object Parameters

The video object is a powerful feature that you can utilize in order to achieve many use cases by leveraging the parameter that is offered with the object.

### Video ID

The video ID is a unique identifier for the video object that you create. Use it to identify a specific video object through the API. For example, you need the video ID when you [upload a video](https://docs.api.video/reference/api/Videos#upload-a-video), [retrieve a video object](https://docs.api.video/reference/api/Videos#retrieve-a-video-object), or [update a video object](https://docs.api.video/reference/api/Videos#update-a-video-object). For a full list of API operations, check out the [`/videos` endpoint](https://docs.api.video/reference/api/Videos) in the API reference.

You can retrieve the video ID for a video object via these methods:

* when creating a video object, the API returns the `videoId` in the response payload
* when listing all video objects associated with your current workspace, the API returns the `videoId` for each video object in the response payload

You can also retrieve video IDs through the Dashboard - visit the [Videos page](https://dashboard.api.video/videos) to see each video in your workspace and the video IDs associated with them.


### Title

The title of the video. The title will display on the embedded player when the controls are present in the video. You can set the title on creation or update it later.

### Description

The video description. Will give you the description of the video. You can set the description on video object creation or update it later.

### Source: Copy a Video from your workspace

You can either add a video already on the web, by entering the URL of the video, or you can also enter the videoId of one of the videos you already have on your api.video account, and this will generate a copy of your video. Creating a copy of a video can be especially useful if you want to keep your original video and trim or apply a watermark onto the copy you would create.

### Public: Video Access Management

On creation, the video can either be public or private. If the video is set to public `true`, the url of the video can be accessed by anyone that has the url, however, you can secure the video and make it private. Set the public parameter to `false` to convert the video to private and limit access to the video url. You can get started with Video Access Management [here](/delivery-analytics/video-privacy-access-management).

### Panoramic: Upload 360-degree Videos

api.video allows you to upload [panoramic videos (or 360-degree videos)](https://en.wikipedia.org/wiki/360-degree_video). When you upload a panoramic video, make sure that on the object creation, the panoramic parameter value should be set to `true`. By default the value is `false`

### Mp4support: Video Download by Users

The parameter will allow your users to have a download button on the player.

### PlayerId: Add Video Player Theme

As you can create different [player themes](/reference/api/Player-Themes), you can pass in the player theme that will be used with this specific video.

### Tags

In order to sort your videos, you can leverage the tags parameter. The video object can have an array of tags, when you retrieve all the videos, you can filter the videos by tags and get only the videos you've tagged with a specific value.

### Metadata: Pass Data with the Video to The Front-end

A powerful feature that allows you to pass in data with the video object. It is a list of key-value pairs that you use to provide metadata for your video. Metadata values can be `key:value` where the values are predefined. Check out the [Metadata guide](/vod/tags-metadata#metadata) for more details.

### Clip: Trim the Video

Allows you to trim the video by passing in the segment that you would like to trim. You can pass in the start time and end time of the segment. Note, that you can only clip a video once the video object is being created, you cannot update the object later on. You can find this [tutorial](https://api.video/blog/tutorials/how-to-create-a-video-clip/) to learn more.

### Watermark

Allows you to add a watermark to the video from your pre-uploaded [watermarks](/reference/api/Watermarks). Note, that the watermark can only be added on the video object creation, you will not be able to update a video object watermark.
