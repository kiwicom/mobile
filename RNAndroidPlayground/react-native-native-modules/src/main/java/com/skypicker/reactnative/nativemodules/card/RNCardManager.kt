package com.skypicker.reactnative.nativemodules.card

import android.content.Context
import com.facebook.react.bridge.*
import com.google.gson.Gson

class RNCardManager(
  reactContext: ReactApplicationContext
) :
  ReactContextBaseJavaModule(reactContext) {

  companion object {
    const val PREF_KEY = "PREFS_SAVED_CARD"
  }

  private object Constant {
    const val TAG = "RNCardManager"
  }

  override fun getName(): String = Constant.TAG

  @ReactMethod
  fun getCard(promise: Promise) {
    // Mock implementation
    val prefs = reactApplicationContext.getSharedPreferences("prefs", Context.MODE_PRIVATE)
    val cardString = prefs.getString(PREF_KEY, null)

    val gson = Gson()
    val card = if (cardString != null) gson.fromJson(cardString, Card::class.java) else null

    if (card != null) {
      val map = Arguments.createMap()
      map.putString("number", card.number)
      map.putInt("month", card.expireMonth)
      map.putInt("year", card.expireYear)
      map.putString("cardholder", card.cardholder)
      promise.resolve(map)
      return
    }

    promise.resolve(null)
  }

  @ReactMethod
  fun saveCard(card: Card) {
    // Mock implementation
    val gson = Gson()
    val json = gson.toJson(card)
    val prefs = reactApplicationContext.getSharedPreferences("prefs", Context.MODE_PRIVATE)

    prefs.edit().putString(PREF_KEY, json).apply()
  }
}
