package com.kiwi.mynativemodule;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class MyNativeModule extends ReactContextBaseJavaModule {
    private ReactApplicationContext reactContext;

    public MyNativeModule(ReactApplicationContext reactContext) {

        super(reactContext);

        this.reactContext = reactContext;
    }

    // This makes it callable from Javascript like NativeModules.MyNativeModuleManager
    @Override
    public String getName() {
        return "MyNativeModuleManager";
    }

    @ReactMethod
    public void communicate(String firstString, String secondString, int number, Callback callback) {
        System.out.println("Testing - " + firstString + " - " + secondString + " - " + number);


        this.reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("EventReminder", "This is java code letting you know that I will reply to your callback in a tick");

        callback.invoke("this is java code sending you a callback, you sendt firstString = " + firstString + ", secondString = " + secondString + ", number = " + number);
    }
}