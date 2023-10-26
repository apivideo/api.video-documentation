---
title: Swift live stream library
meta: 
  description: The official Swift live stream library for api.video. [api.video](https://api.video/) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.
---

Swift Live stream library
============================

## [api.video Swift Live stream Library](https://github.com/apivideo/LiveStreamIos/blob/master/README.md)

This module is an easy way to broadcast live stream on api.video platform

### Installation

#### With Cocoapods

1. Add the following entry to your Podfile:
   ```swift
   pod ‘LiveStreamIos’
   ```
3. Then run `pod install`
4. Don’t forget to import LiveStreamIos in every file you’d like to use api.video livestream library

### Permissions
To be able to broadcast, you must update Info.plist with a usage description for camera and microphone

```xml
...
<key>NSCameraUsageDescription</key>
<string>Your own description of the purpose</string>
<key>NSMicrophoneUsageDescription</key>
<string>Your own description of the purpose</string>
...
```

### Quick Start
1. In your ViewController.swift file import the library
2. Add a viariable apiVideo
3. Intenciate your variable with a view (or not if you dont want a preview of your stream)
4. to start your stream use startLiveStreamFlux() function
   - if you're broadcasting on api.video you only have to add your stream key to liveStreamKey, and nil for rtmpServerUrl)
   - if not add your rtmp server url to rtmpServerUrl

   ```swift
   class ViewController: UIViewController {
       var apiVideo:  ApiVideoLiveStream?
       @IBOutlet var viewCamera: UIView!
       override func viewDidLoad() {
           super.viewDidLoad()
           apiVideo = ApiVideoLiveStream(view: viewCamera)
           apiVideo?.startLiveStreamFlux(liveStreamKey: "Your_stream_key", rtmpServerUrl: nil)
       }
   }
   ```

By default your stream will be

- 720p
- 30 fps
- back camera
- landscape
- microphone : on

### Plugins

API.Video sdk is using external library

| Plugin | README |
| ------ | ------ |
| HaishinKit | [https://github.com/shogo4405/HaishinKit.swift][HaishinKit] |

#### FAQ
If you have any questions, ask us here:  https://community.api.video .
Or use [Issues].

License
----

MIT License Copyright (c) 2021 api.video


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[Issues]: <https://github.com/apivideo/LiveStreamIos/issues>
[HaishinKit]: <https://github.com/shogo4405/HaishinKit.swift>
