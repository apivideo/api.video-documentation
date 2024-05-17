---
title: "Azure Media Services migration guide"
slug: "azure-migration"
meta:
  description: This page gets users started on how to migrate from Azure Media Services to api.video.
---

# Azure Media Services migration guide

Planning to migrate api.video from Azure Media Services? We got you covered!

You can import all of your video content, both from Azure's Blob storage and Media storage using api.video's Import tool.

{% capture content %}
When you import videos from Azure Media Services, you have the option to enable importing video captions in `VTT` format. The imported captions will be automatically linked to the videos they belong to. Videos with multiple captions are also handled by the Import tool. 
{% endcapture %}
{% include "_partials/callout.html" kind: "info", content: content %}

## What's the cost? 

We understand that when you want to move to a different provider, it takes effort and development resources. You also want to make sure that it is cost-efficient, especially if you are moving to api.video to save costs.

At api.video, both **migration and video encoding is free**!

## api.video Import tool

Our Import tool enables you to migrate all of your videos from Azure quickly and efficiently. Check out how:

<iframe src="https://embed.api.video/vod/vi3GrVeqjaLojAMZOciiRBOS#hide-title" type="text/html" width="100%" height="500" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>

Check out the [Import tool](https://dashboard.api.video/import) now. 

## Authenticate with Azure

The Import tool requires you to authenticate with the provider you are migrating from. With Azure Media Services, this means you have to:

- create a Credentials `JSON` file
- obtain a Shared Access Signature (SAS) URL

These steps will guide you through the process.

{% capture content %}
Creating a Credentials `JSON` file is only required when you import videos from your Azure Media storage containers.

Obtaining a SAS URL is required both when you import videos from your Blob storage and Media storage containers. 
{% endcapture %}
{% include "_partials/callout.html" kind: "info", content: content %}

### Create a Credentials `JSON` file

1. Navigate to your Azure Media Services account and select the directory you want to migrate.

   ![Selecting the api.video media service on Azure](/_assets/get-started/azure-migration/azure-1.png)

2. Select **API access** in the left navigation bar.

   ![Selecting API Access for media services](/_assets/get-started/azure-migration/azure-2.png)

3. Select an existing AAD app or create a new one, then generate its Secret.

   ![Select AAD app and generate a secret](/_assets/get-started/azure-migration/azure-media-aad.webp)

4. Open the JSON tab and save the contents. You will need to paste it into the Import tool during the import process.

   ![Copy the contents of the Credentials JSON](/_assets/get-started/azure-migration/azure-media-json.webp)

### Obtain the SAS URL

The Import tool requires a Shared Access Signature (SAS) URL to access the videos in your Azure storage containers. 

1. Navigate to your storage account and click on "Shared Access Signature":

   ![Generating a Shared Access Signature](/_assets/get-started/azure-migration/azure-4.png)

2. Enable the required parameters:

   ![Enabling required parameters](/_assets/get-started/azure-migration/azure-storage-doc-11.png)

3. Ensure that you generate the Shared Access Signature. Once you have the links, save the URL. You will need to paste it into the "SAS URL" field of the Import tool.

   ![Copying the Blob service SAS URL](/_assets/get-started/azure-migration/azure-6.png)

## Import your videos

Once you have all the pre-requisites you can start the actual import process.

1. Navigate to the api.video [Import tool](https://dashboard.api.video/import).

2. Select **Azure Blob Storage** or **Azure Media Services** from the list, depending on where you want to import from.

3. Next, click on **Continue to Authentication**, then click on **Sign in**.

   - When importing from **Azure Blob Storage**, you'll need the SAS URL and the name of the container that you want to    import from. Leave the **Container** field empty to import videos from all containers.
   - When importing from **Azure Media Services**, you'll need the SAS URL and the contents of the Credentials `JSON`.

4. After you have authorized access for the Import tool, you can continue to the video selection. The Import tool will guide you through the process and will show you the import and encoding status of each video you selected.

## Next steps

Once you migrate, api.video will host your assets and will provide the infrastructure for you. You only need to take care about updating your product or website to use the new assets. The Import tool automatically creates a mapping in <code>csv</code> and in <code>JSON</code> formats to aid you in this process.

If you have questions or you require support during the migration process, get in touch with the team via the chatbox!