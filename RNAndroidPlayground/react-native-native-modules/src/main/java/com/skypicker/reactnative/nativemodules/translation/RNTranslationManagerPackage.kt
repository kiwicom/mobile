package com.skypicker.reactnative.nativemodules.translation

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class RNTranslationManagerPackage(private val listener: ResourceStringCallback = createDefault()) :
  ReactPackage {

  // region Static Types

  companion object {
    private fun createDefault() = object : ResourceStringCallback {
      override fun getTranslation(key: String): String {
        return key
      }
    }
  }

  // endregion Static types

  // region Public Methods

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }

  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val modules = ArrayList<NativeModule>()

    modules.add(RNTranslationManager(reactContext, listener))

    return modules
  }

  // endregion Public Methods
}
