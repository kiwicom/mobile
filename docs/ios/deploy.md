# Deploy

## Deploy automatically

Every merge to `master` branch will provide a new release and upload the `.framework` into github releases.

To check current releases [click here](https://github.com/kiwicom/mobile/releases)

If we want to trigger it manually, we can do so from the root of this repo:

```bash
yarn release-ios
```

## Deploy manually

There is also a possibility to build framework locally running the command from the root:

```bash
scripts/buildIOSFramework.sh
```

and then try it on machine without releasing.
