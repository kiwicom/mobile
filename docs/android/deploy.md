## Deploy rnkiwimobile and native dependencies

GitlabCI will take care of this anytime we merge something to `master`. 

1. It will check if a new version of a native dependency needs to be deployed into Trinerdis or skip it otherwise if the version has not changed in the [.build/package.json](../../.build/package.json#L8-L10). 
2. It will deploy `rnkiwimobile` with the same version number (and new JS code) or a new one if we bump the [global version](../../.build/package.json#L3)

If we want to trigger all this process manually, we can do so from the root of this repo:

```bash
ANDROID_DEPLOYMENT_PASSWORD=PASSWORD_HERE yarn release-android
```
