package com.reactnativeapp;

import android.os.Bundle;

import com.facebook.FacebookSdk;
import com.facebook.react.ReactActivity;
import com.trinerdis.skypicker.logging.configuration.DeviceInfo;
import com.trinerdis.skypicker.logging.sender.EventSender;
import io.reactivex.subjects.BehaviorSubject;

import java.util.ArrayList;
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

        String visitorId = UUID.randomUUID().toString();
        String affilsId = "react_native";
        DeviceInfo deviceInfo = new DeviceInfo();

        EventSender.defaultInitialize(
                getApplication(),
                deviceInfo,
                BehaviorSubject.create(),
                new String[]{},
                visitorId,
                affilsId,
                "123456",
                new ArrayList<>(),
                BuildConfig.DEBUG,
                BuildConfig.DEBUG,
                null
        );
    }
}
