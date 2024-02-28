---
title: Delete a video
meta:
    description: This guide walks you through how to permanently remove a video programmatically, and through the dashboard.
---

# Delete A Video

This guide walks you through how to permanently remove a video programmatically, and through the dashboard. Please be aware that you cannot retrieve a video you delete, so be sure it's what you want to do.

## API documentation

- [Delete a video](/reference/api/Videos#delete-a-video-object)

## Delete a video

To delete a video, you need to do the following: 

1. Retrieve the video ID for the video you want to delete. You can do this by listing your videos and searching for the one you want, or you can look in your dashboard to find the video you want to delete. 

2. Send a delete request to api.video containing the ID for the video you want to delete. Be sure you want to delete the video - there is no way to retrieve the content you delete. 

{% capture samples %}
```curl
curl --request DELETE \
     --url https://ws.api.video/videos/viZxSTFgXZVjFnFCUo363Ie \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI1NDk1NjAuMDE5ODA0LCJuYmYiOjE2NDI1NDk1NjAuMDE5ODA0LCJleHAiOjE2NDI1NTMxNjAuMDE5ODA0LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.jjr4YADGbe62RmBBxJXLy1D61Mtfry_dq9nbriBXgkPrdlBJ8ZRP50CyW3AsGD7wSuKp2mXxEYSzj64zelT1IGOwg6KG4Gz9BZ9YWs0GAHKUIdgqn1gzITX5aQljIXx1fquXbawd-axBTi4icmaUjgXjfnyIcWOgHd2D8A3kpKiqiMmluh58JdnwPnH0OyVk0Rk824P0PI6SxfiTHfkCglPL6ixf9OgokMLPoVrsxH5C0xt3Z7lf5TJ0F78-JY-yTKvyaTTIfI6CFOMNaZUlMtgQwq8X93_2FA65Ntw3hdDML8gFKkLUxnBAtZMo9WAjUd30G4OcYasmlkc4Q_JSNw'
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
        
    videoId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | The video ID for the video you want to delete.

    
    err := client.Videos.Delete(videoId)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Videos.Delete``: %v\n", err)
    }
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\VideosApi;

$apiKey = 'your API key here';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$videos = $client->videos()->delete('video ID here');
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to delete.

        // void
        const result = await client.videos.delete(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Delete a video using its video ID
import apivideo
from apivideo.apis import VideosApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

videos_api = VideosApi(client)

title = "Sample AVI Video"

## List videos that have the exact, unique title you wanted to delete
videos = videos_api.list(title=title)

## Get list of videos out of response object or single item depending on whether you filtered
videos = videos['data']

## In this case, let's assume we know there's only one video with the title we filtered for. 
print(videos[0]['video_id'])
        
## Delete the video
response = videos_api.delete(videos[0]['video_id'])
print(response)
```
{% endcapture %}
{% include "_partials/code-tabs.md" samples: samples %}

## Delete a video in the dashboard

You can delete a video using your dashboard by doing the following:

1. Open your dashboard.

2. From the menu on the left, choose **Videos**.

3. On the Video screen, use the filtering and scrolling features to locate the video you want to delete. Place a checkmark next to one or more videos you want to delete, and push **Delete**.

   ![Showing the list of videos in the Dashboard](/_assets/vod/delete-video.png)

4. Deleting videos is a permanent action and there is no way to recover them. Keep this in mind when you confirm deleting the videos.

5. You can also select the breadcrumbs icon next to each video to open an actions panel where you can select **Delete**.

   ![Showing the action panel on the videos list in the Dashboard](/_assets/vod/delete-video-2.png)