package com.kiwi.rnkiwimobile

/*
 * Based on https://github.com/hudl/react-native-android-fragment
 * Apache License 2.0
 * Copyright 2017 Agile Sports Technologies, Inc.
 */

import android.app.Fragment
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactRootView
import com.facebook.react.devsupport.DoubleTapReloadRecognizer
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

/**
 * A [Fragment] which loads a React Native Component from your React Native JS Bundle.
 */
abstract class RNKiwiFragment(private val initialProperties: Bundle?) : Fragment() {


  protected abstract fun getModuleName(): String

  protected abstract fun getReactNativeHost(): ReactNativeHost

  private lateinit var mReactRootView: ReactRootView

  private lateinit var nReactNativeHost: ReactNativeHost

  private var mDoubleTapReloadRecognizer: DoubleTapReloadRecognizer? = null

  // endregion

  // region Lifecycle

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    nReactNativeHost = getReactNativeHost()
    mDoubleTapReloadRecognizer = DoubleTapReloadRecognizer()
  }

  override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
    mReactRootView = ReactRootView(activity)
    mReactRootView.startReactApplication(
        nReactNativeHost.reactInstanceManager,
        getModuleName(),
        initialProperties)
    return mReactRootView
  }

  override fun onResume() {
    super.onResume()
    if (nReactNativeHost.hasInstance()) {
      nReactNativeHost.reactInstanceManager.onHostResume(activity, activity as DefaultHardwareBackBtnHandler?)
    }
  }

  override fun onPause() {
    super.onPause()
    if (nReactNativeHost.hasInstance()) {
      nReactNativeHost.reactInstanceManager.onHostPause(activity!!)
    }
  }

  override fun onDestroy() {
    super.onDestroy()
    if (nReactNativeHost.hasInstance()) {
      nReactNativeHost.reactInstanceManager.onHostDestroy(activity!!)
      mReactRootView.unmountReactApplication()
    }
  }

  // endregion
}