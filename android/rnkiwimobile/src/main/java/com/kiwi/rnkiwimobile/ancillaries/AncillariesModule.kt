package com.kiwi.rnkiwimobile.hotels

import android.os.Bundle
import com.facebook.react.ReactPackage
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage
import com.reactnativecommunity.webview.RNCWebViewPackage;

object AncillariesModule {
  const val jsEntryPoint = "app/native"
  const val moduleName = "AncillaryFactory"

  fun getPackages(ancillariesModulesInjection: AncillariesModulesInjection): MutableList<ReactPackage> {
    return mutableListOf(RNDeviceInfoPackage(),
        RNCWebViewPackage(),
        RNCurrencyManagerPackage(ancillariesModulesInjection.currencyCallback),
        RNTranslationManagerPackage(ancillariesModulesInjection.translationCallback),
        RNLoggingPackage(ancillariesModulesInjection.hasActiveBooking))
  }

  fun getInitialProperties(initialProperties: AncillariesInitialProperties): Bundle? {
    return Bundle().apply {
      putString("service", initialProperties.service)
      putString("bookingId", initialProperties.bookingId)
      putString("kwAuthToken", initialProperties.kwAuthToken)
    }
  }
}