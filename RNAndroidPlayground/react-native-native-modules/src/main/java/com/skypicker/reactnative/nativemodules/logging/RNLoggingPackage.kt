package com.skypicker.reactnative.nativemodules.logging

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.*

class RNLoggingPackage(private val hasActiveBooking: Boolean = false) : ReactPackage {

  // region Public Methods

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }

  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val modules = ArrayList<NativeModule>()

    modules.add(RNLoggingModule(reactContext, hasActiveBooking))

    return modules
  }

  // endregion Public Methods
}
