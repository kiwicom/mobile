# iOS distribution

The source code can be found in [RNNativePlayground](https://github.com/kiwicom/mobile/tree/master/ios/RNNativePlayground)

## Test playground app

### KiwiHotels

To run `KiwiHotels` with the packager, change `RNHotelsOptions.m` like follows:

```objc
- (NSURL *)jsCodeLocation {
  // If you run it in real device, use your IP instead of localhost
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
  // return RNKiwiConstants.hotelsBundle;
}
```

Then go to common steps section.

### NewKiwiHotels

`NewKiwiHotels` package is already using packager. No changes required, check common steps.

### Common Steps

You can run the packager from the root of this repo:

```bash
yarn start
```

Then just open the project in XCode (use `reactNativeApp.xcworkspace`) and choose `RNNativePlayground` scheme.

## Usage in a real app

Paste the `.framework` within real app.
