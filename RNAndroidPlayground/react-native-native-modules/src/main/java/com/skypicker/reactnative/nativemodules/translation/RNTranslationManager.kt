package com.skypicker.reactnative.nativemodules.translation

import com.facebook.react.bridge.*
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

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

  @ReactMethod(isBlockingSynchronousMethod = true)
  fun translate(key: String) = stringListener.getTranslation(key)

  @ReactMethod
  fun translateAsync(key: String, promise: Promise) {
    promise.resolve(stringListener.getTranslation(key))
  }
  // endregion Public Methods

}
