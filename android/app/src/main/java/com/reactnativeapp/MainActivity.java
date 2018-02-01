package com.reactnativeapp;

import android.os.Bundle;

import com.facebook.FacebookSdk;
import com.facebook.react.ReactActivity;
import com.trinerdis.skypicker.logging.configuration.Configuration;
import com.trinerdis.skypicker.logging.event.model.AppConfig;
import com.trinerdis.skypicker.logging.sender.AppsFlyerEventSender;
import com.trinerdis.skypicker.logging.sender.CommonExponeaEventSender;
import com.trinerdis.skypicker.logging.sender.EventSender;
import com.trinerdis.skypicker.logging.sender.FacebookEventSender;
import com.trinerdis.skypicker.logging.sender.LogmoleEventSender;
import com.trinerdis.skypicker.logging.sender.MobileExponeaEventSender;

import java.util.UUID;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "reactNativeApp";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setupEventSender();
    }

    private void setupEventSender() {

        FacebookSdk.sdkInitialize(getApplicationContext());

        Configuration configuration = Configuration.getConfiguration(this);
        String visitorId = UUID.randomUUID().toString();
        AppConfig appConfig = new AppConfig(false, "0.1", 1);

        AppsFlyerEventSender appsFlyerEventSender = new AppsFlyerEventSender(
                getApplication(), configuration, BuildConfig.DEBUG, visitorId
        );

        CommonExponeaEventSender commonExponeaEventSender = new CommonExponeaEventSender(
                this, appConfig, new String[0], configuration, BuildConfig.DEBUG
        );

        MobileExponeaEventSender mobileExponeaEventSender = new MobileExponeaEventSender(
                this, appConfig, new String[0], configuration, BuildConfig.DEBUG
        );

        FacebookEventSender facebookEventSender = new FacebookEventSender(
                this, configuration, appConfig, BuildConfig.DEBUG
        );

        LogmoleEventSender logmoleEventSender = new LogmoleEventSender(
                this, appConfig, configuration, BuildConfig.DEBUG
        );

        EventSender eventSender = EventSender.getInstance();
        eventSender.addEventSender(appsFlyerEventSender);
        eventSender.addEventSender(commonExponeaEventSender);
        eventSender.addEventSender(mobileExponeaEventSender);
        eventSender.addEventSender(facebookEventSender);
        eventSender.addEventSender(logmoleEventSender);
    }
}
