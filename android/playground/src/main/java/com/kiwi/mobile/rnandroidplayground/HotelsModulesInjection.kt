package com.kiwi.mobile.rnandroidplayground

import com.kiwi.rnkiwimobile.hotels.RNHotelsModulesInjection
import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback

open class HotelsModulesInjection : RNHotelsModulesInjection {
  override val translationCallback = object: ResourceStringCallback {
    override fun getTranslation(key: String) = key
  }

  override val currencyCallback = object: CurrencyChangeCallback {
    override fun getFormatCurrency(amount: Double, currency: String) = amount.toString() + " " + currency
  }

  override val hasActiveBooking: Boolean = false
}