---
title: Analytics migration guide
meta: 
  description: This guide helps you migrate the player and analytics library components in your product to the latest version. Migrating enables you to get detailed data insights for your videos and live streams using api.video's Analytics solution.
---

# Migration guide

This guide helps you migrate the player and analytics library components in your product to the latest version. Migrating enables you to get detailed data insights for your videos and live streams using api.video's Analytics solution.

If you do not yet use Analytics, check out the [Analytics overview](/analytics/overview) and the available [Analytics libraries & SDKs](/sdks/player) to start collecting data.

## Player and Analytics SDK migration

This section gives you guidance on the necessary updates that you need to take in case you are using a web or mobile player and want to collect analytics.

### Web players

| The player you use                                                         | Actions to take                                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| api.video web player ([Player SDK](/sdks/player/apivideo-player-sdk), or [Flutter player](/sdks/player/apivideo-flutter-player), or [React player](https://docs.api.video/sdks/player/apivideo-react-player))      | No action needed, data collection will continue as expected. |
| A 3rd-party player with an Analytics library  | You need to update the analytics library you use: [api.video-videojs-analytics](/sdks/player/apivideo-videojs-analytics), or [api.video-hlsjs-analytics](/sdks/player/apivideo-hlsjs-analytics), or [api.video-player-analytics](/sdks/player/apivideo-player-analytics)). |
| A 3rd-party player without analytics | To start collecting data, you need to implement one of the [Analytics libraries](/sdks/player#web) for Web.  |

### Mobile players

| The player you use                                                         | Actions to take                                                      |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| api.video [React Native player](/sdks/player/apivideo-react-native-player) | No action needed, data collection will continue as expected.         |
| api.video [Flutter player](/sdks/player/apivideo-flutter-player), or [Android player](/sdks/player/apivideo-android-player), or [Swift player](/sdks/player/apivideo-swift-player)  | You need to update the player library that you use. |
| A 3rd-party player on Android, based on exoplayer | You need to update the [api.video-android-player-analytics](/sdks/player/apivideo-android-player-analytics) library. You will also need minor code modifications - see the [documentation](https://github.com/apivideo/api.video-android-player-analytics?tab=readme-ov-file#installation) for details.  |
| A 3rd-party player on iOS, based on avplayer | You need to update the [api.video-swift-player-analytics](/sdks/player/apivideo-swift-player-analytics) library. You will also need minor code modifications - see the [documentation](https://github.com/apivideo/api.video-swift-player-analytics?tab=readme-ov-file#installation) for details.  |
| A 3rd-party player without analytics | To start collecting data, you need to implement one of the [Analytics libraries](/sdks/player#mobile) for Mobile.  |

## Mapping API endpoints

Migrating to the latest version of Analytics API is simple. The previous version of Analytics only provided 2 endpoints, which returned play event count for videos and live streams. In the latest version, endpoints are no longer separated for videos and live streams.

### Endpoint mapping

| Previous Analytics endpoints    | Usage                                             |
| ------------------------------- | ------------------------------------------------- |
| `/analytics/videos/plays`       | to get the number of play events for videos       |
| `/analytics/live-streams/plays` | to get the number of play events for live streams |

The previous Analytics version's `/play` metric can be directly mapped to 3 new endpoints:

- For the number of play events, use `/data/metrics/{metric}/{aggregation}` with the `play` metric and `count` aggregation.
    - Example: `/data/metrics/play/count`

- For the number of play events in a breakdown by dimensions, use `/data/buckets/{metric}/{breakdown}` with the `play` metric and one of these dimensions:
        - `media-id`, `media-type`, `continent`, `country`, `device-type`, `operating-system`, `browser`,
    - Example: `/data/buckets/play/country`

- For the number of play events over time, use `/data/timeseries/{metric}` with the `play` metric.
    - Example: `/data/timeseries/play`