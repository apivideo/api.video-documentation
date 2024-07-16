---
title: Analytics with api.video
meta: 
  description: Set up the api.video player and start working with video analytics in 5 minutes
---

# Getting started with analytics

api.video provides you with powerful tools that enable you to deliver content to your users with great customization and branding while making sure that you get all of the data you need to analyze the viewer's behavior.

There are two parts to this tutorial, where we will jump into the player capabilities and then look at how to analyze the data we've received from the viewers.

## Get started with analytics

After we have a cool branded player, it would be great to get some data on your users. For that purpose, we have the api.video Analytics for your disposal. 


<Callout pad="2" type="info">
Please note, that we will only collect analytics from videos that were played through the api.video player. If you are using a custom player, you can leverage the [analytics SDKs](/sdks/player#player-analytics-sdks) to pass on the analytics to api.video.
</Callout>

In this example, we will check what countries your video was watched the most. 

### Preparation

<Callout pad="2" type="info">
In this example, we will be using the [api.video client libraries](/sdks/api-clients), however, is you prefer to use cURL or make the requests yourself, you are welcome to follow along with the [API reference documentation](/reference/api/Player-Themes).
</Callout>

### Add & initialize the api.video client library

<Callout pad="2" type="info">
If you've followed through the whole tutorial, you can skip this step
</Callout>

Let's add the api.video client library to our code.

<Callout pad="2" type="info">
Make sure to install the modules / libraries on your environment beforehand.
</Callout>

The client library takes your API key, which you can [find here](https://dashboard.api.video/project-settings/api-keys). Let's pass it the API key and initialize the client. 

You can learn more about authentication [here](/reference/authentication-guide).


<CodeSelect title="Initializing the api.video client">
```javascript
const ApiVideoClient = require('@api.video/nodejs-client')
```
```python
import apivideo
from apivideo.api import player_themes_api
from apivideo.model.player_theme_creation_payload import PlayerThemeCreationPayload
from apivideo.model.player_theme import PlayerTheme
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
}
```
```java
import video.api.client.ApiVideoClient;
import video.api.client.api.ApiException;
import video.api.client.api.models.*;
import video.api.client.api.clients.PlayerThemesApi;
import java.util.*;
```
```csharp
// First add the "ApiVideo" NuGet package to your project
// Documentation: https://github.com/apivideo/api.video-csharp-client/blob/main/docs/PlayerThemesApi.md#create

using System.Diagnostics;
using ApiVideo.Client;
```
```php
<?php
// First install the api client: "composer require api-video/php-api-client"
// Documentation: https://github.com/apivideo/api.video-php-client/blob/main/docs/Api/PlayerThemesApi.md#create

require __DIR__ . '/vendor/autoload.php';

$playerThemeCreationPayload = (new \ApiVideo\Client\Model\PlayerThemeCreationPayload())
```
</CodeSelect>

### Get the count of plays by country

As we planned, in this example, we want to analyze the viewers' geo-location. For that task, we will utilize the api.video client library and make use of the analytics endpoint to get the count of plays for a specific video.

If you are interested in a more in-depth overview, head over to the [Analytics & data page](/delivery-analytics/analytics) to get more information.

Notice that we are passing few parameters:
* Video Id: This represents the video you want to analyze, you can get the video you've used before in this example.
* dimension: This parameter will accept a few values, including `country`` in order to return the determine which dimension you would like to analyze.
* from: is a required field. The date from which the data should start.


<CodeSelect title="Getting analytics data">
```javascript
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
const from = "2023-09-01";
const dimension = "country"; 
const filter = "videoId:vi3q7HxhApxRF1c8F8r6VeaI"; 
const videoPlays = await client.analytics.getVideosPlays({
  from, dimension, to, filter, currentPage, pageSize
});
```
```php
<?php
require __DIR__ . '/vendor/autoload.php';
$from = new \DateTime("2023-09-01"); 
$dimension = "country"; 
$plays = $client->analytics()->getVideosPlays($from, $dimension, array(
    'filter' => "videoId:vi3q7HxhApxRF1c8F8r6VeaI",
)); 
```
```python
import apivideo
from apivideo.api import analytics_api
from apivideo.model.analytics_plays_response import AnalyticsPlaysResponse
from apivideo.model.not_found import NotFound
from apivideo.model.analytics_plays400_error import AnalyticsPlays400Error
from pprint import pprint
# Enter a context with an instance of the API client
with apivideo.AuthenticatedApiClient(__API_KEY__) as api_client:
    # Create an instance of the API class
    api_instance = analytics_api.AnalyticsApi(api_client)
    _from = dateutil_parser('2023-06-01').date() 
    dimension = "country" 
    filter = "videoId:vi3q7HxhApxRF1c8F8r6VeaI" 
    try:
        # Get play events for video
        api_response = api_instance.get_videos_plays(_from, dimension)
        pprint(api_response)
    except apivideo.ApiException as e:
        print("Exception when calling AnalyticsApi->get_videos_plays: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get play events for video
        api_response = api_instance.get_videos_plays(_from, dimension, to=to, filter=filter, current_page=current_page, page_size=page_size)
        pprint(api_response)
    except apivideo.ApiException as e:
        print("Exception when calling AnalyticsApi->get_videos_plays: %s\n" % e)

```
```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    apivideosdk "github.com/apivideo/api.video-go-client"
)

func main() {
    client := apivideosdk.ClientBuilder("YOUR_API_KEY").Build()
    // if you rather like to use the sandbox environment:
    // client := apivideosdk.SandboxClientBuilder("YOU_SANDBOX_API_KEY").Build()
    req := apivideosdk.AnalyticsApiGetVideosPlaysRequest{}
    req.From(time.Now())
    req.Dimension("country") 
    req.Filter("videoId:vi3q7HxhApxRF1c8F8r6VeaI")
    res, err := client.Analytics.GetVideosPlays(req)


    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Analytics.GetVideosPlays``: %v\n", err)
    }
    // response from `GetVideosPlays`: AnalyticsPlaysResponse
    fmt.Fprintf(os.Stdout, "Response from `Analytics.GetVideosPlays`: %v\n", res)
}

```
```java
// Import classes:
import video.api.client.ApiVideoClient;
import video.api.client.api.ApiException;
import video.api.client.api.models.*;
import video.api.client.api.clients.AnalyticsApi;
import java.util.*;

public class Example {
  public static void main(String[] args) {
    ApiVideoClient client = new ApiVideoClient("YOUR_API_KEY");
    AnalyticsApi apiInstance = client.analytics();
    LocalDate from = LocalDate.parse("2023-06-01");
    String dimension = "videoId"; 
    String filter = "videoId:vi3q7HxhApxRF1c8F8r6VeaI";

    try {
      Page<AnalyticsData> result = apiInstance.getVideosPlays(from, dimension)
            .to(to)
            .filter(filter)
            .currentPage(currentPage)
            .pageSize(pageSize)
            .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AnalyticsApi#getVideosPlays");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getMessage());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```
```csharp
using System.Diagnostics;
using ApiVideo.Client;

namespace Example
{
    public class getVideosPlaysExample
    {
        public static void Main()
        {
            var basePath = ApiVideoClient.Client.Environment.SANDBOX;
            var apiKey = "YOUR_API_KEY";
            var apiInstance = new ApiVideoClient(apiKey,basePath);
            var from = 2023-06-01; 
            var dimension = 'country'; 
            var filter = 'videoId:vi3q7HxhApxRF1c8F8r6VeaI'; 
            var apiAnalyticsInstance = apiInstance.Analytics();
            try
            {
                // Get play events for video
                AnalyticsPlaysResponse result = apiAnalyticsInstance.getVideosPlays(from, dimension, to, filter, currentPage, pageSize);
                Debug.WriteLine(result);
            }
            catch (ApiException  e)
            {
                Debug.Print("Exception when calling AnalyticsApi.getVideosPlays: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}

```
</CodeSelect>

The result will be something like this:

```json
{
  "data": [
    {
      "value": "Argentina",
      "plays": 5
    },
    {
      "value": "Israel",
      "plays": 3
    },
    {
      "value": "Estonia",
      "plays": 2
    },
  ],
  "pagination": {
   ...
  }
}
```

You can now play around with the results and create whatever analysis you need. 