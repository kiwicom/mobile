package com.kiwi.rnkiwimobile.hotels

import android.os.Bundle
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
  const val moduleName = "NewKiwiHotels"

  fun getPackages(hotelModulesInjection: RNHotelsModulesInjection): MutableList<ReactPackage> {
    return mutableListOf(RNTooltipsPackage(),
        RNDeviceInfoPackage(),
        MapsPackage(),
        RNCurrencyManagerPackage(hotelModulesInjection.currencyCallback),
        RNTranslationManagerPackage(hotelModulesInjection.translationCallback),
        RNLoggingPackage(hotelModulesInjection.hasActiveBooking),
        VectorIconsPackage())
  }
  fun getInitialProperties(initialProperties: RNHotelsInitialProperties): Bundle? {
    return Bundle().apply {
      putString("language", initialProperties.language)
      putString("currency", "EUR")
      putString("bookingComAffiliate", "")
      putString("checkin", initialProperties.checkin)
      putString("checkout", initialProperties.checkout)
      putString("cityName", "Barcelona")
      putString("cityId", "aG90ZWxDaXR5Oi0zNzI0OTA")
      putBundle("roomsConfiguration", Bundle()
          .apply {
            putInt("adultsCount", 1)
          })
      putBundle("coordinates", Bundle()
          .apply {
            putDouble("latitude", 59.9139)
            putDouble("longitude", 10.7522)
          })
    }
  }
}