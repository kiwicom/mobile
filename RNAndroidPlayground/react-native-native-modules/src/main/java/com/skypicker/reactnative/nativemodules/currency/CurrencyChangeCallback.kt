package com.skypicker.reactnative.nativemodules.currency

interface CurrencyChangeCallback {

  fun getFormatCurrency(amount: Double, currency: String) : String

}
