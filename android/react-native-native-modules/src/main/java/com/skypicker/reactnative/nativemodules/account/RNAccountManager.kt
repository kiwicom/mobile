package com.skypicker.reactnative.nativemodules.account

import com.facebook.react.bridge.*

class RNAccountManager(
  reactContext: ReactApplicationContext,
  private val listener: AccountCallback
):
  ReactContextBaseJavaModule(reactContext) {

  companion object {
    const val TAG = "RNAccountManager"
  }

  @ReactMethod
  fun accountDeleted() {
    listener.accountDeleted()
  }

  override fun getName() = TAG
}
