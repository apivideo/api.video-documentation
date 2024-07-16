---
title: Analytics
meta: 
  description: Learn how you can get data insights for your videos and live streams using api.video's Analytics solution.
---

# Analytics

api.video's Analytics enables you to retrieve complex event data about your videos and live streams.

For example, you can:

- get the number of impressions for your content over a period of time like the current day, the past week, or the last 30 days,
- break down the number of plays for a live stream through dimensions like country, device type, OS, or browser,
- or retrieve play-rate trends over time for your videos.

Use this data to understand your audience, or integrate the data directly into your own application to display it to your viewers.

Visit the **[Analytics](https://dashboard.api.video/data)** page on the Dashboard to get started and see your data visualized, or jump into the **[API reference](/reference/api/Analytics)** and see how you can work with the data through our API!

## How it works

Analytics uses player events to analyze and segment your viewers' interactions with your content. Here are some key acpects that can help you ensure that your Analytics implementation runs smoothly:

- Player events are generated when your viewers engage with a video or live stream session.
- Data is refreshed in real time, with a frequency of `<5s`.
- api.video retains analytics data for 30 days.
- Data does not carry over from the previous version of Analytics.
- Video re-plays using the dedicated re-play button in the player do not generate player events.
- If a user is viewing your content via a browser, refreshes the tab, and plays the content again, a new event is generated.

After player events are collected, there is a short delay while the API processes the data. api.video recommends that you retrieve analytics periodically, for example once every 15 minutes. This enables you to keep track of user engagement or manage user-generated content without delay.

### Requirements

<Callout pad="2" type="info">
The Analytics features are available using api.video's video player. Check out the [Video Player SDK](/sdks/player/apivideo-player-sdk) for details about the implementation.
</Callout>

## How to use

api.video offers 3 dedicated API endpoints that you can use to programmatically retrieve data about your content:

| Endpoint                                                                                 | Usage                                         |
| ---------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`/data/metrics/{metric}/{aggregation}`](/reference/api/Analytics#retrieve-aggregated-metrics) | Retrieve aggregated metrics                   |
| [`/data/buckets/{metric}/{breakdown}`](/reference/api/Analytics#retrieve-metrics-in-a-breakdown-of-dimensions)   | Retrieve metrics in a breakdown of dimensions |
| [`/data/timeseries/{metric}`](/reference/api/Analytics#retrieve-metrics-over-time)            | Retrieve metrics over time                    |

Visit the **[API reference](/reference/api/Analytics)** for details on how you can interact with the Analytics API, including request parameters and sample responses.

Here are some real-world questions where metrics and dimensions from Analytics can help you find the answers:

- E-learning
    - *How many students have played my courses?* → `play`
    - *How many students have started watching a course?* → `start`
    - *What is the average watch duration of my course?* → `watch-time`
    
- Short-form videos
    - *Have my viewers watched the first N videos on the feed until the end?* → `end`
    
- Advertising
    - *How many impressions have my ads generated?*  → `impression`
    - *Is my ad displayed fast in Asia?*  → `impression-time` + `continent`

<Callout pad="2" type="info">
**Testing**

You can test the Analytics endpoints **in api.video's sandbox environment**. Check out [Environments](/reference#environments) for more details. The sandbox environment returns data from the last 24 hours.
</Callout>

## What's next

Check out the **[API reference](/reference/api/Analytics)** for sample responses and errors, and more details about using the Analytics endpoints.

If you have any questions, reach out to the team using the chatbox!