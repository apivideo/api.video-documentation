---
title: Video best practices
meta:
  description: This guide provides best practices, limitations, and recommendations on how to work with video on demand via api.video.
---

# Video best practices

## How to create & upload a video

The concept of creating and uploading a video is pretty simple:

1.  **Create a video object:** Think about it as a box or shell for the video. Once you've created a video object, it's an empty shell, however, it has an id and assets.
2.  **Upload a video:** Now you can upload your video into that object.

A tutorial for uploading a video with curl can be found [here](https://api.video/blog/tutorials/video-upload-tutorial/)

A more visual representation can be found below:

<Image src="/_assets/vod/video-best-practices/create-a-video-light.svg" src_dark="/_assets/vod/video-best-practices/create-a-video-dark.svg" alt="A diagram that shows the steps of creating a video object, and uploading a video" />

<Callout pad="2" type="info">
**Important things to know**
* **All qualities encoding:** The encoded video object will include:
   * up to 6 responsive video streams from 240p to 4K,
   * an HLS container with the videos in H264,
   * an mp4 version that contain a H264 video, **in the highest quality** received from the source.
* **Video size:** The video file size is limited to 30 GiB. The files will be compressed to fit delivery needs (4k max def with H.264 at 60fps max + AAC)
* **360° videos support:** Panoramic videos are videos recorded in 360°. You can toggle this after your 360° video upload.
* **Video Access Management:** When creating a video object, it can be either private or public. The feature allows you to change it later by updating the video object.
* **Progressive Upload:** Ability to upload videos in a progressive manner while they are being recorded.
</Callout>

## Recommendations

<Callout pad="2" type="success">
For optimal ingestion, the video should use:

- Resolution ≤ 4k
- Video codec: **h264**
    - ≤ 1080p max bitrate: 16Mbps
    - \> 1080p  ≤ 4k max bitrate: 50Mbps
- Standard Dynamic Range: **yuv420p**
- Framerate ≤ **60fps**
- Audio Codec: **aac**
</Callout>

## Limitations

<Callout pad="2" type="warning">
* When using the [sandbox environment](/reference#environments), the API:
   * limits the videos you upload to 30 seconds
   * adds a watermark to your videos that you cannot remove
   * deletes uploaded videos after 24 hours
* The API deletes empty video containers after 7 days.
* When using [progressive upload](/vod/progressive-upload):
   * a video uploaded in a single chunk **must be between 0 and 200MiB**
   * a video uploaded in several chunks must use at most **10 000 chunks each between 5MiB and 200MiB except the last chunk which must be between 0 and 200MiB**
* a video **must be uploaded/downloaded/copied in at most 7 days (168 hours)**
* an **uploaded/downloaded/copied video** must be:
    - **at most 30 GiB**
    - **of at most 24h**
* **ProRes RAW** video codec is currently not supported.
</Callout>

## Progressive video upload & uploading large videos

Some videos you might upload could be very large in size. We made sure that this is addressed and that there's a convenient way to upload large videos while breaking them into chunks. Please be sure to read the guide on how to make [progressive video upload](/vod/progressive-upload).

## Video Access Management

The video object will be created as public by default. If you want to make the video private, you just need to create a private video object or update it later. You can read all about Private Videos [here](/delivery/video-privacy-access-management.md)

* Searchable parameters: title, description, tags and metadata

```shell
$ curl https://ws.api.video/videos \
    -H 'Authorization: Bearer {access_token} \

-d '{"title" : "My video", "description" : "so many details", "mp4Support" : true }'` 
```

## Create a video from a URL

You can also create a video directly from a video hosted on a third-party server by giving its URI in `source` parameter:

```shell
$ curl https://ws.api.video/videos \
   -H 'Authorization: Bearer {access_token} \

-d '{"source":"http://uri/to/video.mp4", "title":"My video"}'` 
```

In this case, the service will respond `202 Accepted` and ingest the video asynchronously.

## Restoring deleted videos

By default, deleting a video is a permanent action. To avoid accidents and enable you to restore deleted videos, api.video offers the [Video Restore](https://dashboard.api.video/account-settings/access) feature.

* If you have the Video Restore feature enabled, the `DELETE` operation will temporarily remove the video instead of permanently deleting it. 
* Videos that are removed cannot be played. Restore the video first if you want to play it again.
* You can restore removed videos both via the API and the dashboard. Check out [this guide](/vod/delete-a-video) for the details.
* The Video Restore feature retains videos for 90 days, after which the videos are permanently deleted.

Visit the [dashboard](https://dashboard.api.video/account-settings/access) to enable this feature!

## Resources

Check out api.video's blog content and tutorials about:

* [Creating](https://api.video/blog/endpoints/video-create/) and [uploading](https://api.video/blog/endpoints/video-upload/) videos
  
* [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos/)
  
* [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices/)
  
* [Private videos](https://api.video/blog/product-updates/video-access-management-how-to-create-deliver-and-manage-private-videos-and-what/)