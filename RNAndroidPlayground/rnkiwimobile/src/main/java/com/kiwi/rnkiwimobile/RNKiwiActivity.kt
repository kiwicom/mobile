package com.kiwi.rnkiwimobile

import android.app.Activity
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

abstract class RNKiwiActivity :
  Activity(),
  DefaultHardwareBackBtnHandler {

  // region Private Properties

  private lateinit var reactRootView: ReactRootView

  private lateinit var reactInstanceManager: ReactInstanceManager

  // endregion

  // region Public Methods

  override fun invokeDefaultOnBackPressed() {
    super.onBackPressed()
  }

  override fun onBackPressed() {
    reactInstanceManager.onBackPressed()
  }

  // endregion

  // region Protected Abstract Methods

  protected abstract fun getReactNativeInstanceManager(): ReactInstanceManager

  protected abstract fun getModuleName(): String

  protected abstract fun getInitialProperties(): Bundle?

  // endregion

  // region Activity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    reactInstanceManager = getReactNativeInstanceManager()

    reactRootView = ReactRootView(this)
    reactRootView.startReactApplication(reactInstanceManager, getModuleName(), getInitialProperties())

    setContentView(reactRootView)
  }

  override fun onPause() {
    super.onPause()
    reactInstanceManager.onHostPause(this)
  }

  override fun onResume() {
    super.onResume()
    reactInstanceManager.onHostResume(this, this)
  }

  override fun onDestroy() {
    super.onDestroy()
    reactInstanceManager.onHostDestroy(this)
  }
}
