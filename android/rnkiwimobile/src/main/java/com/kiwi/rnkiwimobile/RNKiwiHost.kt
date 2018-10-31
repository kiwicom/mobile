package com.kiwi.rnkiwimobile

import android.app.Application
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.common.LifecycleState
import com.facebook.react.shell.MainReactPackage
import com.kiwi.rnkiwimobile.hotels.RNHotelsModule.jsEntryPoint
import com.microsoft.codepush.react.CodePush
import com.trinerdis.skypicker.nkiwimobile.BuildConfig

data class RNKiwHostArgs(
    val hostApplication: Application,
    val jsEntryPoint: String,
    val customPackages: MutableList<ReactPackage>,
    val codePushKey: String,
    val codePushVersion: String
)

class RNKiwiHost(private val args: RNKiwHostArgs) : ReactNativeHost(args.hostApplication) {

  override fun getPackages(): MutableList<ReactPackage> {
    CodePush.overrideAppVersion(args.codePushVersion)

    val packages = mutableListOf(
        MainReactPackage(),
        RNKiwiBackButtonPackage(),
        CodePush(args.codePushKey, args.hostApplication, BuildConfig.DEBUG)
    )

    packages.addAll(args.customPackages)
    return packages
  }

  override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

  override fun createReactInstanceManager(): ReactInstanceManager {
    return ReactInstanceManager.builder()
        .setApplication(args.hostApplication)
        .setBundleAssetName("index.android.bundle")
        .addPackages(packages)
        .setJSMainModulePath(jsEntryPoint)
        .setJSBundleFile(CodePush.getJSBundleFile())
        .setUseDeveloperSupport(BuildConfig.DEBUG)
        .setInitialLifecycleState(LifecycleState.BEFORE_RESUME)
        .build()
  }
}
