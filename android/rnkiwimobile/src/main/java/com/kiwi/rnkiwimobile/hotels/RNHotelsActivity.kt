package com.kiwi.rnkiwimobile.hotels

import com.kiwi.rnkiwimobile.RNKiwiActivity

abstract class RNHotelsActivity(initialProperties: RNHotelsInitialProperties) : RNKiwiActivity(RNHotelsModule.getInitialProperties(initialProperties)) {
  override fun getModuleName(): String {
    return RNHotelsModule.moduleName
  }
}