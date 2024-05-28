---
title: "Migration guides"
slug: "migration-guides"
toc: false
meta:
  description: This page gets users started on how to migrate to api.video from other platforms using the Import tool.
---

<div class="section-header no-toc">

# Migration guides

</div>

Moving to a different provider takes time, effort, and development resources. api.video can help you migrate your existing content cost-efficiently, in only a few clicks. Read more about using our [Import tool](https://api.video/blog/tutorials/switch-to-api-video-in-minutes-latest-updates-on-our-import-tool/), or check out the migration guides if you plan to move from these providers:

<Grid cols="2" gap="3">
<Card href="./azure-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/Microsoft_Azure.png" alt="Azure"/></Box>

        <Box>
            Azure\
            <small>Media Services</small>
        </Box>
    </Flex>
</Card>

<Card href="./aws-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/Amazon-S3-Logo.png" alt="Amazon"/></Box>

        <Box>
            Amazon\
            <small>S3</small>
        </Box>
    </Flex>
</Card>

<Card href="./gcs-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/Google-Storage-Logo.png" alt="Google Cloud Storage"/></Box>

        <Box>
            Google\
            <small>Cloud Storage</small>
        </Box>
    </Flex>
</Card>

<Card href="./vimeo-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/vimeo.png" alt="Vimeo"/></Box>

        <Box>
            Vimeo
        </Box>
    </Flex>
</Card>

<Card href="./wistia-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/wistia.png" alt="Wistia"/></Box>

        <Box>
            Wistia
        </Box>
    </Flex>
</Card>

<Card href="./cloudinary-migration.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/icons/cloudinary-logo.png" alt="Cloudinary"/></Box>

        <Box>
            Cloudinary
        </Box>
    </Flex>
</Card>
</Grid>

## FAQs

<details>
<summary><b>What do I need to change in my implementation after the migration?</b></summary>
<p>
Once you migrate, api.video will host your assets and will provide the infrastructure for you. You only need to take care about updating your product to use the new assets.
</p>
</details>

<details>
<summary><b>Can I keep the original IDs / URLs of my assets?</b></summary>
<p>
Technically speaking no. When you migrate your assets, api.video generates new unique IDs for each of your videos. Even though you will need to update your product to use the new asset URLs and IDs, we will help you ease the workload by providing an exact mapping of your old assets to the new ones hosted by api.video.
</p>
</details>

<details>
<summary><b>Will api.video help me create a mapping from old assets to new assets?</b></summary>
<p>
Yes! The Import tool automatically creates a mapping in <code>csv</code> and in <code>JSON</code> formats.
</p>
</details>

<details>
<summary><b>Can I import video captions with the Import tool?</b></summary>
<p>
Yes! However, note these limitations: importing captions is currently only supported from <a href="/get-started/azure-migration">Azure Media Services</a>, and only in <code>VTT</code> format.
</p>
</details>