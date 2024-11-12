---
title: Geo-restrictions
meta: 
  description: Secure your videos and live streams by blocking or allowing countries where your content is accessible.
---
# Geo-restrictions

This feature enables you to control exactly where your video content can be accessed, allowing better compliance and enabling targeted content delivery. Next to [domain referrer restrictions](/delivery/domain-referrer) and [private videos](/delivery/video-privacy-access-management), geographic restrictions add another layer that helps you manage and protect your video content. 

## How it works

You define a list of countries where users should be allowed to access your content. api.video then creates a whitelist that allows video delivery only for viewers in the countries on your list.

<Callout pad="2" type="info">
The whitelist grants access only to those countries that are on the list. Every other country is restricted.
</Callout>

Viewers who try to access your content from restricted locations will see an error message in the video player. Direct URLs that point to video assets will return `403 - Forbidden`.

## Request access

To apply geo-restrictions, get in touch with our support team directly via the chat box, or send your request [via email](mailto:support@api.video).

Make sure you provide these details:

* the projects where you want to apply geo-restrictions
* a list of countries where you want to allow access to your videos, for each affected project

<Callout pad="2" type="info">
Geo-restrictions work on a project-level. This means that the restriction applies to every video in a project.
</Callout>

## Implementation

Our team first confirms the countries and projects where you want to apply geo-restrictions. Implementation is quick, and we will inform you when the restrictions are in place.