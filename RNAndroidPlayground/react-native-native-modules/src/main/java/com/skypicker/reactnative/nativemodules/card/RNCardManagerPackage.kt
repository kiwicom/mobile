package com.skypicker.reactnative.nativemodules.card

import android.content.Context
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.*
import com.facebook.react.uimanager.ViewManager
import com.google.gson.Gson
import java.util.*

class RNCardManagerPackage(private val listener: CardCallback? = null) : ReactPackage {

  private fun createMock(reactContext: ReactApplicationContext) = object : CardCallback {
    val PREF_KEY = "PREFS_SAVED_CARD"

    override fun getCard(): Card? {
      // Mock implementation
      val prefs = reactContext.getSharedPreferences("prefs", Context.MODE_PRIVATE)
      val cardString = prefs.getString(PREF_KEY, null)

      val gson = Gson()
      val card = if (cardString != null) gson.fromJson(cardString, Card::class.java) else null

      if (card != null) {
        return card
      }

      return null
    }

    override fun saveCard(card: Card) {
      // Mock implementation
      val gson = Gson()
      val json = gson.toJson(card)
      val prefs = reactContext.getSharedPreferences("prefs", Context.MODE_PRIVATE)

      prefs.edit().putString(PREF_KEY, json).apply()
    }
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return emptyList()
  }

  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    val modules = ArrayList<NativeModule>()
    modules.add(RNCardManager(reactContext, listener ?: createMock(reactContext)))
    return modules
  }
}
