package com.skypicker.reactnative.nativemodules.card

import com.facebook.react.bridge.*

class RNCardManager(
  reactContext: ReactApplicationContext,
  listener: CardCallback
) :
  ReactContextBaseJavaModule(reactContext) {

  private object Constant {
    const val TAG = "RNCardManager"
  }

  private val cardListener = listener

  override fun getName(): String = Constant.TAG

  @ReactMethod
  fun getCard(promise: Promise) {
    val card = cardListener.getCard()
    if (card != null) {
      val map = Arguments.createMap()
      map.putString("number", card.number)
      map.putString("expiryMonth", card.expiryMonth)
      map.putString("expiryYear", card.expiryYear)
      map.putString("cardholder", card.cardholder)
      promise.resolve(map)
      return
    }
    promise.resolve(null)
  }

  @ReactMethod
  fun saveCard(map: ReadableMap) {
    // Mock implementation
    val card = Card()
    card.number = map.getString("number")
    card.expiryMonth = map.getString("expiryMonth")
    card.expiryYear = map.getString("expiryYear")
    card.cardholder = map.getString("cardholder")

    cardListener.saveCard(card)
  }
}
