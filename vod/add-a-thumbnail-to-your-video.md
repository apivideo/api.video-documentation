---
title: Add a thumbnail to your video
meta:
    description: Learn how to add thumbnails programmatically or via the Dashboard to videos uploaded to api.video.
---

# Add A Thumbnail To Your Video

For videos or recorded live streams, api.video offers you two ways to add a thumbnail:

- Upload an image as a thumbnail
- Choose a timecode in your video and use that as the thumbnail 

This guide walks you through both methods for setting up a thumbnail for videos. 

<Callout pad="2" type="info">
If you want to add a thumbnail to a live stream, the only available method is to upload a picture you choose. You can read more about this in the [Add or delete a live stream thumbnail](/live-streaming/add-or-delete-a-live-stream-thumbnail) guide.
</Callout>

## API documentation

- [Upload a thumbnail](/reference/api/Videos#upload-a-thumbnail)
- [Pick a thumbnail](/reference/api/Videos#set-a-thumbnail)

## Upload a thumbnail

You have the option to choose a photo that's in `.jpg`, `.png`, or `.webp` format. It must be 8MB or smaller. To send your file, add the path to where it's stored and open it in binary. Then you can upload it with the client of your choice or see how it works with cURL. 

<CodeSelect title="Uploading a thumbnail">
```curl
curl --request POST \
     --url https://ws.api.video/videos/vi61tikT4GAAB29KehMKyqX3/thumbnail \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI1NDk1NjAuMDE5ODA0LCJuYmYiOjE2NDI1NDk1NjAuMDE5ODA0LCJleHAiOjE2NDI1NTMxNjAuMDE5ODA0LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.jjr4YADGbe62RmBBxJXLy1D61Mtfry_dq9nbriBXgkPrdlBJ8ZRP50CyW3AsGD7wSuKp2mXxEYSzj64zelT1IGOwg6KG4Gz9BZ9YWs0GAHKUIdgqn1gzITX5aQljIXx1fquXbawd-axBTi4icmaUjgXjfnyIcWOgHd2D8A3kpKiqiMmluh58JdnwPnH0OyVk0Rk824P0PI6SxfiTHfkCglPL6ixf9OgokMLPoVrsxH5C0xt3Z7lf5TJ0F78-JY-yTKvyaTTIfI6CFOMNaZUlMtgQwq8X93_2FA65Ntw3hdDML8gFKkLUxnBAtZMo9WAjUd30G4OcYasmlkc4Q_JSNw' \
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
        
    videoId := "videoId_example" // string | Unique identifier of the chosen video 
    file := os.NewFile(1234, "some_file") // *os.File | The .jpg image to be added as a thumbnail.

    
    res, err := client.Videos.UploadThumbnailFile(videoId, file)

    // you can also use a Reader instead of a File:
    // client.Videos.UploadThumbnail(videoId, fileName, fileReader)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Videos.UploadThumbnail``: %v\n", err)
    }
    // response from `UploadThumbnail`: Video
    fmt.Fprintf(os.Stdout, "Response from `Videos.UploadThumbnail`: %v\n", res)
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\VideosApi;
use ApiVideo\Client\Model\UploadTokensApi;
$apiKey = 'your API key here';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$payload = (new \ApiVideo\Client\Model\VideoThumbnailPickPayload())->setTimecode('00:01:00.000');
$videos = $client->videos()->uploadThumbnail('vi6tQSoof7aXoHSpeCh1z4m1', new SplFileObject('logo_orange.png'));
print($videos);
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'videoId_example'; // Unique identifier of the chosen video 
        const file = 'BINARY_DATA_HERE'; // The .jpg image to be added as a thumbnail.

        // Video
        const result = await client.videos.uploadThumbnail(videoId, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Upload an image as a thumbnail for your video
import apivideo
from apivideo.apis import VideosApi
from apivideo.exceptions import ApiAuthException

## Set variables, you need the video ID for the video you want to add a thumbnail to.
api_key = "your api key here"
video_id = "your video ID here"

## Open the file you want to use as the thumbnail in binary format. Your image must
## have an extension that is one of these: jpeg, jpg, JPG, JPEG 
file = open("your jpg", "rb")

## Authenticate and set up your client 
client = apivideo.AuthenticatedApiClient(api_key)

client.connect()

videos_api = VideosApi(client)

## Send the thumbnail and video ID to API video. The thumbnail is added to the video associated with the ID 
## you provide. You can check on your dashboard to make sure the thumbnail was added. 

response = videos_api.upload_thumbnail(video_id, file)
print(response)
```
</CodeSelect>

## Pick a thumbnail

If you don't want to create a custom thumbnail image for your video, you can select one from the video itself. All you need to do is choose the timecode to the frame you want to be the thumbnail. The accepted formats are:

- `HH:MM:SS.mm` - hours, minutes, seconds, milliseconds
- `hh:mm:ss:frameNumber`
- `int` - integer value is reported as seconds

If your selection is out of range, `00:00:00.00` will be used.


<CodeSelect title="Picking a thumbnail">
```curl
curl --request PATCH \
     --url https://ws.api.video/videos/viZxSTFgXZVjFnFCUo363Ie/thumbnail \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI1NDk1NjAuMDE5ODA0LCJuYmYiOjE2NDI1NDk1NjAuMDE5ODA0LCJleHAiOjE2NDI1NTMxNjAuMDE5ODA0LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.jjr4YADGbe62RmBBxJXLy1D61Mtfry_dq9nbriBXgkPrdlBJ8ZRP50CyW3AsGD7wSuKp2mXxEYSzj64zelT1IGOwg6KG4Gz9BZ9YWs0GAHKUIdgqn1gzITX5aQljIXx1fquXbawd-axBTi4icmaUjgXjfnyIcWOgHd2D8A3kpKiqiMmluh58JdnwPnH0OyVk0Rk824P0PI6SxfiTHfkCglPL6ixf9OgokMLPoVrsxH5C0xt3Z7lf5TJ0F78-JY-yTKvyaTTIfI6CFOMNaZUlMtgQwq8X93_2FA65Ntw3hdDML8gFKkLUxnBAtZMo9WAjUd30G4OcYasmlkc4Q_JSNw' \
     --header 'Content-Type: application/json' \
     --data '
{
     "timecode": "00:00:00.000"
}
'
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
        
    videoId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
    videoThumbnailPickPayload := *apivideosdk.NewVideoThumbnailPickPayload("Timecode_example") // VideoThumbnailPickPayload | 

    
    res, err := client.Videos.PickThumbnail(videoId, videoThumbnailPickPayload)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Videos.PickThumbnail``: %v\n", err)
    }
    // response from `PickThumbnail`: Video
    fmt.Fprintf(os.Stdout, "Response from `Videos.PickThumbnail`: %v\n", res)
}
```
```php
use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\VideosApi;
use ApiVideo\Client\Model\UploadTokensApi;
$apiKey = 'your API key';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$payload = (new \ApiVideo\Client\Model\VideoThumbnailPickPayload())->setTimecode('00:01:00.000');
$videos = $client->videos()->pickThumbnail('vi6tQSoof7aXoHSpeCh1z4m1', $payload);
print($videos);
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
        const videoThumbnailPickPayload = {
			timecode: "timecode_example", // Frame in video to be used as a placeholder before the video plays.  Example: '\"00:01:00.000\" for 1 minute into the video.' Valid Patterns:  \"hh:mm:ss.ms\" \"hh:mm:ss:frameNumber\" \"124\" (integer value is reported as seconds)  If selection is out of range, \"00:00:00.00\" will be chosen.
		}; 

        // Video
        const result = await client.videos.pickThumbnail(videoId, videoThumbnailPickPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Pick a thumbnail from your video's timeline to use instead of uploading an image
import apivideo
from apivideo.apis import VideosApi
from apivideo.exceptions import ApiAuthException

## Set variables, you need the video ID for the video you want to add a thumbnail to.
api_key = "your api key here"
video_id = "video ID for video to pick thumbnail for here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

videos_api = VideosApi(client)

## Choose a time from your video to use as the thumbnail. 
video_thumbnail_pick_payload = {
    "timecode": "00:00:10:000"
}

response = videos_api.pick_thumbnail(video_id, video_thumbnail_pick_payload)
print(response)
```
</CodeSelect>

## Add a thumbnail from the dashboard

api.video enables you to add a thumbnail from the dashboard. Both choices discussed in this guide are available here too - Timestamp and Upload image. 

1. Visit the [Videos page](https://dashboard.api.video/videos) in the dashboard to get started.

2. Locate the video that you want to add a thumbnail to, and click on **Video Details**.

3. On the video details page, scroll down to the section where you see Thumbnail as an option. Click on **Update thumbnail**.

![Tumbnail details on the video information page](/_assets/vod/video-thumbnail.png)

3. To select a frame as a thumbnail from your video, click **Timestamp**. Enter the timestamp of the frame in HH:MM:SS (hours, minutes, seconds). Click **Set Tumbnail**.

![Updating a thumbnail](/_assets/vod/video-thumbnail-2.png)

4. If you're adding an image, the same file constraints apply as they do when you use the API. Click **Upload image** to select this method and either drag & drop, or upload a file by browsing your device. Push **Upload Tumbnail** to finalize.

## Conclusion

There are two ways to add thumbnails - adding an image or choosing a frame from the video. Adding an image as the thumbnail is great if you want to do special branding for your video, or other elements.
