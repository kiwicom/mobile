## Deploy rnkiwimobile and dependencies

GitlabCI will take care of this anytime we merge something to `master`. It will skip it if the version(s) has not changed in the [.build/package.json](.build/package.json#L3).

If we want to trigger it manually, we can do so from the root of this repo:

```bash
ANDROID_DEPLOYMENT_PASSWORD=PASSWORD_HERE yarn release-android
```

### Deploy dependencies manually

TODO