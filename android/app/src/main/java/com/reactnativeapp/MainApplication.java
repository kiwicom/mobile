package com.reactnativeapp;

import androidx.multidex.MultiDexApplication;

import com.airbnb.android.react.maps.MapsPackage;

import com.facebook.react.ReactApplication;

import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativecommunity.netinfo.NetInfoPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.PackageList;

import com.skypicker.reactnative.nativemodules.account.*;
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage;
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage;
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage;
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage;

import java.util.List;


public class MainApplication extends MultiDexApplication implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
    protected List<ReactPackage> getPackages() {
        @SuppressWarnings("UnnecessaryLocalVariable")
        List<ReactPackage> packages = new PackageList(this).getPackages();
        // Packages that cannot be autolinked yet can be added manually here, for example:
        packages.add(new RNCWebViewPackage());
        packages.add(new NetInfoPackage());
        packages.add(new AsyncStoragePackage());
        packages.add(new MapsPackage());
        packages.add(new RNDeviceInfoPackage());
        packages.add(new RNGestureHandlerPackage());

        packages.add(new RNLoggingPackage());
        packages.add(new RNTranslationManagerPackage());
        packages.add(new RNCurrencyManagerPackage());
        packages.add(new RNAccountManagerPackage());
        return packages;
      }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
