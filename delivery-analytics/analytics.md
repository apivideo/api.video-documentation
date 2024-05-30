---
title: Analytics v2.0 beta
meta: 
  description: Learn how you can get data insights for your videos and live streams using api.video's Analytics solution.
---

# Analytics v2.0 beta

api.video's Analytics v2.0 enables you to retrieve complex event data about your videos and live streams.

For example, you can:

- get the number of impressions for your content over a period of time like the current day, the past week, or the last 30 days,
- break down the number of plays for a live stream through dimensions like country, device type, OS, or browser,
- or retrieve play-rate trends over time for your videos.

Use this data to understand your audience, or integrate the data directly into your own application to display it to your viewers.

Visit the **[Analytics](https://dashboard.api.video/data)** page on the Dashboard to get started and see your data visualized, or jump into the **[API reference](/reference/api/Analytics-v2-beta)** and see how you can work with the data through our API!

<Callout pad="2" type="info">
Analytics v2.0 is currently in `beta`, and some of the specifications may change over time.

If you are currently using Analytics v1, you will still be able to access it for the duration of the beta period, both via the Dashboard and the API. Analytics v1 will be deprecated after the beta period is over.
</Callout>

## How it works

Analytics v2.0 uses player events to analyze and segment your viewers' interactions with your content. Here are some key acpects that can help you ensure that your Analytics v2.0 implementation runs smoothly:

- Player events are generated when your viewers engage with a video or live stream session.
- Data is refreshed every 15 minutes.
- api.video retains analytics data for 365 days, with the caveat that event data collection starts only after `2024-04-01`.
- Data does not carry over from the previous version of Analytics.
- Video re-plays using the dedicated re-play button in the player do not generate player events.
- If a user is viewing your content via a browser, refreshes the tab, and plays the content again, a new event is generated.

After player events are collected, there is a short delay while the API processes the data. api.video recommends that you retrieve analytics periodically, for example once every 15 minutes. This enables you to keep track of user engagement or manage user-generated content without delay.

### Requirements

<Callout pad="2" type="info">
The Analytics v2.0 features are available using api.video's video player. Check out the [Video Player SDK](/sdks/player/apivideo-player-sdk) for details about the implementation.
</Callout>

## How to use

Analytics v2.0 offers 3 dedicated API endpoints that you can use to programmatically retrieve data about your content:

| Endpoint                                                                                 | Usage                                         |
| ---------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`/data/metrics/{metric}/{aggregation}`](/reference/api/Analytics-v2-beta#retrieve-aggregated-metrics) | Retrieve aggregated metrics                   |
| [`/data/buckets/{metric}/{breakdown}`](/reference/api/Analytics-v2-beta#retrieve-metrics-in-a-breakdown-of-dimensions)   | Retrieve metrics in a breakdown of dimensions |
| [`/data/timeseries/{metric}`](/reference/api/Analytics-v2-beta#retrieve-metrics-over-time)            | Retrieve metrics over time                    |

Visit the **[API reference](/reference/api/Analytics-v2-beta)** for details on how you can interact with the Analytics v2.0 API, including request parameters and sample responses.

Here are some real-world questions where metrics and dimensions from Analytics v2.0 can help you find the answers:

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

You can test the Analytics v2.0 endpoints **in api.video's sandbox environment**. Check out [Environments](/reference#environments) for more details. The sandbox environment returns data from the last 24 hours.
</Callout>

## Migrating from the Analytics v1 API

Migrating to the Analytics v2.0 API is simple. Analytics v1 only provides 2 endpoints, which return play event count for videos and live streams. In Analytics v2.0, endpoints are no longer separated for VOD and live streams.

### Endpoint mapping

| Analytics v1 endpoints          | Usage                                             |
| ------------------------------- | --------------------------------------------------|
| `/analytics/videos/plays`       | to get the number of play events for videos       |
| `/analytics/live-streams/plays` | to get the number of play events for live streams |

Analytics v1's `/play` metric can be directly mapped to 3 new endpoints:

- For the number of play events, use `/data/metrics/{metric}/{aggregation}` with the `play` metric and `count` aggregation.
    - Example: `/data/metrics/play/count`

- For the number of play events in a breakdown by dimensions, use `/data/buckets/{metric}/{breakdown}` with the `play` metric and any of these dimensions:
        - media-id
        - media-type
        - continent
        - country
        - device-type
        - operating-system
        - browser
    - Example: `/data/buckets/play/country`

- For the he number of play events over time, use `/data/timeseries/{metric}` with the `play` metric.
    - Example: `/data/timeseries/play`

## What's next

Check out the **[API reference](/reference/api/Analytics-v2-beta)** for sample responses and errors, and more details about using the Analytics endpoints.

If you have any questions, reach out to the team using the chatbox!