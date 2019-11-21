package com.kiwi.rnkiwimobile.account

import android.os.*

import com.reactnativecommunity.asyncstorage.*
import com.reactnativecommunity.netinfo.*

import com.skypicker.reactnative.nativemodules.account.*

import com.swmansion.gesturehandler.react.*

object RNAccountModule {

  const val jsEntryPoint = "app/native.js"

  fun getPackages() =
    mutableListOf(
      RNGestureHandlerPackage(),
      RNAccountManagerPackage(),
      NetInfoPackage(),
      AsyncStoragePackage()
    )

  fun getInitialProperties(initialProperties: RNAccountInitialProperties) =
    Bundle()
      .apply { putString("token", initialProperties.token) }
}
