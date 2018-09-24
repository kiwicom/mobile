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

import com.facebook.react.*
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

  private var mReactRootView: ReactRootView? = null

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
    mReactRootView = ReactRootView(activity) // TODO check context thing here
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
//        if (mReactRootView != null) {
//            mReactRootView!!.unmountReactApplication()
//            mReactRootView = null
//        }
    // TODO check where to do this
    if (nReactNativeHost.hasInstance()) {
//            val reactInstanceMgr = nReactNativeHost.reactInstanceManager
//
//            // onDestroy may be called on a ReactFragment after another ReactFragment has been
//            // created and resumed with the same React Instance Manager. Make sure we only clean up
//            // host's React Instance Manager if no other React Fragment is actively using it.
//            if (reactInstanceMgr.lifecycleState != LifecycleState.RESUMED) {
//                reactInstanceMgr.onHostDestroy(activity)
//                nReactNativeHost.clear()
//            }
      nReactNativeHost.reactInstanceManager.onHostDestroy(activity!!)
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