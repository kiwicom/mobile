package com.skypicker.reactnative.nativemodules.device

import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import java.util.*

class RNDeviceInfoManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  private val currentLanguage: String
    get() {
      val current = reactApplicationContext.resources.configuration.locale
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
        return current.toLanguageTag()
      } else {
        val builder = StringBuilder()
        builder.append(current.language)
        if (current.country != null) {
          builder.append("-")
          builder.append(current.country)
        }
        return builder.toString()
      }
    }

  override fun getName(): String {
    return "RNDeviceInfo"
  }

  override fun getConstants(): Map<String, Any>? {
    val constants = HashMap<String, Any>()
    constants["Locale"] = currentLanguage
    return constants
  }
}
