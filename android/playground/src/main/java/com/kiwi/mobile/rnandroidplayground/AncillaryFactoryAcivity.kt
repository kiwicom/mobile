package com.kiwi.mobile.rnandroidplayground

import android.annotation.TargetApi
import android.os.Build
import android.os.Bundle
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import com.facebook.react.modules.core.PermissionAwareActivity
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.modules.core.PermissionListener


class AncillaryFactoryAcivity : AppCompatActivity(), DefaultHardwareBackBtnHandler, PermissionAwareActivity {

    private var mPermissionListener: PermissionListener? = null

    companion object {
        fun getViewModelClass(): Class<AncillaryFactoryAcivity> =
                AncillaryFactoryAcivity::class.java
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_fragment)

        if (savedInstanceState == null) {
            addFragment()
        }
    }

    private fun addFragment() {
        val fragmentManager = getSupportFragmentManager()
        fragmentManager.beginTransaction().add(R.id.container_main, AncillaryFactoryFragment()).commit()
    }

    // region BackButton
    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }

    override fun onBackPressed() {
        (application as PlaygroundApplication).reactNativeHost.reactInstanceManager.onBackPressed()
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