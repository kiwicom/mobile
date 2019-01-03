package com.skypicker.reactnative.nativemodules.logging

import com.facebook.react.bridge.*
import com.trinerdis.skypicker.logging.event.model.*
import com.trinerdis.skypicker.logging.sender.*
import java.util.HashMap

class RNLoggingModule(reactContext: ReactApplicationContext, activeBooking: Boolean) :
        ReactContextBaseJavaModule(reactContext) {

    // region Public Types

    private object AncillaryTypeKey {
        const val HOTEL = "HOTEL"
    }

    private object AncillaryType {
        const val HOTEL = "hotel"
    }

    private object AncillaryStepKey {
        const val SEARCH_FORM = "ANCILLARY_STEP_SEARCH_FORM"
        const val RESULTS = "ANCILLARY_STEP_RESULTS"
        const val DETAILS = "ANCILLARY_STEP_DETAILS"
        const val PAYMENT = "ANCILLARY_STEP_PAYMENT"
    }

    private object AncillaryStep {
        const val SEARCH_FORM = "searchForm"
        const val RESULTS = "results"
        const val DETAILS = "details"
        const val PAYMENT = "payment"
    }

    private object Implementation {
        const val REACT = "react"
    }

    private object AncillaryProviderKey {
        const val BOOKINGCOM = "ANCILLARY_PROVIDER_BOOKINGCOM"
        const val STAY22 = "ANCILLARY_PROVIDER_STAY22"
    }

    private object AncillaryProvider {
        const val BOOKINGCOM = "booking.com"
        const val STAY22 = "stay22"
    }


    private object HotelsGalleryTypeKey {
        const val HOTEL = "HOTELS_GALLERY_TYPE_HOTEL"
        const val ROOM = "HOTELS_GALLERY_TYPE_ROOM"
    }

    private object HotelsGalleryType {
        const val HOTEL = "HOTEL"
        const val ROOM = "ROOM"
    }

    // endregion Public Types

    // region Private Constants

    private object Constants {
        const val TAG = "RNLoggingModule"
    }

    // endregion Private Constants

    // region Public Attributes

    private val hasActiveBooking = activeBooking

    // endregion Public Attributes

    // region Private Attributes

    private val eventSenders: EventSender = EventSender.getInstance()

    // endregion Private Attributes

    // region Public Methods

    override fun getName() = Constants.TAG

    override fun getConstants(): Map<String, Any>? {
        val constants = HashMap<String, Any>()
        constants[AncillaryStepKey.SEARCH_FORM] = AncillaryStep.SEARCH_FORM
        constants[AncillaryStepKey.RESULTS] = AncillaryStep.RESULTS
        constants[AncillaryStepKey.DETAILS] = AncillaryStep.DETAILS
        constants[AncillaryStepKey.PAYMENT] = AncillaryStep.PAYMENT
        constants[AncillaryTypeKey.HOTEL] = AncillaryType.HOTEL
        constants[AncillaryProviderKey.BOOKINGCOM] = AncillaryProvider.BOOKINGCOM
        constants[AncillaryProviderKey.STAY22] = AncillaryProvider.STAY22
        constants[HotelsGalleryTypeKey.HOTEL] = HotelsGalleryType.HOTEL
        constants[HotelsGalleryTypeKey.ROOM] = HotelsGalleryType.ROOM
        return constants
    }

    @ReactMethod
    fun ancillaryDisplayed(type: String, provider: String) {

        eventSenders.sendEvent(
                AncillaryDisplayed(type, provider, null, null, null, hasActiveBooking, Implementation.REACT)
        )
    }

    @ReactMethod
    fun ancillaryPurchased(type: String, provider: String) {
        eventSenders.sendEvent(
                AncillaryPurchased(type, provider, hasActiveBooking, Implementation.REACT)
        )
    }

    @ReactMethod
    fun hotelsResultsDisplayed(searchQuery: String?, params: String?)
    {
        eventSenders.sendEvent(
                HotelsResultsDisplayed(searchQuery, params)
        )
    }

    @ReactMethod
    fun hotelsSelectedFilterTag(filterTag: String) {
        eventSenders.sendEvent(
                HotelsFilterTagSet(filterTag)
        )
    }

    @ReactMethod
    fun hotelsDetailOpened() {
        eventSenders.sendEvent(
                HotelsDetailOpened()
        )
    }

    @ReactMethod
    fun hotelsDetailAbandoned() {
        eventSenders.sendEvent(
                HotelsDetailAbandoned()
        )
    }

    @ReactMethod
    fun hotelsDetailDescriptionExpanded() {
        eventSenders.sendEvent(
                HotelsDetailDescriptionExpanded()
        )
    }

    @ReactMethod
    fun hotelsDetailMapOpened() {
        eventSenders.sendEvent(
                HotelsDetailMapOpened()
        )
    }

    @ReactMethod
    fun hotelsDetailRoomSelected(hotelId: String, roomType: String) {
        eventSenders.sendEvent(
                HotelsDetailRoomSelected(hotelId, roomType)
        )
    }

    @ReactMethod
    fun hotelsGalleryOpened(type: String) {
        eventSenders.sendEvent(
                HotelsGalleryOpened(HotelsGalleryOpened.Type.valueOf(type))
        )
    }

    @ReactMethod
    fun hotelsBookNowPressed(hotelId: String, rooms: Int, guests: Int, price: Float, formattedPrice: String) {
        eventSenders.sendEvent(
                HotelsBookNowPressed(hotelId, rooms, guests, price, formattedPrice)
        )
    }

    // endregion Public Methods
}
