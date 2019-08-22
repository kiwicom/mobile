package com.kiwi.mobile.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.facebook.react.ReactInstanceManager
import com.kiwi.rnkiwimobile.account.RNAccountSettingsActivity
import com.kiwi.rnkiwimobile.account.RNAccountInitialProperties

class AccountSettingsActivity : RNAccountSettingsActivity(RNAccountInitialProperties(token = "mock")) {
  companion object {
    fun getViewModelClass(): Class<AccountSettingsActivity> =
            AccountSettingsActivity::class.java
  }

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
  }

  override fun getReactNativeInstanceManager(): ReactInstanceManager = (application as PlaygroundApplication).reactNativeHost.reactInstanceManager
}
