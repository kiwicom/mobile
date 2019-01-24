package com.reactnativeapp;

import android.support.multidex.MultiDexApplication;

import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactlibrary.RNTooltipsPackage;
import com.skypicker.reactnative.nativemodules.card.RNCardManagerPackage;
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage;
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage;
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage;
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends MultiDexApplication implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new RNTooltipsPackage(),
                    new MapsPackage(),
                    new RNLoggingPackage(),
                    new RNTranslationManagerPackage(),
                    new RNCurrencyManagerPackage(),
                    new RNDeviceInfoPackage(),
                    new RNCardManagerPackage(),
                    new RNGestureHandlerPackage()
            );
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
