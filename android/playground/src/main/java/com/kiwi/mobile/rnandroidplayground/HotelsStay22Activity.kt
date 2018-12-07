package com.kiwi.mobile.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.kiwi.rnkiwimobile.hotels.RNHotelsActivity

class HotelsStay22Activity : RNHotelsActivity(HotelsData.getInitialPropertiesStay22()) {
  companion object {
    fun getViewModelClass(): Class<HotelsStay22Activity> =
        HotelsStay22Activity::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override fun getReactNativeInstanceManager(): ReactInstanceManager = (application as PlaygroundApplication).reactNativeHost.reactInstanceManager
}
