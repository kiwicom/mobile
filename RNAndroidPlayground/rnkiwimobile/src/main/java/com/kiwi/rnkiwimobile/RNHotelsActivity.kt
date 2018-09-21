package com.kiwi.rnkiwimobile

import com.airbnb.android.react.maps.MapsPackage
import com.facebook.react.ReactPackage
import com.oblador.vectoricons.VectorIconsPackage
import com.reactlibrary.RNTooltipsPackage
import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback

interface RNHotelsModulesInjection {
  val translationCallback: ResourceStringCallback
  val currencyCallback: CurrencyChangeCallback
  val hasActiveBooking: Boolean
}

abstract class RNHotelsActivity(private val rnHotelsModules: RNHotelsModulesInjection) : RNKiwiActivity() {
  override fun getModuleName(): String {
    return "NewKiwiHotels"
  }

  override fun getJSEntryPoint(): String {
    return "app/native"
  }

  override fun getPackages(): MutableList<ReactPackage> {
    return mutableListOf(RNTooltipsPackage(),
      RNDeviceInfoPackage(),
      MapsPackage(),
      RNCurrencyManagerPackage(rnHotelsModules.currencyCallback),
      RNTranslationManagerPackage(rnHotelsModules.translationCallback),
      RNLoggingPackage(rnHotelsModules.hasActiveBooking),
      VectorIconsPackage())
  }
}
