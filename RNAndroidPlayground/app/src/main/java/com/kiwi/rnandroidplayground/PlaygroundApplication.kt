package com.kiwi.rnandroidplayground

import android.app.Application
import com.airbnb.android.react.maps.MapsPackage
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.kiwi.rnkiwimobile.RNKiwiHost
import com.oblador.vectoricons.VectorIconsPackage
import com.reactlibrary.RNTooltipsPackage
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage

class PlaygroundApplication : Application() {

  lateinit var reactNativeHost: ReactNativeHost

  override fun onCreate() {
    super.onCreate()
    reactNativeHost = RNKiwiHost(this, getJSEntryPoint(), getPackages())
    // Init the bridge and everything in advance
    reactNativeHost.reactInstanceManager.createReactContextInBackground()
  }

  private fun getJSEntryPoint(): String {
    return "app/native"
  }

  private fun getPackages(): MutableList<ReactPackage> {
    val hotelModulesInjection = HotelsModulesInjection()

    return mutableListOf(RNTooltipsPackage(),
        RNDeviceInfoPackage(),
        MapsPackage(),
        RNCurrencyManagerPackage(hotelModulesInjection.currencyCallback),
        RNTranslationManagerPackage(hotelModulesInjection.translationCallback),
        RNLoggingPackage(hotelModulesInjection.hasActiveBooking),
        VectorIconsPackage())
  }
}