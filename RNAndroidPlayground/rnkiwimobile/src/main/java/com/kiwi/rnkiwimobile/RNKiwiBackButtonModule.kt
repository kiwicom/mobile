package com.kiwi.rnkiwimobile

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNKiwiBackButtonModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext), NativeBackButtonCallback {

  companion object {
    val hasBackButtons = HashMap<String, Boolean>()
  }

  override fun getName(): String {
    return "RNKiwiBackButton"
  }

  override fun onInvokeDefaultBackButton() {
    val currentActivity = reactApplicationContext.currentActivity
    if (currentActivity !== null) {
      currentActivity.finish()
    }
  }

  @ReactMethod
  fun invokeDefaultBackButton() {
    this.onInvokeDefaultBackButton()
  }
}