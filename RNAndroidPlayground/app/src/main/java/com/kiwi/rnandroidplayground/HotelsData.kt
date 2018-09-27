package com.kiwi.rnandroidplayground

import com.kiwi.rnkiwimobile.hotels.RNHotelsCoordinates
import com.kiwi.rnkiwimobile.hotels.RNHotelsInitialProperties
import com.kiwi.rnkiwimobile.hotels.RNHotelsRoomsConfiguration

object HotelsData {
  fun getInitialProperties(): RNHotelsInitialProperties {
    return RNHotelsInitialProperties(
        "en",
        "2018-12-01",
        "2018-12-25",
        "2018-12-20",
        "2018-12-25",
        "Barcelona",
        "aG90ZWxDaXR5Oi0zNzI0OTA",
        RNHotelsRoomsConfiguration(
            1
        ),
        RNHotelsCoordinates(
            59.9139,
            10.7522
        )
    )
  }
}