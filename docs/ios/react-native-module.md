# React Native modules

## Creating a new React Native module

A React Native module is a set of standalone React Native views that act as a standalone application.

To create a new React Native module just:

1. Create a new folder inside `app` folder, eg: `app/newModule`, where `newModule` stands for the new module name.

2. Inside `newModule/index.js` export all standalone views.

## Using a React Native module in a playground

In the [`app/native`](https://github.com/kiwicom/mobile/blob/master/app/native.js) import all views from a module of your choice and register them by name thath you will later refer to form the native side.

```js
// Hotels
AppRegistry.registerComponent('KiwiHotels', () => HotelsStandalonePackage);
AppRegistry.registerComponent(
  'NewKiwiHotels',
  () => NewHotelsStandAlonePackage
);
```

Registered module has to be then instantiated in along with proper `moduleName` and `initialProperties`, like below:

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

1. Inject `RNKiwiMobile.framework` in new XCode project to `Embedded Binaries`

![](../../.docs/assets/inject_framework.gif)

2. Create a `ViewController` similar to the one existing in playground which contain:

- init with creating a bridge

```objc
[[RNKiwiSharedBridge sharedInstance] initBridge];
```

_NOTE_: Creating bridge upfront guarantees that your React Native module will be built once the application is launched.

- create a new instance of `RNKiwiViewController` with `moduleName` and `initialProperties`

- use methods required by an implemented protocols

```objc
# pragma mark - RNKiwiViewControllerFlowDelegate

- (void)RNKiwiViewControllerDidFinish:(nonnull RNKiwiViewController *)viewController {
  [self.navigationController popViewControllerAnimated:YES];
}

# pragma mark - RNKiwiCurrencyManager

- (NSString *)formattedPrice:(NSNumber *)price withCurrency:(NSString *)currencyCode {
  return [[price stringValue] stringByAppendingString:currencyCode];
}

#pragma mark - RNKiwiTranslationProvider

- (NSString *)localizedStringWithKey:(NSString *)key {
  // In real app it would give us the String based on localization
  return nil;
}

#pragma mark - UIGestureRecognizer

- (BOOL)gestureRecognizer:(UIGestureRecognizer *)gestureRecognizer shouldReceiveTouch:(UITouch *)touch {
  if (self.navigationController.interactivePopGestureRecognizer == gestureRecognizer) {
    return [_activeVc isInteractivePopGestureAllowed];
  }
  return YES;
}
```

## Bridge

There is only one bridge present throughout the lifecycle of the app.

```objc
- (void)initBridge {
  if (!_bridge) {
    _bridge = [[RCTBridge alloc] initWithBundleURL:[RNKiwiConstants bundleURL] moduleProvider:nil launchOptions:nil];
  }
}
```
