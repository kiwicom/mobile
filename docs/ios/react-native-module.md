# React Native modules

## Creating a new React Native module

A React Native module is a set of standalone React Native views that act as a standalone application.

To create a new React Native module just:

1. Create a new folder inside `app` folder, eg: `app/newModule`, where `newModule` stands for the new module name.

2. Inside `newModule/index.js` export all standalone views.

## Using a React Native module in a playground

In the [`app/native`](https://github.com/kiwicom/mobile/blob/master/app/native.js) import all views from a module of your choice and register them, which then you can use by the defined name, eg:

```js
// Hotels
AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage
);
```

Registered module has to be then allocated in along with proper `moduleName` and `initialProperties`, like below:

```objc
  RNKiwiViewController *vc = [[RNKiwiViewController alloc] initWithModule:@"KiwiHotels"
                                         initialProperties:@{
                                            @"coordinates": @{
                                                @"latitude" : @59.9139,
                                                @"longitude": @10.7522
                                                },
                                            @"language": @"en",
                                            @"currency": @"EUR",
                                            @"lastNavigationMode": @"push",
                                            @"dimensions": [self windowDimensions]
                                         }];
```

## Using React Native module in external app

TODO

## Bridge

Bridge is created once upfront based on `bundleURL` from `RNKiwiConstants`

```objc
- (void)initBridge {
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithBundleURL:[RNKiwiConstants bundleURL] moduleProvider:nil launchOptions:nil];
  }
}
```
