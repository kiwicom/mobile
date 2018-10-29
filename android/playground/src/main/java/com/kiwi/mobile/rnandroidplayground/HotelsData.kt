package com.kiwi.mobile.rnandroidplayground

import android.util.Log
import com.kiwi.rnkiwimobile.hotels.RNHotelsCoordinates
import com.kiwi.rnkiwimobile.hotels.RNHotelsInitialProperties
import com.kiwi.rnkiwimobile.hotels.RNHotelsRoomsChildrenConfiguration
import com.kiwi.rnkiwimobile.hotels.RNHotelsRoomsConfiguration
import java.text.SimpleDateFormat
import java.util.*

object HotelsData {
  fun getInitialProperties(): RNHotelsInitialProperties {
    val checkIn = Calendar.getInstance()
    checkIn.add(Calendar.DATE, 12)

    val checkOut = Calendar.getInstance()
    checkOut.add(Calendar.DATE, 14)

    val simpleDateFormat = SimpleDateFormat("YYYY-MM-dd", Locale.US)

    Log.d("HotelsData", simpleDateFormat.format(checkIn.time) + " " + simpleDateFormat.format(checkOut.time))

    return RNHotelsInitialProperties(
        language = "en",
        currency = "EUR",
        checkin = simpleDateFormat.format(checkIn.time),
        checkout = simpleDateFormat.format(checkOut.time),
        cityName = "Barcelona",
        cityId = "aG90ZWxDaXR5Oi0zNzI0OTA",
        roomsConfiguration = ArrayList(listOf(RNHotelsRoomsConfiguration(
            adultsCount = 1,
            children = arrayListOf(RNHotelsRoomsChildrenConfiguration(age = 2))
        ))),
        hotelsCoordinates = RNHotelsCoordinates(
            59.9139,
            10.7522
        )
    )
  }
}