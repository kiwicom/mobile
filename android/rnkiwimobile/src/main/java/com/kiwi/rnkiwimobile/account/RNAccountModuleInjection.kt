package com.kiwi.rnkiwimobile.account

import com.skypicker.reactnative.nativemodules.account.*

interface RNAccountModuleInjection {
  val token: String
  val accountCallback: AccountCallback
}
