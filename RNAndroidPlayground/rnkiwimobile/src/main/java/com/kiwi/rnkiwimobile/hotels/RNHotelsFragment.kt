package com.kiwi.rnkiwimobile.hotels

import com.kiwi.rnkiwimobile.RNKiwiFragment

abstract class RNHotelsFragment(initialProperties: RNHotelsInitialProperties) : RNKiwiFragment(RNHotelsModule.getInitialProperties(initialProperties)) {
  override fun getModuleName(): String {
    return "NewKiwiHotels"
  }
}