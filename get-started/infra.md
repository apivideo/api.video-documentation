---
title: "api.video location and infrastructure"
slug: "infra"
meta:
  description: Learn about selecting the optimal hosting location for your videos.
---

# Selecting the hosting region

api.video is unwavering in its dedication to providing top-tier performance worldwide. Our mission is to ensure that your video content ingestion and delivery transcends geographical boundaries, guaranteeing an exceptional experience for your audience worldwide.

To fulfill this commitment, we've meticulously crafted a robust infrastructure that spans both the European Union and the United States. Our strategically positioned servers and data centers in these regions are engineered to optimize video content ingestion and delivery, ensuring lightning-fast load times and seamless streaming experiences, no matter where your audience is located. With api.video, you can trust in the reliability and speed of your video content, making global reach more accessible than ever.

## How it works

<Image src="/_assets/get-started/infra/infra_flow_light.png" src_dark="/_assets/get-started/infra/infra_flow_dark.png" alt="A diagram that shows the hosting location flow" />

When creating a new account or adding a project after you have switched to production, you will be prompted to choose the region from which your videos will be hosted and delivered. You will encounter two primary options:

* United States
* European Union

The primary consideration while selecting the region should be:

* Proximity to the majority of your user base
* Company legal requirements

api.video utilizes a robust CDN service with a vast network of [multiple Points of Presence (POPs) worldwide](https://www.fastly.com/network-map/). Upon a user's request, the video is promptly cached at the CDN edge, ensuring expedited delivery. The regional aspect primarily influences the initial hosting location of the video and where it is served to the CDN, streamlining the entire process.

## FAQ

### How do I change a region?

Reach out to our dedicated support team to help you modify the region you have previously selected for a project.

### Can I have different regions for different projects?

Yes, you can select a region for every project you create. Each project can run in a different region.

### What if my users are in Asia, Africa or Oceania - which region should I select?

For optimal performance for Asia, Africa, and Oceania, we recommend selecting the EU region. The team is constantly working on improving api.video's infrastructure, making sure that your users will have a seamless experience while uploading and streaming videos.