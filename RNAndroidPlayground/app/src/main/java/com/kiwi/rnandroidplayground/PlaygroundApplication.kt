package com.kiwi.rnandroidplayground

import android.app.Application
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNHotelsModule
import com.kiwi.rnkiwimobile.RNKiwiHost

class PlaygroundApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  fun startReactNative() {
    val hotelModulesInjection = HotelsModulesInjection()
    reactNativeHost = RNKiwiHost(
        this,
        RNHotelsModule.jsEntryPoint,
        RNHotelsModule.getPackages(hotelModulesInjection))
    // Init the bridge and everything in advance
    reactNativeHost.reactInstanceManager.createReactContextInBackground()
  }

  fun clearReactNative() {
    reactNativeHost.clear()
  }
}