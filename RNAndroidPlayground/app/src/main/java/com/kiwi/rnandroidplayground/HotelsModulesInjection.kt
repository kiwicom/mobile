package com.kiwi.rnandroidplayground

import com.kiwi.rnkiwimobile.RNHotelsModulesInjection
import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback

object HotelsModulesInjection : RNHotelsModulesInjection {
  override val translationCallback = object: ResourceStringCallback {
    override fun getTranslation(key: String) = key
  }

  override val currencyCallback = object: CurrencyChangeCallback {
    override fun getFormatCurrency(amount: Double, currency: String) = amount.toString() + " " + currency
  }

  override val hasActiveBooking: Boolean = false
}