package com.kiwi.rnandroidplayground

import android.os.Bundle
import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.RNKiwiFragment

class HotelFragment : RNKiwiFragment() {

  override fun getModuleName(): String {
    return "NewKiwiHotels"
  }

  override fun getReactNativeHost(): ReactNativeHost = (activity.application as PlaygroundApplication).reactNativeHost

  // TODO extract code repetition
  override fun getInitialProperties(): Bundle? {
    return Bundle().apply {
      putString("language", "en")
      putString("currency", "EUR")
      putString("bookingComAffiliate", "")
      putString("checkin", "2018-12-01")
      putString("checkout", "2018-12-05")
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
