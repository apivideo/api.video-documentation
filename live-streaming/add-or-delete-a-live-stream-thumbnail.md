---
title: Add Or Delete A Live Stream Thumbnail
meta: 
    description: This guide explains how you can add or remove thumbnails to a live stream at api.video.
---

# Add Or Delete A Live Stream Thumbnail

You can add your image as the thumbnail. There is only one way to add a thumbnail to a live stream, unlike videos. This guide walks through how to add a live stream thumbnail. 

<Callout pad="2" type="info">
If you want to add a thumbnail to a video, there are two methods available - you can choose an image to upload, or you can pick a frame from the video to set as the thumbnail. To learn how to do this, please see the [Add a thumbnail to your video](/vod/add-a-thumbnail-to-your-video) guide.
</Callout>

## API documentation

- [Upload a thumbnail](/reference/api/Live-Streams#upload-a-thumbnail)
- [Delete a thumbnail](/reference/api/Live-Streams#delete-a-thumbnail)

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

## Installation

To install your selected client, do the following: 


<CodeSelect title="Installing the api.video client">
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
</CodeSelect>

## Create an account

Before you can start streaming, you need to [create an api.video account](https://dashboard.api.video/register). 

Once you are logged in to the Dashboard, select the environment of your choice (sandbox or production) and copy your API key.

## Add a live stream thumbnail

You can add a thumbnail image to your live stream by uploading the picture you want to use. You have the option to choose a photo that's in .jpg, .png, or .webp format. It must be 8MB or smaller. To send your file, add the path to where it's stored and open it in binary. Then you can upload it with the client of your choice or see how it works with cURL. 


<CodeSelect title="Adding a live stream thumbnail">
```curl
curl --request POST \
     --url https://ws.api.video/live-streams/vi4k0jvEUuaTdRAEjQ4Jfrgz/thumbnail \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MTQxNDUuMjE2Mzc2LCJuYmYiOjE2NDI4MTQxNDUuMjE2Mzc2LCJleHAiOjE2NDI4MTc3NDUuMjE2Mzc2LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.GSDqqMzBxo-wOwl9IVbOnzevm8A6LSyaR5kxCWUdkEneSU0kIdoNfhwmXZBq5QWpVa-0GIT8JR59W6npNO-ayhaXmV3LA6EQpvv0mHd_dAhg3N8T96eC0ps0YIrkmw0_Oe6iRgEDI-wJ9nc6tQWi9ybbMHi1LDBjxW4rbFlq7G59C1QZGabd14QO7uqAUUSNqHC1l42z_m7BTK1AhFiBEXmMcfW7X0VmGcaEUy7NiNda8rmq_nrdvkxgN8KHguXzxMsw_4GE_d0eQwHcZvS1q-FebI6b8AoqpoltFOZvUACCrfXH_D_UPshHuJM3apXbD2dg_zQicc8oWBHVGiobLQ' \
     --header 'Content-Type: multipart/form-data' \
     --form file=@pic.jpg
```
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
        
    liveStreamId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | The unique ID for the live stream you want to upload.
    file := os.NewFile(1234, "some_file") // *os.File | The .jpg image to be added as a thumbnail.

    
    res, err := client.LiveStreams.UploadThumbnailFile(liveStreamId, file)

    // you can also use a Reader instead of a File:
    // client.LiveStreams.UploadThumbnail(liveStreamId, fileName, fileReader)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LiveStreams.UploadThumbnail``: %v\n", err)
    }
    // response from `UploadThumbnail`: LiveStream
    fmt.Fprintf(os.Stdout, "Response from `LiveStreams.UploadThumbnail`: %v\n", res)
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

$livestream = $client->liveStreams()->list();

print($livestream);
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const liveStreamId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique ID for the live stream you want to upload.
        const file = 'BINARY_DATA_HERE'; // The .jpg image to be added as a thumbnail.

        // LiveStream
        const result = await client.liveStreams.uploadThumbnail(liveStreamId, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Upload an image to be a thumbnail for your live stream.
import apivideo
from apivideo.apis import LiveStreamsApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
live_stream_id = "your live stream ID here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

live_stream_api = LiveStreamsApi(client)

## Open image to use as thumbnail, should be in same directory as your code 
file = open("image1.jpg", "rb")

## Upload the thumbnail
response = live_stream_api.upload_thumbnail(live_stream_id, file)
print(response)
```
</CodeSelect>

## Delete a live stream thumbnail

To delete a live stream thumbnail, get the live stream ID for the live stream with the thumbnail you want to remove. Then send in a request for deletion using the client of your choice. The thumbnail will be removed from your live stream! 


<CodeSelect title="Deleting a live stream thumbnail">
```curl
curl --request DELETE \
     --url https://ws.api.video/live-streams/li400mYKSgQ6xs7taUeSaEKr/thumbnail \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MTQxNDUuMjE2Mzc2LCJuYmYiOjE2NDI4MTQxNDUuMjE2Mzc2LCJleHAiOjE2NDI4MTc3NDUuMjE2Mzc2LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.GSDqqMzBxo-wOwl9IVbOnzevm8A6LSyaR5kxCWUdkEneSU0kIdoNfhwmXZBq5QWpVa-0GIT8JR59W6npNO-ayhaXmV3LA6EQpvv0mHd_dAhg3N8T96eC0ps0YIrkmw0_Oe6iRgEDI-wJ9nc6tQWi9ybbMHi1LDBjxW4rbFlq7G59C1QZGabd14QO7uqAUUSNqHC1l42z_m7BTK1AhFiBEXmMcfW7X0VmGcaEUy7NiNda8rmq_nrdvkxgN8KHguXzxMsw_4GE_d0eQwHcZvS1q-FebI6b8AoqpoltFOZvUACCrfXH_D_UPshHuJM3apXbD2dg_zQicc8oWBHVGiobLQ'
```
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
        
    liveStreamId := "li400mYKSgQ6xs7taUeSaEKr" // string | The unique identifier for the live stream you want to delete. 

    
    res, err := client.LiveStreams.DeleteThumbnail(liveStreamId)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LiveStreams.DeleteThumbnail``: %v\n", err)
    }
    // response from `DeleteThumbnail`: LiveStream
    fmt.Fprintf(os.Stdout, "Response from `LiveStreams.DeleteThumbnail`: %v\n", res)
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

$livestream = $client->liveStreams()->delete("live stream ID");

print($livestream);
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // The unique identifier for the live stream you want to delete. 

        // LiveStream
        const result = await client.liveStreams.deleteThumbnail(liveStreamId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## List all live streams 
import apivideo
from apivideo.apis import LiveStreamsApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
live_stream = "your live stream ID here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

live_stream_api = LiveStreamsApi(client)

## Delete live stream thumbnail
response = live_stream_api.delete_thumbnail(live_stream)
print(response)
```
</CodeSelect>

## Conclusion

For live streams, you cannot pick a frame to be a thumbnail on the fly, so adding an image is the way to go.
