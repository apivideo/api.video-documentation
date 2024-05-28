---
title: api.video backup and cold storage
toc: false
breadcrumbs: false
meta:
  description: Backup your uploaded videos to your preferred provider.
---

<div class="section-header no-toc">

# Backup & Cold Storage

</div>

It's important to feel safe and know that the content you've uploaded is backed up. While api.video got you covered by backing up the videos and having a disaster recovery plan, we understand that you might want to take an extra step and have your own backup.

There are also cases where you would only want to use api.video's transcoding power but then host your transcoded videos on a different storage solution.

With this in mind, we've created ways for you to backup your already transcoded videos to your preferred providers.

In this section, you'll be able to find guides on how to backup the videos hosted on api.video to your Azure Storage account, Amazon S3 and other storage providers.

<Image src="/_assets/vod/backup-and-cold-storage/backup-and-cold-storage-light.svg" src_dark="/_assets/vod/backup-and-cold-storage/backup-and-cold-storage-dark.svg" alt="A diagram that shows the process of backing up videos on different hosting solutions" />

Below, you will find the scripts that are available for your disposale in order to backup your videos from api.video.

## Available scripts

<Grid cols="2" gap="3">
<Card href="./azure-cold-storage-backup.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/Microsoft_Azure.svg" alt="Azure" width="56"/></Box>

        <Box>
            Azure\
            <small>Storage account</small>
        </Box>
    </Flex>
</Card>

<Card href="./amazon-cold-storage-backup.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/Amazon-S3-Logo.svg" alt="Amazon" width="56"/></Box>

        <Box>
            Amazon\
            <small>S3</small>
        </Box>
    </Flex>
</Card>

<Card href="./google-cold-storage-backup.md" pad="0">
    <Flex gap="2" pad="2" align="center">
        <Box><img src="/_assets/get-started/migration-guide/Google-Storage-Logo.png" alt="Google Cloud Storage" width="56"/></Box>

        <Box>
            Google\
            <small>Storage account</small>
        </Box>
    </Flex>
</Card>
</Grid>