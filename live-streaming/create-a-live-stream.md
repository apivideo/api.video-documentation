---
title: Get started with live stream in 5 minutes
meta: 
    description: This guide will cover how to set up your live stream with api.video and then use OBS to broadcast.
---

# Get started with live stream in 5 minutes

Creating a live stream is simple with api.video. After you create it, you have a variety of options for connecting live video and to begin broadcasting. Check out this short video to get started!

<iframe src="https://embed.api.video/vod/vi6mgcrUqQuLyQNRW0qbl6gt" type="text/html" width="100%" height="500" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>

This guide helps you follow along with the video and learn how to set up your live stream with api.video, and then use OBS to broadcast.

<Callout pad="2" type="info">
api.video supports both `RTMP` and `SRT` protocols for live streaming.

Accepting live streams through `SRT` **is currently in beta** - reach out if you have any questions or encounter any issues!
</Callout>

## API reference

- [Create live stream](/reference/api/Live-Streams#create-live-stream)

## Choose an api.video client

The clients offered by api.video include:

- [NodeJS](../sdks/api-clients/apivideo-nodejs-client.md)
- [Python](../sdks/api-clients/apivideo-python-client.md)
- [PHP](../sdks/api-clients/apivideo-php-client.md)
- [Go](../sdks/api-clients/apivideo-go-client.md)
- [C#](../sdks/api-clients/apivideo-csharp-client.md)
- [Java](../sdks/api-clients/apivideo-java-client.md)
- [Swift](../sdks/api-clients/apivideo-swift5-client.md)
- [Android](../sdks/api-clients/apivideo-android-client.md)

## Install

To install your selected client, do the following: 

{% capture samples %}
```go
go get github.com/apivideo/api.video-go-client
```
```php
composer require api-video/php-api-client
```
```javascript
npm install @api.video/nodejs-client --save

...or with yarn: 
  
yarn add @api.video/nodejs-client
```
```python
pip install api.video
```
```csharp
Using Nuget
  
Install-Package ApiVideo
```
{% endcapture %}
{% include "_partials/code-tabs.md" samples: samples %}

## Create an account

Before you can start streaming, you need to [create an api.video account](https://dashboard.api.video/register). 

Once you are logged in to the Dashboard, select the environment of your choice (sandbox or production) and copy your API key.

## Create a live stream container

The first part of setting up your live stream to broadcast is to create a live stream container. Once you create the container, you can use it for live streaming. Here is the code to create the container: 

{% capture samples %}
```go
package main

import (
    "context"
    "fmt"
    "os"
    apivideosdk "github.com/apivideo/api.video-go-client"
)

func main() {
    client := apivideosdk.ClientBuilder("YOUR_API_TOKEN").Build()
    // if you rather like to use the sandbox environment:
    // client := apivideosdk.SandboxClientBuilder("YOU_SANDBOX_API_TOKEN").Build()
        
    liveStreamCreationPayload := *apivideosdk.NewLiveStreamCreationPayload("My Live Stream Video") // LiveStreamCreationPayload | 

    
    res, err := client.LiveStreams.Create(liveStreamCreationPayload)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LiveStreams.Create``: %v\n", err)
    }
    // response from `Create`: LiveStream
    fmt.Fprintf(os.Stdout, "Response from `LiveStreams.Create`: %v\n", res)
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\LiveStreamsApi;

$apiKey = 'your API key here';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$payload =(new \ApiVideo\Client\Model\LiveStreamCreationPayload())->setName("Live Stream")->setPublic(true);
$livestream = $client->liveStreams()->create($payload);
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const liveStreamCreationPayload = {
			name: "My Live Stream Video", // Add a name for your live stream here.
			_public: true, // Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
			playerId: "pl4f4ferf5erfr5zed4fsdd", // The unique identifier for the player.
		}; 

        // LiveStream
        const result = await client.liveStreams.create(liveStreamCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Create a live stream. 
import apivideo
from apivideo.apis import LiveStreamsApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

live_stream_api = LiveStreamsApi(client)

live_stream_creation_payload = {
    "name": "My live stream"
}

## Create the live stream
response = live_stream_api.create(live_stream_creation_payload)
print(response)
```
```curl
curl --request POST \
     --url https://ws.api.video/live-streams \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MTQxNDUuMjE2Mzc2LCJuYmYiOjE2NDI4MTQxNDUuMjE2Mzc2LCJleHAiOjE2NDI4MTc3NDUuMjE2Mzc2LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.GSDqqMzBxo-wOwl9IVbOnzevm8A6LSyaR5kxCWUdkEneSU0kIdoNfhwmXZBq5QWpVa-0GIT8JR59W6npNO-ayhaXmV3LA6EQpvv0mHd_dAhg3N8T96eC0ps0YIrkmw0_Oe6iRgEDI-wJ9nc6tQWi9ybbMHi1LDBjxW4rbFlq7G59C1QZGabd14QO7uqAUUSNqHC1l42z_m7BTK1AhFiBEXmMcfW7X0VmGcaEUy7NiNda8rmq_nrdvkxgN8KHguXzxMsw_4GE_d0eQwHcZvS1q-FebI6b8AoqpoltFOZvUACCrfXH_D_UPshHuJM3apXbD2dg_zQicc8oWBHVGiobLQ' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "My Live Stream",
     "public": true,
     "playerId": "pt240hxAaDBLCYxUIPh0Fb2"
}
```
{% endcapture %}
{% include "_partials/code-tabs.md" samples: samples %}

## Connect to your live stream container

In this example, we will use [OBS Studio](https://obsproject.com), which is an open-source broadcasting application, to manually set up a live stream broadcast.

### Set up the streaming service

1. Open OBS and go to File and then Settings. In the Settings menu, go to **Stream**.

2. Next, you have to set up the streaming service provider. With api.video, you have the option to choose between `RTMP` and `SRT` protocols for live streaming.

   - For `RTMP`, open the dropdown menu for Service, and select **Show all**. In the resulting list, find api.video. This will set up streaming through api.video's default `RTMP` server: `rtmp://broadcast.api.video/s`. You can find the **Stream key** in the API response you received when you created the live stream container.
   
   - For `SRT`, open the dropdown menu for Service, and select **Custom**. Use this server URL: `srt://broadcast.api.video:6200?streamid={stream_key}` and replace `{stream_key}` with the **Stream key** in the API response that you received when you created the live stream container.
   
   You can configure your `SRT` stream through **SRT options**, which you can define using this syntax: `srt://IP:port?option1=value1&option2=value2`. For OBS Studio, the full list of options are those supported by [FFmpeg](https://ffmpeg.org//ffmpeg-protocols.html#srt).
   
   The most important option is `latency`, which is defined in microseconds. The minimum value is 120 ms (`latency=120000`), lower values will be ignored. Check out [OBS Studio's documentation](https://obsproject.com/wiki/Streaming-With-SRT-Or-RIST-Protocols) on the topic.
   
   Once you've set up the streaming service, apply the changes.

### Set a streaming source

3. Establish a source. In the Sources section for OBS, choose the source that you want to stream. This can be a video capture device, your desktop, or even another application.

4. Press **Start Streaming**!

To share your stream, grab the embed URL or the `iframe` that you received in the API response when you created the live stream container.

<Callout pad="2" type="info">
All live stream details like your Stream key, the embed URL, and the `iframe` are also available through the api.video dashboard. Go to the [Live streams](https://dashboard.api.video/livestreams) page, and open the Details of the live stream that you want to share.
</Callout>

## Live stream directly from your dashboard

If you don't want to set up your live stream programmatically, api.video enables you to demo live streaming from the dashboard with the click of a button. Do the following: 

1. Log in to your dashboard 

2. Navigate to Live streams

3. Click **Create a Live Stream**

   ![api.video dashboard](/_assets/live-streaming/create-live-stream.png)

4. Once the live stream object is created you can click on the **Live Stream Details** button to view more information about the live stream. You can even start your stream directly from the dashboard.

The live stream object contains all the information you'll need if you choose to broadcast using something else like OBS. You can pause the live stream at any time by clicking pause on the video. If you don't see your live stream start right away, give it a few minutes to get ready.