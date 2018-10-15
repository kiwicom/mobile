package com.kiwi.rnkiwimobile

import android.app.Application
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.common.LifecycleState
import com.facebook.react.shell.MainReactPackage
import com.microsoft.codepush.react.CodePush
import com.trinerdis.skypicker.nkiwimobile.BuildConfig

class RNKiwiHost(private val hostApplication: Application, private val jsEntryPoint: String, private val customPackages: MutableList<ReactPackage>) : ReactNativeHost(hostApplication) {

  override fun getPackages(): MutableList<ReactPackage> {
    val packages = mutableListOf(
        MainReactPackage(),
        RNKiwiBackButtonPackage(),
        CodePush(BuildConfig.CODEPUSH_KEY, hostApplication, BuildConfig.DEBUG)
    )

    packages.addAll(customPackages)
    return packages
  }

  override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

  override fun createReactInstanceManager(): ReactInstanceManager {
    return ReactInstanceManager.builder()
        .setApplication(hostApplication)
        .setBundleAssetName("index.android.bundle")
        .addPackages(packages)
        .setJSMainModulePath(jsEntryPoint)
        .setJSBundleFile(CodePush.getJSBundleFile())
        .setUseDeveloperSupport(BuildConfig.DEBUG)
        .setInitialLifecycleState(LifecycleState.BEFORE_RESUME)
        .build()
  }
}
