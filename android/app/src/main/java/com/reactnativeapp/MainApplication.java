package com.reactnativeapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.kiwi.mynativemodule.MyNativeModulePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.trinerdis.skypicker.logging.RNLoggingPackage;
import com.trinerdis.skypicker.translation.*;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication, ResourceStringCallback {

    RNTranslationManagerPackage translationPackage = new RNTranslationManagerPackage(this);
    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
                    new VectorIconsPackage(),
                    new MapsPackage(),
                    new RNLoggingPackage(),
                    translationPackage,
                    new MyNativeModulePackage()
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

    @NotNull
    @Override
    public String getTranslation(@NotNull String key) {
        return key;
    }
}
