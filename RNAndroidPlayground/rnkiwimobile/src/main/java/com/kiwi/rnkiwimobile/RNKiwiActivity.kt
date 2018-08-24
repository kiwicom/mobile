package com.kiwi.rnkiwimobile

import android.app.Activity
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactPackage
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.shell.MainReactPackage
import com.trinerdis.skypicker.nkiwimobile.BuildConfig


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

  protected abstract fun getModuleName(): String

  protected abstract fun getPackages(): MutableList<ReactPackage>

  protected abstract fun getJSEntryPoint(): String

  protected abstract fun getInitialProperties(): Bundle?

  // endregion

  // region Activity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val properties = getInitialProperties()

    val packages = mutableListOf(
      MainReactPackage(),
      RNKiwiBackButtonPackage())

    packages.addAll(getPackages())

    reactInstanceManager = ReactInstanceManager.builder()
      .setApplication(application)
      .setBundleAssetName("index.android.bundle")
      .setJSMainModulePath(getJSEntryPoint())
      .addPackages(packages)
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build()

    reactRootView = ReactRootView(this)
    reactRootView.startReactApplication(reactInstanceManager, getModuleName(), properties)

    setContentView(reactRootView)
  }

  override fun onPause() {
    super.onPause()

    if (reactInstanceManager !== null) {
      reactInstanceManager.onHostPause(this)
    }
  }

  override fun onResume() {
    super.onResume()

    if (reactInstanceManager !== null) {
      reactInstanceManager.onHostResume(this, this)
    }
  }

  override fun onDestroy() {
    super.onDestroy()

    if (reactInstanceManager !== null) {
      reactInstanceManager.onHostDestroy(this)
    }
  }
}
