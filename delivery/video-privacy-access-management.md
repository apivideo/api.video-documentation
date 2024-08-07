---
title: What are private videos?
meta:
    description: This guide explains how you can limit acces to videos for your users through api.video's Private video feature.
---

# What are private videos?

When uploading user videos it's important to value the user's privacy, while we also recognize that there are some use cases in which you would like to use a different player other than the one we offer from api.video.

### How do private videos works?

We offer the ability to create a one-time video with a destructible private token. When the user opens the video once, it's playable in the same page for the next 24 hours and the session is retained with the ability to refresh the page. The same url is not accessible the second time when trying to access it from a different browser, page or tab.

<Callout pad="2" type="info">
A **private token** is a string of unique numbers and letters. For example: `0092d5ef-5750-471d-9e7e-48d0a7580238` that is generated and passed with a private video in order to keep it secured and inaccessible to anyone that doesn't have that private token.
</Callout>

<Image src="/_assets/delivery-analytics/private-videos/private-videos-light.svg" src_dark="/_assets/delivery-analytics/private-videos/private-videos-dark.svg" alt="A diagram that shows the process of using private tokens" />

### How to create private videos?

You can either [create a private video from the API](/reference/api/Videos#create-a-video-object) or [update a video to be private later through the API ](/reference/api/Videos#update-a-video-object). You can also do this through the dashboard.

**public** videos url will consist of few parts, also depending on the video link:  
`https://{api.video video type}.api.video/vod/{video id}/{optional extension}`  
For example:

- Embedded video url: `https://embed.api.video/vod/a1B2c3D4e5f6z7Y8z9`
- HLS video url: `https://vod.api.video/vod/a1B2c3D4e5f6z7Y8z9/hls/manifest.m3u8`

**private** videos will have a private token added to the video url which will can be used once, for example:

- Embedded video url: `https://embed.api.video/vod/a1B2c3D4e5f6z7Y8z9token=4dfe3225-55b1-4cf3-9671-ccc428baf929`
- HLS video url: `https://vod.api.video/vod/a1B2c3D4e5f6z7Y8z9/token/4dfe3225-55b1-4cf3-9671-ccc428baf929/hls/manifest.m3u8`

You can see that for each url the token will be included in different places. For the embedded video the private token is a query string, while the HLS manifest has the token in the url path.

### Private videos reusability

You can [retrieve a video](/reference/api/Videos#retrieve-a-video-object) via the API, which will generate the private token while you retrieve it. Each time you make a new request to retrieve a video it will generate a new private token. Hence, if the same user would like to play the video multiple times, on different pages you'll need to make a request to the `https://ws.api.video/videos/{videoId}` endpoint mentioned above in order to get a new private token.

<Image src="/_assets/delivery-analytics/private-videos/private-video-reusability-light.svg" src_dark="/_assets/delivery-analytics/private-videos/private-video-reusability-dark.svg" alt="A diagram that shows the process of reusing private videos" />

Once you've retrieved the video you can either use api.video player or an external player to play it back for the user. Hence the user can play it back for as long as the session lives, which is 24 hours in this case. When the session has ended, you will have to generate a new private token.