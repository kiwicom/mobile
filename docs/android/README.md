# rnkiwimobile - Android distribution

The source code can be found in [rnkiwimobile](../../android/rnkiwimobile). This library contains everything that the 
Android Kiwi native app needs in order to run React Native including the JavaScript code.

## Test playground app

First make sure you have a valid [personal Gitlab token](https://gitlab.skypicker.com/profile/personal_access_tokens)
and set it as your environment variable:

```bash
export RNKIWIMOBILE_DEPLOYMENT_TOKEN="YOUR_TOKEN_HERE"
```

### Debug

In debug mode, you will be running a local copy of `rnkiwimobile`. 
Furthermore, the packager will be used so you can reload your JavaScript instantly. 

You can run the playground app using:

```bash
yarn android --appFolder playground
```

Or if you prefer you can run if from Android Studio:

![](../assets/android-playground.png)


**Important**: The packager will only be used if there is no bundle in `.build/android`, if there is,
you can safely delete the whole directory.

### Setting up CodePush keys

In order to run the app in `stagingRelease` mode or in `release` mode, we need to set up CodePush keys. If you didn't 
download the CLI and log in to CodePush and make sure to [set it up](../common/code-push.md). After that, you can get
the keys by running:

```bash
appcenter codepush deployment list -a Kiwicom/mobile-android
```

You need to create a file named `codepush.properties` inside [playground](../../android/playground):

```bash
STAGING_KEY=""
PRODUCTION=KEY=""
```

#### Staging

If you set up the STAGING_KEY from previous step, you can just run:

```bash
yarn android --appFolder playground --variant stagingRelease
```

#### Production

In `release` mode, the `playground` is going to use `rnkiwimobile` from [Trinerdis](http://trinerdis.cz:8000/repository/snapshots/com/trinerdis/skypicker/rnkiwimobile/). The version is defined [here](../../.build/package.json#L3).
It will also you the `Production` version of CodePush. 
You do not need the packager running. This is the real version that the native app wil be consuming.

You can run it using:

```bash
yarn android --appFolder playground --variant release
```

Or if you prefer you can run if from Android Studio. We need to change Build Variants to `release` for `playground` (this will force release mode on its dependencies):

<img src="../assets/android-release-variant.png" width="500">

## Usage in a real app

```
implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```
