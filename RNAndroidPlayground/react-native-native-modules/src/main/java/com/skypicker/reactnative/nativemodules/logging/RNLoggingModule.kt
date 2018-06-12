package com.skypicker.reactnative.nativemodules.logging

import com.facebook.react.bridge.*
import com.trinerdis.skypicker.logging.event.model.*
import com.trinerdis.skypicker.logging.sender.*
import java.util.HashMap

class RNLoggingModule(reactContext: ReactApplicationContext, activeBooking: Boolean):
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
    return constants
  }

  @ReactMethod
  fun ancillaryDisplayed(type: String) {

    eventSenders.sendEvent(
      AncillaryDisplayed(type, null, null, null, null, hasActiveBooking, Implementation.REACT)
    )
  }

  @ReactMethod
  fun ancillaryPurchased(type: String) {
    eventSenders.sendEvent(
      AncillaryPurchased(type, null, hasActiveBooking, Implementation.REACT)
    )
  }

  // endregion Public Methods
}
