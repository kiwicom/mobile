package com.kiwi.mobile.rnandroidplayground

import android.app.Application
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNKiwHostArgs
import com.kiwi.rnkiwimobile.RNKiwiHost
import com.kiwi.rnkiwimobile.hotels.RNHotelsModule
import com.kiwi.rnkiwimobile.account.RNAccountModule
import com.facebook.soloader.SoLoader;

class PlaygroundApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  fun startReactNative() {
    val hotelModulesInjection = HotelsModulesInjection()
    val hotelsPackages = RNHotelsModule.getPackages(hotelModulesInjection)
    val accountPackages = RNAccountModule.getPackages()
    hotelsPackages.addAll(accountPackages)
    reactNativeHost = RNKiwiHost(
        RNKiwHostArgs(
            hostApplication = this,
            jsEntryPoint = RNHotelsModule.jsEntryPoint,
            customPackages = hotelsPackages,
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

  override fun onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}