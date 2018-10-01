package com.kiwi.rnkiwimobile

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNKiwiBackButtonModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), NativeBackButtonCallback {

  override fun getName(): String {
    return "RNKiwiBackButton"
  }

  override fun onInvokeDefaultBackButton() {
    currentActivity?.finish()
  }

  @ReactMethod
  fun invokeDefaultBackButton() {
    this.onInvokeDefaultBackButton()
  }
}