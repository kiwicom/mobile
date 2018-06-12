package com.kiwi.rnkiwimobile

import android.app.Activity
import android.content.pm.ActivityInfo
import android.os.Bundle
import com.airbnb.android.react.maps.MapsPackage
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.common.LifecycleState
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.shell.MainReactPackage
import com.oblador.vectoricons.VectorIconsPackage
import com.reactlibrary.RNTooltipsPackage
import com.skypicker.reactnative.nativemodules.currency.CurrencyChangeCallback
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage
import com.skypicker.reactnative.nativemodules.translation.ResourceStringCallback
import com.trinerdis.skypicker.nkiwimobile.BuildConfig
import java.util.*


abstract class RNKiwiActivity :
  Activity(),
  DefaultHardwareBackBtnHandler, CurrencyChangeCallback,
  ResourceStringCallback {

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

  protected abstract fun isDualPane(): Boolean

  protected abstract fun hasActiveBooking(): Boolean

  protected abstract fun getCurrencyCode(): String

  protected abstract fun getCountryCode(): String

  protected abstract fun getCoordinates(): Bundle

  protected abstract fun getModuleName(): String

  protected abstract fun getBookingComAffiliate(): String

  protected abstract fun getJSEntryPoint(): String

  // endregion

  // region Activity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val properties = Bundle()
      .apply {
        putString("language", getCountryCode())
        putString("currency", getCurrencyCode())
        putString("bookingComAffiliate", getBookingComAffiliate())
        putBundle("coordinates", getCoordinates())
      }

    reactInstanceManager = ReactInstanceManager.builder()
      .setApplication(application)
      .setBundleAssetName("index.android.bundle")
      .setJSMainModulePath(getJSEntryPoint())
      .addPackages(Arrays.asList(
        MainReactPackage(),
        RNTooltipsPackage(),
        RNDeviceInfoPackage(),
        RNCurrencyManagerPackage(this),
        RNTranslationManagerPackage(this),
        RNLoggingPackage(hasActiveBooking()),
        MapsPackage(),
        VectorIconsPackage(),
        RNKiwiBackButtonPackage()

      ))
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build()

    reactRootView = ReactRootView(this)
    reactRootView.startReactApplication(reactInstanceManager, getModuleName(), properties)

    setContentView(reactRootView)

    if (!isDualPane()) {
      requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
    }
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
