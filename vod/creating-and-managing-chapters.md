---
title: Create and manage chapters
meta:
  description: This page gets users started on how to add chapters to their videos using the api.video Chapters endpoint.
---

# Create and manage chapters

Adding chapters can make your video easier to navigate if you have a long video. Viewers can click through to different segments to find the information they need.

## Use VTT files to define chapters

Video chapters use the same concept as video [captions](/vod/add-captions.md) and the supported format is VTT. The chapters are listed with the timeframe in the VTT file. For example:

```
WEBVTT

01
00:01.000 --> 00:04.000

02
00:05.000 --> 00:09.000
```

### Supported chapter file formats

Currently only **VTT** file format is supported.

### WebVTT file formatting

WebVTT is a format for displaying timed text tracks for captions or chapters. It is a text based format, which must be encoded using UTF-8. Check out the [Mozilla developer guide](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API) for more information about WebVTT.

To ensure that you use the correct formatting in your VTT file, api.video recommends using a parser to check for errors before you upload the file. [Click here](https://w3c.github.io/webvtt.js/parser.html) for a free online VTT parser.

<Callout pad="2" type="info">
**Incorrect VTT file formatting**

The api.video API does not return an error for incorrectly formatted VTT files. The response from the API will be `200`, however, the captions will not be displayed.
</Callout>

## API documentation

- [Chapters](/reference/api/Chapters)

## Create an account

Before you can start uploading your first video, you need to [create an api.video account](https://dashboard.api.video/register). 

Once you are logged in to the Dashboard, select the environment of your choice (sandbox or production) and copy your API key.

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
```C#
Using Nuget
  
Install-Package ApiVideo
```
</CodeSelect>

## Upload a chapter

To upload chapters for your video, you'll need a .VTT file containing details about where you want breaks to occur in your video. Here are two tutorials that go over how to add chapters to your content: 

- [Adding chapters to your videos](https://api.video/blog/tutorials/video-chapters/)
- [Video chapters: Using external buttons for controls](https://api.video/blog/tutorials/video-chapters/) 


<CodeSelect title="Uploading a chapter">
```curl
curl --request POST \
     --url https://ws.api.video/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MjQzMTkuMDk2NjY1LCJuYmYiOjE2NDI4MjQzMTkuMDk2NjY1LCJleHAiOjE2NDI4Mjc5MTkuMDk2NjY1LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.rfchf3btbMTzSukcwhUS0u4fNY4Q3g1JpoMeIz_Dls1ADmqDdKw7yBOE893C7cagb0lpuvUJvhuhgusLStsJ4nqzTveDeM2oPBQBNJjzwaJZNrImTPD4mif7Tzgxvn1_jQJA5L4gQhjd7frCIJW1yAwywrtiDPbxiWNp8fVl7r_QILjZZfslxy-kblPrHJ20Zix9VURqkGIORY5G_457nHSV9Atks1sUlt49E8b_g3jORja3MnznXBS0-0dksz2K62-QMe1_dk78V9JwbLeydqcr15M1jDLA3H6qFGI7GTsTDdZ5jKLhg5OR6yeSHFysqr3kOteTqAGdp3JuTrpZIA' \
     --header 'Content-Type: multipart/form-data' \
     --form file=@yourfile.vtt
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
        
    videoId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | The unique identifier for the video you want to upload a chapter for.
    language := "en" // string | A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
    file := os.NewFile(1234, "some_file") // *os.File | The VTT file describing the chapters you want to upload.

    
    res, err := client.Chapters.UploadFile(videoId, language, file)

    // you can also use a Reader instead of a File:
    // client.Chapters.Upload(videoId, language, fileName, fileReader)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Chapters.Upload``: %v\n", err)
    }
    // response from `Upload`: Chapter
    fmt.Fprintf(os.Stdout, "Response from `Chapters.Upload`: %v\n", res)
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\ChaptersApi;

$apiKey = 'API key';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$chapters = $client->chapters()->upload('video ID here', 'en', new SplFileObject('chapter_file_here.vtt'));
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');


(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to upload a chapter for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
        const file = 'BINARY_DATA_HERE'; // The VTT file describing the chapters you want to upload.

        // Chapter
        const result = await client.chapters.upload(videoId, language, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
```
```python
## Create chapters for your video
import apivideo
from apivideo.apis import ChaptersApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
video_id = "your video ID here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

chapter_api = ChaptersApi(client)

## Choose language your chapters will be listed in and prepare file for upload
language = "en-GB"
file = open("chapters.vtt", "rb")

## Create chapters for your video
response = chapter_api.upload(video_id, language, file)
print(response)
```
</CodeSelect>


## Upload a chapter using the dashboard

To upload a chapter, do the following: 

1. Log in to your dashboard.
2. From the menu on the left, click **Videos**. 
3. Choose the video you want to add a chapter to. A pop up displays some details about the video.
4. Click **See details**. 
5. Click **Chapters**. 
6. Click **Upload a chapter file**. A pop up appears prompting you to add your file.
7. Click **Choose a file**, then select the .VTT file you want to use as chapters. 
8. From the drop-down, choose the language the chapter file is for. 
9. Click **Upload**. You can add one chapter file per language.  

## List chapters

If you just want to list all the chapters that are available to you, you can send a request with the video ID for the video you want this information for. All chapters will be returned in the response.

<CodeSelect title="Listing chapters">
```curl
curl --request GET \
     --url https://ws.api.video/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MjQzMTkuMDk2NjY1LCJuYmYiOjE2NDI4MjQzMTkuMDk2NjY1LCJleHAiOjE2NDI4Mjc5MTkuMDk2NjY1LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.rfchf3btbMTzSukcwhUS0u4fNY4Q3g1JpoMeIz_Dls1ADmqDdKw7yBOE893C7cagb0lpuvUJvhuhgusLStsJ4nqzTveDeM2oPBQBNJjzwaJZNrImTPD4mif7Tzgxvn1_jQJA5L4gQhjd7frCIJW1yAwywrtiDPbxiWNp8fVl7r_QILjZZfslxy-kblPrHJ20Zix9VURqkGIORY5G_457nHSV9Atks1sUlt49E8b_g3jORja3MnznXBS0-0dksz2K62-QMe1_dk78V9JwbLeydqcr15M1jDLA3H6qFGI7GTsTDdZ5jKLhg5OR6yeSHFysqr3kOteTqAGdp3JuTrpZIA'
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
    req := apivideosdk.ChaptersApiListRequest{}
    
    req.VideoId("vi4k0jvEUuaTdRAEjQ4Jfrgz") // string | The unique identifier for the video you want to retrieve a list of chapters for.
    req.CurrentPage(int32(2)) // int32 | Choose the number of search results to return per page. Minimum value: 1 (default to 1)
    req.PageSize(int32(30)) // int32 | Results per page. Allowed values 1-100, default is 25. (default to 25)

    res, err := client.Chapters.List(videoId string, req)
    

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Chapters.List``: %v\n", err)
    }
    // response from `List`: ChaptersListResponse
    fmt.Fprintf(os.Stdout, "Response from `Chapters.List`: %v\n", res)
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\ChaptersApi;

$apiKey = 'API key';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$chapters = $client->chapters()->list('video ID here');
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const chapters = apiVideoClient.chapters;

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to retrieve a list of chapters for.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // ChaptersListResponse
        const result = await client.chapters.list({ videoId, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## List details about all sets of chapters for a video.
import apivideo
from apivideo.apis import ChaptersApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
video_id = "your video ID here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

chapter_api = ChaptersApi(client)

## Retrieve details about sets of chapters for a video.
response = chapter_api.list(video_id)
print(response)
```
</CodeSelect>


## List chapters using the dashboard

To list all chapter files for a video, do the following: 

1. Log in to your dashboard.
2. From the menu on the left, click **Videos**. 

3. Choose the video you want to see all chapters for. A pop up displays some details about the video.

4. Click **See details**. 

5. Click **Chapters**. You can see all the chapter files that were uploaded here.

## Show a chapter

You can retrieve details about a specific chapters file by sending a request with the video ID for the video you want chapter information for, and the valid BCP 47 tag for the specific chapter file. 

<CodeSelect title="Showing a chapter">
```curl
curl --request GET \
     --url https://ws.api.video/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MjQzMTkuMDk2NjY1LCJuYmYiOjE2NDI4MjQzMTkuMDk2NjY1LCJleHAiOjE2NDI4Mjc5MTkuMDk2NjY1LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.rfchf3btbMTzSukcwhUS0u4fNY4Q3g1JpoMeIz_Dls1ADmqDdKw7yBOE893C7cagb0lpuvUJvhuhgusLStsJ4nqzTveDeM2oPBQBNJjzwaJZNrImTPD4mif7Tzgxvn1_jQJA5L4gQhjd7frCIJW1yAwywrtiDPbxiWNp8fVl7r_QILjZZfslxy-kblPrHJ20Zix9VURqkGIORY5G_457nHSV9Atks1sUlt49E8b_g3jORja3MnznXBS0-0dksz2K62-QMe1_dk78V9JwbLeydqcr15M1jDLA3H6qFGI7GTsTDdZ5jKLhg5OR6yeSHFysqr3kOteTqAGdp3JuTrpZIA'
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
        
    videoId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | The unique identifier for the video you want to show a chapter for.
    language := "en" // string | A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

    
    res, err := client.Chapters.Get(videoId, language)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Chapters.Get``: %v\n", err)
    }
    // response from `Get`: Chapter
    fmt.Fprintf(os.Stdout, "Response from `Chapters.Get`: %v\n", res)
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\ChaptersApi;

$apiKey = 'your API key here';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$chapters = $client->chapters()->get('video ID here', 'language tag here');
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const chapters = apiVideoClient.chapters;

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to show a chapter for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // Chapter
        const result = await client.chapters.get(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Get information about video chapters for a specific language on a video.
import apivideo
from apivideo.apis import ChaptersApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
video_id = "your video ID here"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

chapter_api = ChaptersApi(client)

## If you choose a language variation, for chapters it is shortened to just be the language. For example 'English Great Britain'
## which would be "en-GB" would be shortened to "en."
language = "en"

## Retrieve information about video chapters in the specified language. (If there aren't chapters the response will inform you 
## of this.)
response = chapter_api.get(video_id, language)
print(response)
```
</CodeSelect>

## Show a chapter file using the dashboard

To show a chapter file using the dashboard, do the following: 

1. Log in to your dashboard.
2. From the menu on the left, click **Videos**. 
3. Choose the video you want to look at the chapter file for. A pop up displays some details about the video.
4. Click **See details**. 
5. Click **Chapters**. 
6. Click on the chapter file you want to work with. You can set a file to be default or leave it be.

## Delete a chapter

To delete a chapter, send the unique video ID with the chapters you want to delete. Include the appropriate BCP 47 language tag. You can only have one set of chapters per tag. Deletion is permanent, so be sure it's what you want to do.

<CodeSelect title="Deleting a chapter">
```curl
curl --request DELETE \
     --url https://ws.api.video/videos/vi4k0jvEUuaTdRAEjQ4Jfrgz/chapters/en \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI4MjQzMTkuMDk2NjY1LCJuYmYiOjE2NDI4MjQzMTkuMDk2NjY1LCJleHAiOjE2NDI4Mjc5MTkuMDk2NjY1LCJwcm9qZWN0SWQiOiJwclJ6SUpKQTdCTHNxSGpTNDVLVnBCMSJ9.rfchf3btbMTzSukcwhUS0u4fNY4Q3g1JpoMeIz_Dls1ADmqDdKw7yBOE893C7cagb0lpuvUJvhuhgusLStsJ4nqzTveDeM2oPBQBNJjzwaJZNrImTPD4mif7Tzgxvn1_jQJA5L4gQhjd7frCIJW1yAwywrtiDPbxiWNp8fVl7r_QILjZZfslxy-kblPrHJ20Zix9VURqkGIORY5G_457nHSV9Atks1sUlt49E8b_g3jORja3MnznXBS0-0dksz2K62-QMe1_dk78V9JwbLeydqcr15M1jDLA3H6qFGI7GTsTDdZ5jKLhg5OR6yeSHFysqr3kOteTqAGdp3JuTrpZIA'
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
        
    videoId := "vi4k0jvEUuaTdRAEjQ4Jfrgz" // string | The unique identifier for the video you want to delete a chapter from.
    language := "en" // string | A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

    
    err := client.Chapters.Delete(videoId, language)

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `Chapters.Delete``: %v\n", err)
    }
}
```
```php
<?php
require __DIR__ .'/vendor/autoload.php';

use Symfony\Component\HttpClient\Psr18Client;
use ApiVideo\Client\Client;
use ApiVideo\Client\Model\ChaptersApi;

$apiKey = 'API key';
$apiVideoEndpoint = 'https://ws.api.video';

$httpClient = new \Symfony\Component\HttpClient\Psr18Client();
$client = new ApiVideo\Client\Client(
    $apiVideoEndpoint,
    $apiKey,
    $httpClient
);

$chapters = $client->chapters()->delete('video ID here', 'language tag here');
```
```javascript
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const chapters = apiVideoClient.chapters;

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to delete a chapter from.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // void
        const result = await client.chapters.delete(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```
```python
## Delete a set of chapters for a specific language on a video
import apivideo
from apivideo.apis import ChaptersApi
from apivideo.exceptions import ApiAuthException

api_key = "your api key here"
video_id = "your video ID here"
language = "valid BCP 47 representation of language you want to delete (ex. 'en')"

client = apivideo.AuthenticatedApiClient(api_key)

## If you'd rather use the sandbox environment:
## client = apivideo.AuthenticatedApiClient(api_key, production=False)

client.connect()

chapter_api = ChaptersApi(client)

## Delete the chapter set 
response = chapter_api.delete(video_id, language)
print(response)
```
</CodeSelect>

## Delete a chapter using the dashboard

You can delete a chapter from the dashboard by doing the following:

1. Log in to your dashboard.
2. From the menu on the left, click **Videos**. 
3. Choose the video you want to delete
4. Click **See details**. 
5. Click **Chapters**. 
6. Click the checkbox by the chapter file you want to delete. This will bring up a trash can icon at the bottom of the screen.
7. Click the **trash can icon** to delete the chapter.

## Conclusion

If you've created a long video, chapters can make the video easier for viewers to navigate.
