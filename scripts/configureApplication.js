// @flow strict

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const chalk = require('chalk');
const { config } = require('dotenv');

config();

const { SENTRY_DSN } = process.env;

const log = message => console.log(`➤ ${message}`); // eslint-disable-line no-console
const error = message => console.log(chalk.red(`➤ ${message}`)); // eslint-disable-line no-console

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

log('Checking node version');
const version = process.versions.node;

if (parseInt(version.split('.')[0], 10) < 11) {
  // TODO: Remove this and use engines in package.json when we have upgraded node version on mobile CI
  error('Please use node version 11.0.0 or greater for this project');
}

log('Write .env for CI');
const dotEnvPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(dotEnvPath)) {
  const sentryDsn = SENTRY_DSN || '';
  fs.writeFileSync(dotEnvPath, `SENTRY_DSN=${sentryDsn}`);
}

log('Configuration complete!');
