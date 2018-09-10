# Android distribution

## Documentation

See [docs](RNAndroidPlayground/docs) folder.

## Test playground app

You can run the `app` using Android Studio. In `app/build.gradle` you need to replace the `SNAPSHOT` for local the library:

```bash
implementation project(':rnkiwimobile')
// implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```

Then you can run the packager from the root of this repo:

```bash
yarn start
```

Finally, you can make changes in both the library and the JS code and test it in the example app.

## Usage in real app

```
implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```
