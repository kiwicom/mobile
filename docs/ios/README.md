# iOS distribution

The source code can be found in [RNNativePlayground](https://github.com/kiwicom/mobile/tree/master/ios/RNNativePlayground)

## Test playground app

### KiwiHotels module

1. To run `KiwiHotels` module with the packager, change [`RNKiwiConstants.m`](https://github.com/kiwicom/mobile/blob/master/ios/RNKiwiMobile/RNKiwiConstants.m) like follows:

```objc
+ (NSURL *)bundleURL {
  return [NSURL URLWithString:@"http://localhost:8081/app/native.bundle?platform=ios&dev=true"];
}
```

2. Then run the packager from the root of this repo:

```bash
yarn start
```

3. Finally just open the project in XCode (use `reactNativeApp.xcworkspace`) and choose `RNNativePlayground` scheme.

TODO - Add screenshot

_NOTE_: If you want to test playground with `jsbundle` go directly to step 3.

## Usage in a real app

Paste the `.framework` within real app.
