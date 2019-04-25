package com.kiwi.rnkiwimobile

import android.annotation.TargetApi
import android.os.Build
import android.os.Bundle
import android.support.v7.app.AppCompatActivity;
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.modules.core.PermissionAwareActivity
import com.facebook.react.modules.core.PermissionListener

abstract class RNKiwiActivity(private val initialProperties: Bundle?) :
  AppCompatActivity(),
  DefaultHardwareBackBtnHandler, PermissionAwareActivity {

  // region Private Properties

  private lateinit var mReactRootView: ReactRootView

  private lateinit var mReactInstanceManager: ReactInstanceManager

  private var mPermissionListener: PermissionListener? = null

  // endregion

  // region Public Methods

  override fun invokeDefaultOnBackPressed() {
    super.onBackPressed()
  }

  override fun onBackPressed() {
    mReactInstanceManager.onBackPressed()
  }

  // endregion

  // region Protected Abstract Methods

  protected abstract fun getReactNativeInstanceManager(): ReactInstanceManager

  protected abstract fun getModuleName(): String

  // endregion

  // region Activity

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    mReactInstanceManager = getReactNativeInstanceManager()

    mReactRootView = ReactRootView(this)
    mReactRootView.startReactApplication(mReactInstanceManager, getModuleName(), initialProperties)

    setContentView(mReactRootView)
  }

  override fun onPause() {
    super.onPause()
    mReactInstanceManager.onHostPause(this)
  }

  override fun onResume() {
    super.onResume()
    mReactInstanceManager.onHostResume(this, this)
  }

  override fun onDestroy() {
    super.onDestroy()
    mReactInstanceManager.onHostDestroy(this)
    mReactRootView.unmountReactApplication()
  }

  // endregion

  // region PermissionAwareActivity
  override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>, grantResults: IntArray) {
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
    if (mPermissionListener != null && mPermissionListener!!.onRequestPermissionsResult(requestCode, permissions, grantResults)) {
      mPermissionListener = null
    }
  }

  @TargetApi(Build.VERSION_CODES.M)
  override fun requestPermissions(permissions: Array<String>, requestCode: Int, listener: PermissionListener) {
    mPermissionListener = listener
    requestPermissions(permissions, requestCode)
  }
  // endregion
}
