# iOS distribution

## Test playground app

To run it with the packager, change `ViewController.m` like follows:

```objc
- (NSURL *)jsCodeLocation {
  // If you run it in real device, use your IP instead of localhost 
  return [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios&dev=true"];
  // return RNKiwiConstants.hotelsBundle;
}
```

Then you can run the packager from the root of this repo:

```bash
yarn start
```

Finally just run the example app from XCode (`RNNativePlayground`).
