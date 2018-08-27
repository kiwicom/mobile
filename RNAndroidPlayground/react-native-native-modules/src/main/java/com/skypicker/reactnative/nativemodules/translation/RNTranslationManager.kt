package com.skypicker.reactnative.nativemodules.translation

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNTranslationManager(
  reactContext: ReactApplicationContext,
  listener: ResourceStringCallback
) :
  ReactContextBaseJavaModule(reactContext) {

  // region Private Types

  private object Constant {
    const val TAG = "RNTranslationManager"
  }

  // endregion Private Types

  // region Private Attributes

  private val stringListener = listener

  // endregion Private Attributes

  // region Public Methods

  override fun getName(): String = Constant.TAG

  @ReactMethod
  fun translate(key: String, promise: Promise) {
    promise.resolve(stringListener.getTranslation(key))
  }
  // endregion Public Methods

}
