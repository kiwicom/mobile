package com.kiwi.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.kiwi.rnkiwimobile.RNHotelsActivity

class HotelsActivity : RNHotelsActivity(HotelsModulesInjection) {
  companion object {
    fun getViewModelClass(): Class<HotelsActivity> =
      HotelsActivity::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override fun getInitialProperties(): Bundle? {
    return Bundle().apply{
      putString("language", "en")
      putString("currency", "EUR")
      putString("bookingComAffiliate", "")
      putBundle("coordinates", Bundle()
        .apply {
          putDouble("latitude", 59.9139)
          putDouble("longitude", 10.7522)
        })
    }
  }
}
