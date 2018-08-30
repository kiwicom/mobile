package com.reactnativeapp;

import android.support.multidex.MultiDexApplication;

import com.RNFetchBlob.RNFetchBlobPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactlibrary.RNTooltipsPackage;
import com.skypicker.reactnative.nativemodules.card.RNCardManagerPackage;
import com.skypicker.reactnative.nativemodules.currency.RNCurrencyManagerPackage;
import com.skypicker.reactnative.nativemodules.device.RNDeviceInfoPackage;
import com.skypicker.reactnative.nativemodules.logging.RNLoggingPackage;
import com.skypicker.reactnative.nativemodules.translation.RNTranslationManagerPackage;

import org.wonday.pdf.RCTPdfView;

import java.util.Arrays;
import java.util.List;

import cl.json.RNSharePackage;
import cl.json.ShareApplication;

public class MainApplication extends MultiDexApplication implements ShareApplication, ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new RNSharePackage(),
                    new RCTPdfView(),
                    new RNFetchBlobPackage(),
                    new RNTooltipsPackage(),
                    new VectorIconsPackage(),
                    new MapsPackage(),
                    new RNLoggingPackage(),
                    new RNTranslationManagerPackage(),
                    new RNCurrencyManagerPackage(),
                    new RNDeviceInfoPackage(),
                    new RNCardManagerPackage()
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

    @Override
    public String getFileProviderAuthority() {
        return "com.reactnativeapp.provider";
    }
}
