package com.skypicker.reactnative.nativemodules.localsearch

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.*

class RNLocalSearchPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext ): List<NativeModule>  {
    val modules = ArrayList<NativeModule>()
    modules.add(RNLocalSearchManager(reactContext))
    return modules
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }
}