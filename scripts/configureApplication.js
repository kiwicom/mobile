// @flow strict

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console

// TODO: fetch .env variables from Vault (or maybe just store the .env file itself in the Vault - this is painful)
const vault = {
  AFFILIATE_BOOKINGCOM: 'null',
  AUTH_ANDROID_GOOGLE_CLIENTID: 'null',
  AUTH_IOS_GOOGLE_CLIENTID: 'null',
  AUTH_KIWI_BACKEND: 'null',
  SENTRY_DSN: 'null',
  API_KEY_GOOGLE_MAPS: 'null',
};

const envTemplate = `
###########################################################################
###                                                                     ###
###                DO NOT UPDATE THIS FILE MANUALLY                     ###
###   To update this file please run "./scripts/configureApplication"   ###
###                                                                     ###
###########################################################################

# Affiliate number is used when sending request to the Booking.com.
# They know (thanks to this number) who is making requests and they'll
# provide branded whitelabel.
#
AFFILIATE_BOOKINGCOM=${vault.AFFILIATE_BOOKINGCOM}

# These client IDs are used by Google login.
# See: https://docs.expo.io/versions/latest/sdk/google.html
#
AUTH_ANDROID_GOOGLE_CLIENTID=${vault.AUTH_ANDROID_GOOGLE_CLIENTID}
AUTH_IOS_GOOGLE_CLIENTID=${vault.AUTH_IOS_GOOGLE_CLIENTID}

# Kiwi backend token is necessary to convert client IDs (Google) to our
# internal Kiwi token. This token is used to communicate with our API.
#
AUTH_KIWI_BACKEND=${vault.AUTH_KIWI_BACKEND}

# Sentry is used to log all errors during client runtime so we can act
# accordingly and fix all production issues.
#
SENTRY_DSN=${vault.SENTRY_DSN}

API_KEY_GOOGLE_MAPS=${vault.API_KEY_GOOGLE_MAPS}
`;

log('Setting up ENV variables...');
fs.writeFileSync(path.join(__dirname, '..', '.env'), envTemplate);

// We need to do this patching as react-native-code-push is actually "linked" as part of our native library RNKiwiMobile
// We might be avoiding this patching when linking is extracted from RN core (with new features)
// Keep an eye on https://github.com/react-native-community/react-native-cli
log('Patching react-native-code-push...');
const rnCodePushPackgeJson = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      '..',
      'node_modules',
      'react-native-code-push',
      'package.json',
    ),
    'utf-8',
  ),
);
delete rnCodePushPackgeJson.rnpm;

fs.writeFileSync(
  path.join(
    __dirname,
    '..',
    'node_modules',
    'react-native-code-push',
    'package.json',
  ),
  JSON.stringify(rnCodePushPackgeJson, null, 2),
);

log('Linking all native dependencies...');
childProcess.execSync('yarn react-native link');

log('Patching intl package');
const intlPackageJson = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'node_modules', 'intl', 'package.json'),
    'utf-8',
  ),
);
delete intlPackageJson.browser;

fs.writeFileSync(
  path.join(__dirname, '..', 'node_modules', 'intl', 'package.json'),
  JSON.stringify(intlPackageJson, null, 2),
);

try {
  fs.unlinkSync(path.join(__dirname, '..', 'node_modules', 'intl', '.babelrc'));
} catch (e) {
  // Ignore error - file doesn't exist
}

// Needed before 0.22.0 for Android Studio to sync
log('Patching react-native-maps');
const androidManifestReactNativeMaps = fs.readFileSync(
  path.join(
    __dirname,
    '..',
    'node_modules/react-native-maps/lib/android/src/main/AndroidManifest.xml',
  ),
  'utf-8',
);
const newAndroidManifestReactNativeMaps = androidManifestReactNativeMaps.replace(
  '<uses-sdk android:minSdkVersion="16" />',
  '',
);

fs.writeFileSync(
  path.join(
    __dirname,
    '..',
    'node_modules/react-native-maps/lib/android/src/main/AndroidManifest.xml',
  ),
  newAndroidManifestReactNativeMaps,
);

// Patching react-native-utils see https://github.com/Microsoft/react-native-code-push/issues/1276#issuecomment-424720093 for more info
const RCTUtilsMPath = path.join(
  __dirname,
  '..',
  'node_modules',
  'react-native',
  'React',
  'Base',
  'RCTUtils.m',
);

log('Patching RCTUtils.m....');
const RCTUtilsM = fs.readFileSync(RCTUtilsMPath, 'utf-8');

fs.writeFileSync(
  RCTUtilsMPath,
  RCTUtilsM.replace(
    'image = [UIImage imageWithData:fileData];',
    `CGFloat scale = 1.0;
    if ([[imageURL absoluteString] hasSuffix: @"@3x.png"]) {
      scale = 3.0;
    } else if ([[imageURL absoluteString] hasSuffix: @"@2x.png"]) {
      scale = 2.0;
    }
    image = [UIImage imageWithData:fileData scale: scale];`,
  ),
);
log('Done patching RCTUtils.m');

log('Checking node version');
const version = process.versions.node;

if (parseInt(version.split('.')[0], 10) < 11) {
  // TODO: Remove this and use engines in package.json when we have upgraded node version on mobile CI
  error('Please use node version 11.0.0 or greater for this project');
}

log('Configuration complete!');
