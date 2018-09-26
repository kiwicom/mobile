package com.kiwi.rnkiwimobile

/*
 * Based on https://github.com/hudl/react-native-android-fragment
 * Apache License 2.0
 * Copyright 2017 Agile Sports Technologies, Inc.
 */

import android.annotation.TargetApi
import android.app.Fragment
import android.os.Build
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactRootView
import com.facebook.react.devsupport.DoubleTapReloadRecognizer
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.PermissionListener

/**
 * A [Fragment] which loads a React Native Component from your React Native JS Bundle.
 */
abstract class RNKiwiFragment : Fragment(), PermissionAwareActivity {


  protected abstract fun getModuleName(): String

  protected abstract fun getReactNativeHost(): ReactNativeHost

  protected abstract fun getInitialProperties(): Bundle?

  private lateinit var mReactRootView: ReactRootView

  private lateinit var nReactNativeHost: ReactNativeHost

  private var mDoubleTapReloadRecognizer: DoubleTapReloadRecognizer? = null

  private var mPermissionListener: PermissionListener? = null

  // endregion

  // region Lifecycle

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    nReactNativeHost = getReactNativeHost()
    mDoubleTapReloadRecognizer = DoubleTapReloadRecognizer()
  }

  override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
    mReactRootView = ReactRootView(activity)
    mReactRootView!!.startReactApplication(
        nReactNativeHost.reactInstanceManager,
        getModuleName(),
        getInitialProperties())
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

  override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    if (mPermissionListener != null && mPermissionListener!!.onRequestPermissionsResult(requestCode, permissions, grantResults)) {
      mPermissionListener = null
    }
  }

  // region PermissionAwareActivity

  override fun checkPermission(permission: String, pid: Int, uid: Int): Int {
    return activity!!.checkPermission(permission, pid, uid)
  }

  @TargetApi(Build.VERSION_CODES.M)
  override fun checkSelfPermission(permission: String): Int {
    return activity!!.checkSelfPermission(permission)
  }

  @TargetApi(Build.VERSION_CODES.M)
  override fun requestPermissions(permissions: Array<String>, requestCode: Int, listener: PermissionListener) {
    mPermissionListener = listener
    requestPermissions(permissions, requestCode)
  }

  // endregion

  // region Helpers

  /**
   * Helper to forward hardware back presses to our React Native Host
   */
  // TODO check how to do this nicer
  fun onBackPressed() {
    if (nReactNativeHost.hasInstance()) {
      nReactNativeHost.reactInstanceManager.onBackPressed()
    }
  }
}