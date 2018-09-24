package com.kiwi.rnandroidplayground

import android.app.Activity
import android.os.Bundle

import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class HotelActivityFragment : Activity(), DefaultHardwareBackBtnHandler {

  companion object {
    fun getViewModelClass(): Class<HotelActivityFragment> =
        HotelActivityFragment::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_fragment)

    if (savedInstanceState == null) {
      val hotelFragment = HotelFragment()

      fragmentManager
          .beginTransaction()
          .add(R.id.container_main, hotelFragment)
          .commit()
    }
  }

  // TODO check where to handle all back button stuff
  override fun invokeDefaultOnBackPressed() {
    super.onBackPressed()
  }

  override fun onBackPressed() {
    (application as PlaygroundApplication).reactNativeHost.reactInstanceManager.onBackPressed()
  }
}