[![Build Status](https://travis-ci.org/mrtnzlml/native.svg?branch=master)](https://travis-ci.org/mrtnzlml/native)
[![Greenkeeper badge](https://badges.greenkeeper.io/mrtnzlml/native.svg)](https://greenkeeper.io/)

## Known issues

- `PaginationContainer` fails for zero results returned: https://github.com/facebook/relay/issues/1852
- Relay swallows all GraphQL errors in `QueryRenderer`: https://github.com/facebook/relay/issues/1913
- Jest code coverage (Instanbul) doesn't work with Facebook IDX: https://github.com/facebookincubator/idx/issues/19

## Table of Contents

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

* [Project structure](#project-structure)
* [Updating to New Releases](#updating-to-new-releases)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn test](#yarn-test)
  * [yarn run ios](#yarn-run-ios)
  * [yarn run android](#yarn-run-android)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

## Project structure

```
.
├── app
│   ├── assets                  - static assets (icons)
│   ├── components
│   │   ├── functional
│   │   └── visual
│   ├── config                  - application configutations
│   ├── screens                 - individual application screens
│   │   ├── homepage
│   │   ├── search
│   │   └── index.js            - navigation and screens definition
│   ├── scripts
│   │   ├── deploy.sh
│   │   └── test.sh             - test script for CI
│   ├── src
│   ├── types                   - only Flow types
│   └── schema.graphql          - GraphQL API schema
├── App.js                      - bootstrap component
└── app.json                    - application settings for Expo
```

## Updating to New Releases

You should only need to update the global installation of `create-react-native-app` very rarely, ideally never.

Updating the `react-native-scripts` dependency of your app should be as simple as bumping the version number in `package.json` and reinstalling your project's dependencies.

Upgrading to a new version of React Native requires updating the `react-native`, `react`, and `expo` package versions, and setting the correct `sdkVersion` in `app.json`. See the [versioning guide](https://github.com/react-community/create-react-native-app/blob/master/VERSIONS.md) for up-to-date information about package version compatibility.

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Environment Variables

You can configure some of Create React Native App's behavior using environment variables.

### Configuring Packager IP Address

When starting your project, you'll see something like this for your project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load your app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve your app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run your project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' yarn start
```

Windows:
```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
yarn start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

## Troubleshooting

### Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager.

### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `yarn run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `yarn run ios`.

### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
