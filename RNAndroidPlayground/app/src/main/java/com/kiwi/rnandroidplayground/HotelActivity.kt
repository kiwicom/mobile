package com.kiwi.rnandroidplayground

import android.os.Bundle
import com.kiwi.rnkiwimobile.RNKiwiActivity


class HotelsActivity : RNKiwiActivity() {

  companion object {
    fun getViewModelClass(): Class<HotelsActivity> =
      HotelsActivity::class.java
  }

  // region overridden methods

  override fun getModuleName(): String {
    return "KiwiHotels"
  }

  override fun getJSEntryPoint(): String {
    return "app/hotels/index"
  }

  override fun getBookingComAffiliate(): String {
    return ""
  }

  override fun getFormatCurrency(amount: Double, currency: String): String {
    return amount.toString() + " " + currency
  }

  override fun getTranslation(key: String): String {
    return key
  }

  override fun isDualPane() = false

  override fun hasActiveBooking(): Boolean = false

  override fun getCurrencyCode(): String = "EUR"

  override fun getCountryCode(): String = "en"

  override fun getCoordinates(): Bundle = Bundle()
    .apply {
      putDouble("latitude", 59.9139)
      putDouble("longitude", 10.7522)
    }

  // endregion
}
