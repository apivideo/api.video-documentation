---
title: Live Stream best practices
meta: 
    description: This guide explains how you can make the most of your live stream implementation using best practices at api.video.
---

# Live stream best practices

## Streaming protocols

api.video supports `RTMPS`, `RTMP`, and `SRT` protocols for live streaming.

## Streaming servers

| Protocol | Description                                | Server URL                                             |
| -------- | ------------------------------------------ | ------------------------------------------------------ |
| `RTMPS`  | The secure streaming server.               | `rtmps://broadcast.api.video:1936/s`                   |
| `RTMP`   | The default streaming server.              | `rtmp://broadcast.api.video/s`                         |
| `SRT`    | The `SRT` server.                          | `srt://broadcast.api.video:6200?streamid={stream_key}` |

### SRT details

* The minimum accepted value for `latency` is 120 ms, lower values will be ignored.
* The required SRT protocol version should be **1.3 or higher** - check your broadcasting application to make sure it supports the correct version.

### Which protocol to use

First, if your project or restream destinations support `RTMPS`, api.video recommends using this protocol rather than `RTMP` for the security it provides.

After this, take network connection into consideration - if you or your users stream in stable conditions with a low risk of congestion, `RTMPS` will probably achieve a better latency than `SRT`. If you or your users experience lots of buffering, or the network you use is known to be unstable, or network conditions may change like when using a mobile network, then `SRT` may be a good fit. 

Remember that both protocols have their pros and cons - with bad network conditions, viewers might encounter buffering with `RTMPS`, or they might encounter audio or visual glitches when using `SRT`.

## Starting a live stream

- When a stream is starting it might take up to 30 seconds for the player to start delivering.
- api.video recommends that you add an intro image or a simple countdown before starting the stream. This gives users time to connect before the stream starts, and makes it clear that the stream is about to begin.
- To ensure that your live stream is running in optimal quality, check the [recommended settings](#recommended-setting-for-ingestion).
- Make sure you verify that your connection is stable and the speed is adequate before starting the stream.

## Ending a live stream

Make sure to use an outro like a static image or music at the end of the stream for about 30 seconds. This is a good way to indicate to the audience that the stream has ended. You can then request the API to complete the live stream, which stops the broadcast and the recording of the live stream as well. Read more about completing a live stream [here](/live-streaming/working-with-live-streams#complete-a-live-stream).

## Limitations

This section lists the limitations of api.video's live streaming platform.

### Codecs

* The **video codec must be H.264**.
* The **audio codec must be AAC or MP3**.

### Live stream recording

Live streams are recorded automatically. The length of each recording is fixed at 12 hours. When a recording reaches this length, a new recording is started.

### DVR

When a live stream is ongoing, viewers can replay earlier content with the DVR feature.

* The available duration for DVR is 1 hour.
* DVR is only available for live streams that are actively broadcasting.
* When a live stream is completed, api.video stores the stream for another 4 to 5 minutes. The cached DVR is subsequently deleted after the live stream has ended.

### Re-connecting to a live stream

During a disconnection on ingest side, re-connection must occur within 10 seconds.

### Starting a new live stream

You can create a new live event using the **same `streamID`**, without keeping the DVR of a previous live. However, you must wait at least 1 minute 30 seconds before re-using the same `streamID`.

### Concurrent streaming

A live stream container only accepts a single live stream. It is not possible to create concurrent live streams on the same container.

### Sandbox limitations

* Live streaming is limited to 30 minutes.
* Live stream recording length is fixed at 30 seconds, after which the recording is cut. 
* Restreaming is only allowed for 2 minutes, after which the restreams are stopped.

## Recommended setting for ingestion

<Callout pad="2" type="info">
When [restreaming](/live-streaming/restreams), you should adapt the original live stream to fit the constraints of the restream destination's server requirements. api.video forwards the originating stream directly to the restream destination as received, without any modification.
</Callout>

- Bitrate encoding: CBR  
- Keyframe Interval: 2 seconds

| Quality          | Framerate | Video bitrate     | Audio sample rate | Audio Bitrate |
| ---------------- | --------- | ----------------- | ----------------- | ------------- |
| 240p             | 25-30 fps | 300-700 Kbps      | 48 kHz            | 64 Kbps       |
| 360p             | 25-30 fps | 400-1000 Kbps     | 48 kHz            | 128 Kbps      |
| 480p             | 25-30 fps | 500-2000 Kbps     | 48 kHz            | 128 Kbps      |
| 720p (30 fps)    | 25-30 fps | 1500-4000 Kbps    | 48 kHz            | 128 Kbps      |
| 720p (60 fps)    | 50-60 fps | 2250-6000 Kbps    | 48 kHz            | 128 Kbps      |
| 1080p (30 fps)   | 25-30 fps | 3000-6000 Kbps    | 48 kHz            | 128 Kbps      |
| 1080p (60 fps)   | 50-60 fps | 4500-9000 Kbps    | 48 kHz            | 128 Kbps      |
| 2160 (30 fps)    | 25-30 fps | 13000-34000 Kbps  | 48 kHz            | 192 Kbps      |
| 2160 (60 fps)    | 50-60 fps | 20000-51000 Kbps  | 48 kHz            | 192 Kbps      |