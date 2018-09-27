package com.kiwi.rnkiwimobile.hotels

data class RNHotelsInitialProperties(
    val language: String,
    val currency: String,
    val bookingComAffiliate: String,
    val checkin: String,
    val checkout: String,
    val cityName: String,
    val cityId: String,
    val roomsConfiguration: RNHotelsRoomsConfiguration,
    val hotelsCoordinates: RNHotelsCoordinates
)

data class RNHotelsRoomsConfiguration(
    val adultsCount: Int
)

data class RNHotelsCoordinates(
    val latitude: Double,
    val longitude: Double
)