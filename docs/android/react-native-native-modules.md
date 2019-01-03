# react-native-native-modules

Our own internal native dependencies.

These dependencies can be found in 
[react-native-native-modules](../../android/react-native-native-modules/src/main/java/com/skypicker/reactnative/nativemodules).

## Releasing a new version

When changing code from one of these modules, you will need to bump the version from [rnmodules/package.json#version](../../packages/rnmodules/package.json#L3). Moreover, you need to bump `rnkiwimobile` version at [.buid/package.json#version](../../.build/package.json##L3).

## Create a new internal native module

The process is the same as creating a normal 
[Android native module in React Native](https://facebook.github.io/react-native/docs/native-modules-android).
We use Kotlin. 

See for example [Logging module](../../android/react-native-native-modules/src/main/java/com/skypicker/reactnative/nativemodules/logging). 
Once is created and released, we can use it in a vertical just like how we be adding a native module. 
See for example how our [RNHotelsActivity is using Logging module](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/RNHotelsActivity.kt#L35).

Basically, overriding `getPackages`:

```kt
override fun getPackages(): MutableList<ReactPackage> {
return mutableListOf(
  ...
  RNLoggingPackage(rnHotelsModules.hasActiveBooking),
  ...)
}
``` 

In our modules we can pass also variables or even callbacks that we can use for dependency injection.
Read more in [Using a vertical and dependency injection](./verticals-and-dependency-injection.md#using-a-vertical-and-dependency-injection).
