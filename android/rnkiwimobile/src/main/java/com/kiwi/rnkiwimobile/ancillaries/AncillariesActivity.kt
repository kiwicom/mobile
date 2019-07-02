package com.kiwi.rnkiwimobile.ancillaries

import com.kiwi.rnkiwimobile.RNKiwiActivity
import com.kiwi.rnkiwimobile.hotels.AncillariesInitialProperties
import com.kiwi.rnkiwimobile.hotels.AncillariesModule

abstract class AncillariesActivity(initialProperties: AncillariesInitialProperties) : RNKiwiActivity(AncillariesModule.getInitialProperties(initialProperties)) {
  override fun getModuleName(): String {
    return AncillariesModule.moduleName
  }
}