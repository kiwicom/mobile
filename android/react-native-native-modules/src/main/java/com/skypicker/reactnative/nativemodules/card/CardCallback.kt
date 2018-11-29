package com.skypicker.reactnative.nativemodules.card

interface CardCallback {
    fun getCard(): Card?
    fun saveCard(card: Card)
}