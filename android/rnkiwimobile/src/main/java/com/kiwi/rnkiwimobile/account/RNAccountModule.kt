package com.kiwi.rnkiwimobile.account

import android.os.*

import com.skypicker.reactnative.nativemodules.account.*

object RNAccountModule {

  const val jsEntryPoint = "app/native.js"

  fun getPackages(accountModuleInjection: RNAccountModuleInjection) =
    mutableListOf(
      RNAccountManagerPackage(accountModuleInjection.accountCallback)
    )

  fun getInitialProperties(initialProperties: RNAccountInitialProperties) =
    Bundle()
      .apply { putString("token", initialProperties.token) }
}
