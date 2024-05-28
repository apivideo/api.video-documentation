---
title: Zapier
metadata:
  description: Thanks to Zapier, connect api.video with your favorite apps to trigger events when a video or a live stream is uploaded or edited.
---

# Zapier

[Zapier](https://zapier.com) is a no-code solution that allows fast integration with thousands of applications. Each automation created at Zapier is called a "Zap" and has a trigger (to kick off the automation) and an action (the thing that is done after the trigger). 

Watch this short video to get started with api.video integration using Zapier:

<iframe src="https://embed.api.video/vod/vi19sDyBdzOFcmiS1ZuMPJkr" type="text/html" width="100%" height="500" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>


<Callout pad="2" type="info">
A trigger might be "When a new encoding has been created at api.video" and the action would be to "share the playback link on Twitter." So now, whenever a new encoding is created, the zap will fire and automatically tweet the link to your followers.
</Callout>

The api.video integration features both triggers and actions. Check out the linked pages for more details about each action and trigger.

## Triggers

A Zapier Trigger is an event that kicks off an automation process. There are 5 Triggers in the api.video integration:
![Choosing a trigger event](/_assets/Zapier_1.png)

### Non instant:

- New [Video Created](/sdks/nocode/video-created): A new videoId has been created.
- New [Live Stream Created](/sdks/nocode/live-stream-created): A new LiveStreamId has been created.

### Instant

- [Live stream started](/sdks/nocode/live-stream-started): The live stream _broadcast_ has started.
- [Live stream ended](/sdks/nocode/live-stream-ended): The live stream _broadcast_ has ended.
- [Video encoding completed](/sdks/nocode/video-encoding-completed): Triggers when a specified encoding (based on size of the video) has been encoded and is ready to play.
- [All live events](/sdks/nocode/all-live-events): Three triggers in one endpoint: broadcast started, stopped and when the specified recording is ready for playback.

## Actions

- [Create Video](/sdks/nocode/create-video): Will create a video at api.video when triggered.
