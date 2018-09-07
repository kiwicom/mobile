package com.kiwi.rnandroidplayground

import android.content.pm.ActivityInfo
import android.os.Bundle
import com.kiwi.rnkiwimobile.RNHotelsActivity

class NewHotelActivity : RNHotelsActivity(HotelsModulesInjection) {
    companion object {
        fun getViewModelClass(): Class<NewHotelActivity> =
                NewHotelActivity::class.java
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        requestedOrientation = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT
    }

    // Everything is like "KiwiHotels" so we cna just override the moduel name
    override fun getModuleName(): String {
        return "NewKiwiHotels"
    }

    override fun getInitialProperties(): Bundle? {
        return Bundle().apply{
            putString("language", "en")
            putString("currency", "EUR")
            putString("bookingComAffiliate", "")
            putString("checkin", "2018-12-01")
            putString("checkout", "2018-12-05")
            putString("cityName", "Barcelona")
            putString("cityId", "aG90ZWxDaXR5Oi0zNzI0OTA")
            putBundle("roomsConfiguration", Bundle()
                    .apply {
                        putInt("adultsCount", 1)
                    })
            putBundle("coordinates", Bundle()
                    .apply {
                        putDouble("latitude", 59.9139)
                        putDouble("longitude", 10.7522)
                    })
        }
    }
}
