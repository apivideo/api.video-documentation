---
title: Uploaded File Extension Invalid
meta: 
    description: This guide explains the cause and the possible solutions for the Uploaded File Extension Invalid error.
---

# Uploaded File Extension Invalid

The file you uploaded has a mime type or file extension that the API does not accept. This can occur for example when you [upload thumbnails to a video](/reference/api/Videos#upload-a-thumbnail), or a [logo for your player](/reference/api/Player-Themes#upload-a-logo).

## Solution

Check the API's response to your request, as it contains the accepted file extensions. Update the file in your request to comply with the requirements.