package com.reactnativeapp;

import android.os.Bundle;
import android.preference.*;
import com.facebook.FacebookSdk;
import com.facebook.react.ReactActivity;
import com.trinerdis.skypicker.logging.configuration.*;
import com.trinerdis.skypicker.logging.sender.EventSender;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import java.util.ArrayList;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
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

        DeviceInfo deviceInfo = new DeviceInfo();
        UserInfo userInfo = new UserInfo();

        EventSender.defaultInitialize(
      getApplication(), deviceInfo, userInfo, new String[] {}, new ArrayList<>(), BuildConfig.DEBUG,
      BuildConfig.DEBUG, BuildConfig.DEBUG, null
    );
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
