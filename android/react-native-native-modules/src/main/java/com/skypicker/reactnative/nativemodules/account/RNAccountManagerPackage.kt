package com.skypicker.reactnative.nativemodules.account

import com.facebook.react.*
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.*

import java.util.*

class RNAccountManagerPackage(
  private val listener: AccountCallback = createDefault()
):
  ReactPackage {

  // region Static Types

  private companion object {
    fun createDefault() = object: AccountCallback {
      override fun accountDeleted() {
        // nothing
      }
    }
  }

  // endregion Static Types

  // region Public Methods

  override fun createViewManagers(reactContext: ReactApplicationContext) =
    emptyList<ViewManager<*, *>>()

  override fun createNativeModules(reactContext: ReactApplicationContext) =
    ArrayList<NativeModule>()
      .apply { add(RNAccountManager(reactContext, listener)) }

  // endregion Public Methods
}
