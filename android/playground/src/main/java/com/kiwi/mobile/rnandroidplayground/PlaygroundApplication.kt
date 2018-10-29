package com.kiwi.mobile.rnandroidplayground

import android.app.Application
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNKiwHostArgs
import com.kiwi.rnkiwimobile.RNKiwiHost
import com.kiwi.rnkiwimobile.hotels.RNHotelsModule

class PlaygroundApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  fun startReactNative() {
    val hotelModulesInjection = HotelsModulesInjection()
    reactNativeHost = RNKiwiHost(
        RNKiwHostArgs(
            hostApplication = this,
            jsEntryPoint = RNHotelsModule.jsEntryPoint,
            customPackages = RNHotelsModule.getPackages(hotelModulesInjection),
            codePushKey = BuildConfig.CODEPUSH_KEY,
            codePushVersion = BuildConfig.CODEPUSH_VERSION
        )
    )
    // Init the bridge and everything in advance
    reactNativeHost.reactInstanceManager.createReactContextInBackground()
  }

  fun clearReactNative() {
    reactNativeHost.clear()
  }
}