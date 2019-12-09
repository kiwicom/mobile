package com.kiwi.mobile.rnandroidplayground

import com.facebook.react.ReactNativeHost
import com.kiwi.rnkiwimobile.ancillaries.RNAncillaryFactoryFragment
import com.kiwi.rnkiwimobile.ancillaries.RNAncillaryFactoryInitialProperties


class AncillaryFactoryFragment: RNAncillaryFactoryFragment(
        RNAncillaryFactoryInitialProperties(service = "fast_track", bookingId = 123, kwAuthToken = "mock")) {

    override fun getReactNativeHost(): ReactNativeHost = (activity?.application as PlaygroundApplication).reactNativeHost
}
