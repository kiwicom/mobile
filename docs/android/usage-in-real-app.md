# Usage in real app

This whole example is based on how we could add the [Hotels](../../rnkiwimobile/hotels) app into our Android native app.

## Initiate the React Native bridge in advance

Usually we can do this in our Splash screen activity or MainActivity. 
I show here that you can keep it as a variable in your Application instance but that is not mandatory:

```kt
import android.app.Application
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNKiwiHost
import com.kiwi.rnkiwimobile.hotels.RNHotelsModule

class CustomApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  fun startReactNative() {
    // (1) In this case, our Hotels app is using some custom modules that need to be implemented
    // by the consumer app
    val hotelModulesInjection = HotelsModulesInjection() // Your own implementation of it
    
    // (2) RNHotelsModule is provided by rnkiwimobile
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

1. [RNHotelsModuleInjection.kt](../../rnkiwimobile/hotels/RNHotelsModuleInjection) is the interface the consumer of Hotels needs to implement
2. [RNHotelsModule.kt](../../rnkiwimobile/hotels/RNHotelsModule) includes eveything needed for Hotels

