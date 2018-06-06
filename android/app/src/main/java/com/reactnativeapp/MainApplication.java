package com.reactnativeapp;

import android.app.Application;
import android.support.multidex.MultiDexApplication;

import com.facebook.react.ReactApplication;
import cl.json.RNSharePackage;
import org.wonday.pdf.RCTPdfView;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.reactlibrary.RNTooltipsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.trinerdis.skypicker.colors.RNColorsPackage;
import com.trinerdis.skypicker.currency.RNCurrencyManagerPackage;
import com.trinerdis.skypicker.device.RNDeviceInfoPackage;
import com.trinerdis.skypicker.logging.RNLoggingPackage;
import com.trinerdis.skypicker.translation.*;

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
                    new RNSharePackage(),
                    new RCTPdfView(),
                    new RNFetchBlobPackage(),
                    new RNTooltipsPackage(),
                    new VectorIconsPackage(),
                    new MapsPackage(),
                    new RNLoggingPackage(),
                    new RNTranslationManagerPackage(),
                    new RNColorsPackage(),
                    new RNCurrencyManagerPackage(),
                    new RNDeviceInfoPackage()
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
