---
title: "Migration guides"
slug: "migration-guides"
hide_side_table_of_contents: true
meta:
  description: This page gets users started on how to migrate to api.video from other platforms using the Import tool.
---

# Migration guides

Moving to a different provider takes time, effort, and development resources. api.video can help you migrate your existing content cost-efficiently, in only a few clicks. Read more about using our [Import tool](https://api.video/blog/tutorials/switch-to-api-video-in-minutes-latest-updates-on-our-import-tool/), or check out the migration guides if you plan to move from these providers:

<div class="hagrid">

{% include "_partials/hagrid-item.md" title: "Azure", image: "/_assets/get-started/migration-guide/Microsoft_Azure.svg", subtitle: "Media Services",  link: "./azure-migration.md" %}

{% include "_partials/hagrid-item.md" title: "Amazon", image: "/_assets/get-started/migration-guide/Amazon-S3-Logo.svg", subtitle: "S3",  link: "./aws-migration.md" %}

{% include "_partials/hagrid-item.md" title: "Google", image: "/_assets/get-started/migration-guide/Google-Storage-Logo.png", subtitle: "Cloud Storage",  link: "./gcs-migration.md" %}

{% include "_partials/hagrid-item.md" title: "Vimeo", image: "/_assets/get-started/migration-guide/vimeo.png", subtitle: "", link: "./vimeo-migration.md" %}

{% include "_partials/hagrid-item.md" title: "Wistia", image: "/_assets/get-started/migration-guide/wistia.png", subtitle: "", link: "./wistia-migration.md" %}

</div>

## FAQs

<details>
<summary><b>What do I need to change in my implementation after the migration?</b></summary>
<p>
Once you migrate, api.video will host your assets and will provide the infrastructure for you. You only need to take care about updating your product to use the new assets.
</details>

<details>
<summary><b>Can I keep the original IDs / URLs of my assets?</b></summary>
<p>
Technically speaking no. When you migrate your assets, api.video generates new unique IDs for each of your videos. Even though you will need to update your product to use the new asset URLs and IDs, we will help you ease the workload by providing an exact mapping of your old assets to the new ones hosted by api.video.
</details>

<details>
<summary><b>Will api.video help me create a mapping from old assets to new assets?</b></summary>
<p>
Yes! The Import tool automatically creates a mapping in <code>csv</code> and in <code>JSON</code> formats.
</details>