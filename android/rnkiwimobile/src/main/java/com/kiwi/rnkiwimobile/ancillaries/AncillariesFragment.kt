package com.kiwi.rnkiwimobile.hotels

import com.kiwi.rnkiwimobile.RNKiwiFragment

abstract class AncillariesFragment(initialProperties: AncillariesInitialProperties) : RNKiwiFragment(AncillariesModule.getInitialProperties(initialProperties)) {
  override fun getModuleName(): String {
    return AncillariesModule.moduleName
  }
}