package com.kiwi.rnkiwimobile

import com.airbnb.android.react.maps.MapsPackage
import com.facebook.react.ReactPackage
import com.oblador.vectoricons.VectorIconsPackage
import com.reactlibrary.RNTooltipsPackage
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage

object RNHotelsModule {
  const val jsEntryPoint = "app/native"
  fun getPackages(hotelModulesInjection: RNHotelsModulesInjection): MutableList<ReactPackage> {
    return mutableListOf(RNTooltipsPackage(),
        RNDeviceInfoPackage(),
        MapsPackage(),
        RNCurrencyManagerPackage(hotelModulesInjection.currencyCallback),
        RNTranslationManagerPackage(hotelModulesInjection.translationCallback),
        RNLoggingPackage(hotelModulesInjection.hasActiveBooking),
        VectorIconsPackage())
  }
}