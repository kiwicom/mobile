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
      putString("currency", initialProperties.currency)
      putString("bookingComAffiliate", initialProperties.bookingComAffiliate)
      putString("checkin", initialProperties.checkin)
      putString("checkout", initialProperties.checkout)
      putString("cityName", initialProperties.cityName)
      putString("cityId", initialProperties.cityId)
      putBundle("roomsConfiguration", Bundle()
          .apply {
            putInt("adultsCount", initialProperties.roomsConfiguration.adultsCount)
          })
      putBundle("coordinates", Bundle()
          .apply {
            putDouble("latitude", initialProperties.hotelsCoordinates.latitude)
            putDouble("longitude", initialProperties.hotelsCoordinates.longitude)
          })
    }
  }
}