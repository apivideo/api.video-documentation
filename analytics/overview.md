---
title: Video and live stream analytics overview
breadcrumbs: false
meta: 
  description: Learn how you can get data insights for your videos and live streams using api.video's Analytics solution.
---

# Analytics overview

api.video's Analytics enables you to retrieve complex event data about your videos and live streams.

For example, you can:

- get the number of impressions for your content over a period of time like the current day, the past week, or the last 30 days,
- break down the number of plays for a live stream through dimensions like country, device type, OS, or browser,
- or retrieve play-rate trends over time for your videos.

Use this data to understand your audience, or integrate the data directly into your own application to display it to your viewers.

Visit the **[Analytics](https://dashboard.api.video/analytics)** page on the Dashboard to get started and see your data visualized, or jump into the **[API reference](/reference/api/Analytics)** and see how you can work with the data through our API!

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
    - *How many times have my viewers watched a specific video?* → `play-total` + `media-id`
    - *What was the highest number of concurrent viewers last week?* → `from` + `ccv-peak` + `unique`
    - *What videos have the longest view duration?* →  `view` + `media-id` + `sortBy[metricValue]` + `sortOrder=desc`
    
- Advertising
    - *How many impressions have my ads generated?*  → `impression`
    - *Is my ad displayed fast in Asia?* → `impression-time` + `continent`
    - *From the websites where my video ad is embedded, which ones got the most views?* → `view` + `referrer` + `sortBy[metricValue]`

### Requirements

<Callout pad="2" type="info">
The Analytics features are available using api.video's video player. Check out the [Video Player SDK](/sdks/player/apivideo-player-sdk) for details about the implementation.
</Callout>

## How it works

Analytics uses player events to analyze and segment your viewers' interactions with your content. Here are some key aspects:

- By default, api.video retains analytics data for 30 days. You can extend data retention to 3 months or 12 months through the [Analytics page in the Dashboard](https://dashboard.api.video/analytics) - click on the `3M` or `12M` buttons to get started!
- Player events are generated when your viewers engage with a video or live stream session.
- Data is refreshed in real time, with a frequency of `<5s`.
- Data does not carry over from the previous versions of Analytics, and unique viewer data starts only from `2024-08-14`.
- `unique` viewers are only unique for a day.
- Video re-plays using the dedicated re-play button in the player do not generate events.

<Callout pad="2" type="success">
api.video provides calculates the total number of plays through 2 dedicated endpoints:

- `/data/metrics/play/total`
- `/data/buckets/play-total/media-id`

These 2 endpoints return data that is not limited to 30 days of retention, and can return data from earlier versions of Analytics.
</Callout>

### Sessions

User sessions affect how your viewers' interactions generate data. For web users, a browser tab counts as one session. For mobile users, a player instance within an app counts as one session.

For example:

- If user watches the same video multiple times on the same tab, only one event is generated.
- If user watches a video, refreshes the tab, then plays the video again, a new event is generated.


### Aggregation vs. timeseries

The `/data/metrics/{metric}/{aggregation}` and `/data/timeseries/{metric}` endpoints can return very similar data. Here's a concrete example on how to understand the fundamental difference.

Let's get the number of plays for a video, from the last 2 days. Let's use both endpoints to get this data:

* `/data/metrics/play/sum` → the value of the `play` metric aggregated to `sum`
* `/data/timeseries/play` → the value of the `play` metric over time

We will filter for a specific video using `filterBy[mediaId]={videoId}`, and set a short, 2-day timeframe using `from` and `to`.

Let's compare the results:

<CodeSelect title="Number of plays from the last 2 days">
```/metrics/play/sum
{
  "context": {
    "metric": "play",
    "aggregation": "sum",
    "timeframe": {
      "from": "2024-10-01T00:00:00+00",
      "to": "2024-10-02T23:59:59+00:00"
    }
  },
  "data": 1
}
```
```/timeseries/play
{
  "context": {
    "metric": "play",
    "interval": "day",
    "timeframe": {
      "from": "2024-10-01T00:00:00+00:00",
      "to": "2024-10-02T23:59:59+00:00"
    }
  },
  "data": [
    {
      "emittedAt": "2024-10-01T23:55:00+00:00",
      "metricValue": 1
    },
    {
      "emittedAt": "2024-10-02T00:15:00+00:00",
      "metricValue": 1
    }
  ],
  "pagination": { ... }
}
```
</CodeSelect>

Notice that `/metrics/play/sum` returns only `1` play, and  returns `2` plays. Check the values of the `emittedAt` fields in the `/timeseries/play` example above: the difference is only 20 minutes, but on **two different calendar days**.

* The `timeseries` endpoint counts the number of events based on a set interval, which is `day` by default. This means that a user watching the same video on two calendar days generates 2 play events: 1 for each day.
* The `metrics` endpoint counts the sum of the number of play events. This means that a user watching your content within a single user session generates 1 play event, even if that session falls on the boundary of 2 calendar days, and even if they watch your content multiple times within a session.

### Testing

You can test the Analytics endpoints **in api.video's sandbox environment**. Check out [Environments](/reference#environments) for more details. The sandbox environment returns data from the last 24 hours.

## What's next

Check out the **[API reference](/reference/api/Analytics)** for sample responses and errors, and more details about using the Analytics endpoints.

If you have any questions, reach out to the team using the chatbox!