package com.kiwi.rnkiwimobile.account

import android.os.Bundle
import com.facebook.react.ReactPackage
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

object RNAccountModule {
    const val jsEntryPoint = "app/native.js"
    const val moduleName = "AccountSettings"

    fun getPackages(): MutableList<ReactPackage> {
        return mutableListOf(RNGestureHandlerPackage())
    }

    fun getInitialProperties(initialProperties: RNAccountInitialProperties): Bundle? {
        return Bundle().apply{
            putString("token", initialProperties.token)
        }
    }
}