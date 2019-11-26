package com.kiwi.mobile.rnandroidplayground

import com.kiwi.rnkiwimobile.account.*

import com.skypicker.reactnative.nativemodules.account.*

open class AccountModuleInjection:
  RNAccountModuleInjection {

  override val token: String
    get() = ""

  override val accountCallback = object: AccountCallback {
    override fun accountDeleted() {}
  }
}
