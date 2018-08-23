package com.kiwi.rnkiwimobile

import android.os.Bundle
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

abstract class RNHotelsActivity : RNKiwiActivity() {
  abstract val translationCallback: ResourceStringCallback
  abstract val currencyCallback: CurrencyChangeCallback

  override fun getModuleName(): String {
    return "KiwiHotels"
  }

  override fun getJSEntryPoint(): String {
    return "app/hotels/index"
  }

  override fun getPackages(): MutableList<ReactPackage> {
    return mutableListOf(RNTooltipsPackage(),
      RNDeviceInfoPackage(),
      MapsPackage(),
      RNCurrencyManagerPackage(currencyCallback),
      RNTranslationManagerPackage(translationCallback),
      RNLoggingPackage(true),
      VectorIconsPackage())
  }

  override fun getInitialProperties(): Bundle {
    return Bundle().apply{
      putString("language", "en")
      putString("currency", "EUR")
      putString("bookingComAffiliate", "")
      putBundle("coordinates", Bundle()
        .apply {
          putDouble("latitude", 59.9139)
          putDouble("longitude", 10.7522)
        })
    }
  }
}
