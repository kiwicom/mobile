# rnkiwimobile - Android distribution

The source code can be found in [RNAndroidPlayground](../../RNAndroidPlayground).

## Test playground app

You can run the `app` using Android Studio. In `app/build.gradle` you need to replace the `SNAPSHOT` version of the library for the local one:

```bash
implementation project(':rnkiwimobile')
// implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```

Then you can run the packager from the root of this repo:

```bash
yarn start
```

**Important**: The packager will only be used if there is no bundle in `.build/android`, if there is, you can safetly delete the whole android directory.

Finally, you can make changes in both the library and the JS code and test it in the example `/app`.

## Usage in a real app

```
implementation "com.trinerdis.skypicker:rnkiwimobile:$rnKiwiMobileVersion-SNAPSHOT"
```
