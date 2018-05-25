package com.skypicker.reactnative.nativemodules.currency

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNCurrencyManager(
  reactContext: ReactApplicationContext,
  listener: CurrencyChangeCallback
) :
  ReactContextBaseJavaModule(reactContext) {

  // region Private Types

  private object Constant {
    const val TAG = "RNCurrencyManager"
  }

  // endregion Private Types

  // region Private Attributes

  private val currencyListener = listener

  // endregion Private Attributes

  // region Public Methods

  override fun getName(): String = Constant.TAG

  @ReactMethod(isBlockingSynchronousMethod = true)
  fun formatAmount(amount: Double, currency: String) = currencyListener
    .getFormatCurrency(amount, currency)

  @ReactMethod
  fun formatAmountAsync(amount: Double, currency: String, promise: Promise) {
    promise.resolve(currencyListener.getFormatCurrency(amount, currency))
  }
  // endregion Public Methods

}

