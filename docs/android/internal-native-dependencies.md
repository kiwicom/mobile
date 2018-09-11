# Internal native dependencies

These dependencies can be found in [react-native-native-modules](../../RNAndroidPlayground/react-native-native-modules/src/main/java/com/skypicker/reactnative/nativemodules).

## Create a new internal native module

The process is the same as creating a normal [Android native module in React Native](https://facebook.github.io/react-native/docs/native-modules-android).
We use Kotlin. 

See for example [Logging module](https://github.com/kiwicom/mobile/tree/docs/rnkiwimobile/RNAndroidPlayground/react-native-native-modules/src/main/java/com/skypicker/reactnative/nativemodules/logging). 
Once is created and released, we can use it in a vertical just like how we be adding a native module. See for example how our [RNHotelsActivity is using Logging module](https://github.com/kiwicom/mobile/blob/docs/rnkiwimobile/RNAndroidPlayground/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/RNHotelsActivity.kt#L35).

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
Read more in [Using a vertical and dependency injection](https://github.com/kiwicom/mobile/blob/docs/rnkiwimobile/docs/android/verticals-and-dependency-injection.md#using-a-vertical-and-dependency-injection).