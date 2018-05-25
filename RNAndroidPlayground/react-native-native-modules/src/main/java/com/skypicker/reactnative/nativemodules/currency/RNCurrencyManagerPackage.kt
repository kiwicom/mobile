package com.skypicker.reactnative.nativemodules.currency

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.text.NumberFormat
import java.util.*

class RNCurrencyManagerPackage(private val listener: CurrencyChangeCallback = createDefault())
  : ReactPackage {

  // region Static Types

  private companion object {
    fun createDefault() = object : CurrencyChangeCallback {
      override fun getFormatCurrency(amount: Double, currency: String): String {
        val numberFormat = NumberFormat.getCurrencyInstance()
        numberFormat.currency = Currency.getInstance(currency)

        return numberFormat.format(amount)
      }
    }
  }

  // endregion Static types

  // region Public Methods

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }

  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val modules = ArrayList<NativeModule>()

    modules.add(RNCurrencyManager(reactContext, listener))

    return modules
  }

  // endregion Public Methods
}
