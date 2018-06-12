package com.kiwi.rnkiwimobile

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager
import java.util.*

class RNKiwiBackButtonPackage: ReactPackage {

  override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
    return Collections.singletonList(RNKiwiBackButtonModule(reactContext))
  }

  override fun createViewManagers(reactContext: ReactApplicationContext?): MutableList<ViewManager<View, ReactShadowNode<*>>> {
    return Collections.emptyList()
  }

}