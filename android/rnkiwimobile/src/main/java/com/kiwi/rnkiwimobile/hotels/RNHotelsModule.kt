package com.kiwi.rnkiwimobile.hotels

import android.os.Bundle
import android.os.Parcelable
import com.airbnb.android.react.maps.MapsPackage
import com.facebook.react.ReactPackage
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage

object RNHotelsModule {
  const val jsEntryPoint = "app/native"
  const val moduleName = "NewKiwiHotels"

  fun getPackages(hotelModulesInjection: RNHotelsModulesInjection): MutableList<ReactPackage> {
    return mutableListOf(RNDeviceInfoPackage(),
        MapsPackage(),
        RNGestureHandlerPackage(),
        RNCurrencyManagerPackage(hotelModulesInjection.currencyCallback),
        RNTranslationManagerPackage(hotelModulesInjection.translationCallback),
        RNLoggingPackage(hotelModulesInjection.hasActiveBooking))
  }

  private fun roomsConfigurationToBundleList(rooms: ArrayList<RNHotelsRoomsConfiguration>): ArrayList<Parcelable> {
    val roomsConfiguration = ArrayList<Parcelable>()
    for (room in rooms) {
      val childrenArray = ArrayList<Parcelable>()
      for (child in room.children) {
        childrenArray.add(
            Bundle()
                .apply {
                  putInt("age", child.age)
                }
        )
      }

      roomsConfiguration.add(Bundle().apply {
        putInt("adultsCount", room.adultsCount)
        putParcelableArrayList("children", childrenArray)
      })
    }
    return roomsConfiguration
  }

  fun getInitialProperties(initialProperties: RNHotelsInitialProperties): Bundle? {
    return Bundle().apply {
      putString("language", initialProperties.language)
      putString("currency", initialProperties.currency)
      putString("checkin", initialProperties.checkin)
      putString("checkout", initialProperties.checkout)
      putString("cityName", initialProperties.cityName)
      putString("cityId", initialProperties.cityId)
      putParcelableArrayList(
          "roomsConfiguration",
          roomsConfigurationToBundleList(initialProperties.roomsConfiguration)
      )
      putBundle("coordinates", Bundle()
          .apply {
            putDouble("latitude", initialProperties.coordinates.latitude)
            putDouble("longitude", initialProperties.coordinates.longitude)
          })
    }
  }
}