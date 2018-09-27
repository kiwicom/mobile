package com.kiwi.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.kiwi.rnkiwimobile.hotels.RNHotelsActivity

class HotelsActivity : RNHotelsActivity(HotelsData.getInitialProperties()) {
  companion object {
    fun getViewModelClass(): Class<HotelsActivity> =
        HotelsActivity::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override fun getReactNativeInstanceManager(): ReactInstanceManager = (application as PlaygroundApplication).reactNativeHost.reactInstanceManager
}
