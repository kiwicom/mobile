# Android distribution

## Deploy rnkiwimobile

1. Generate JS/assets files from the root of this repo:

```bash
./scripts/buildAndroidJavascript.sh
```

2. Change `rnKiwiMobileVersion` in `dependencies.gradle`

3. Manual deployment `rnkiwimobile` SNAPSHOT:

```bash
cd rnkiwimobile
ANDROID_DEPLOYMENT_PASSWORD={replaceForPassword} gradle uploadArchives
``` 

## Usage in real app

```
implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```

## Test app

You can run the `app` using Android Studio. You can use `rnkiwimobile` from SNAPSHOT or use:

```bash
implementation project(':rnkiwimobile')
```

If you used the latest, you can run the packager from the root of this repo:

```bash
yarn start
```
Then, you can make changes in both the library and the JS code and test it in the example app.