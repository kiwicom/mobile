package com.kiwi.rnandroidplayground

import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.hotels.RNHotelsFragment

class HotelsFragment : RNHotelsFragment(HotelsData.getInitialProperties()) {
  override fun getReactNativeHost(): ReactNativeHost = (activity.application as PlaygroundApplication).reactNativeHost
}
