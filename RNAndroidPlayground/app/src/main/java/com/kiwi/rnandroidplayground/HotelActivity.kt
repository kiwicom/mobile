package com.kiwi.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.kiwi.rnkiwimobile.RNHotelsActivity
import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback


class HotelsActivity : RNHotelsActivity() {

  companion object {
    fun getViewModelClass(): Class<HotelsActivity> =
      HotelsActivity::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override val translationCallback = object: ResourceStringCallback {
    override fun getTranslation(key: String) = key
  }

  override val currencyCallback = object: CurrencyChangeCallback {
    override fun getFormatCurrency(amount: Double, currency: String) = amount.toString() + " " + currency
  }
}
