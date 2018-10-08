# Usage in real app

This whole example is based on how we could add the [Hotels](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/hotels) app into our Android native app.

## Initiate the React Native app in advance

I show here that you can keep it as a variable in your `Application` instance but that is not mandatory, just one way to do it:

```kt
import android.app.Application
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNKiwiHost
import com.kiwi.rnkiwimobile.hotels.RNHotelsModule

class CustomApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  fun startReactNative() {
    // (1) In this case, our Hotels app is using a set of custom modules that need to be implemented
    // by the consumer app
    val hotelModulesInjection = HotelsModulesInjection() // Your own implementation of it
    
    // (2) RNKiwiHost and RNHotelsModule is provided by rnkiwimobile
    reactNativeHost = RNKiwiHost(
        this,
        RNHotelsModule.jsEntryPoint,
        RNHotelsModule.getPackages(hotelModulesInjection))
        
    // Init the bridge and everything in advance
    reactNativeHost.reactInstanceManager.createReactContextInBackground()
  }

  // Helper function to call when closing the app
  fun clearReactNative() {
    reactNativeHost.clear()
  }
}
```

1. [RNHotelsModuleInjection.kt](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/hotels/RNHotelsModuleInjection.kt) is the interface the consumer of Hotels needs to implement
2. [RNHotelsModule.kt](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/hotels/RNHotelsModule.kt) includes eveything needed for Hotels

## Start the React Native view

After that, in any place of your app (usually Splash screen or MainActivity) you would:

```kt
class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    (application as CustomApplication).startReactNative()

    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
  }

  override fun onDestroy() {
    super.onDestroy()
    (application as CustomApplication).clearReactNative()
  }
}
```

Then, you can just start the [RNHotelsActivity.kt](../../android/rnkiwimobile/src/main/java/com/kiwi/rnkiwimobile/hotels/RNHotelsActivity.kt) wherever you need it.
