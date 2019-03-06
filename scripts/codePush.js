// @flow

/* eslint-disable no-console */

const path = require('path');
const childProcess = require('child_process');

const packageJson = require('../package.json');

const isRunningForAncillaries = process.argv.slice(2)[0] === '--ancillaries';

const exec = (command, options) =>
  childProcess.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

let targetBinaryVersion =
  packageJson.rnkiwimobile['code-push-target-binary-version'];

let entryFile = path.join(__dirname, '..', 'app/native.js');

let targetProjectAndroid = 'Kiwicom/mobile-android';
let targetProjectIOS = 'Kiwicom/mobile-ios';
let bundleName = 'main.jsbundle';

// If --ancillaries flag is passed override entry file, target binary version and target project
if (isRunningForAncillaries) {
  entryFile = path.join(__dirname, '../app/ancillaries-native.js');
  targetBinaryVersion =
    packageJson.rnkiwimobile['code-push-ancillaries-target-binary-version'];
  targetProjectAndroid = 'Kiwicom/mobile-android-ancillaries';
  targetProjectIOS = 'Kiwicom/mobile-ios-ancillaries';
  bundleName = 'ancillaries.jsbundle';
}

function processCommand() {
  const target = 'Staging';
  console.log(`Building for ${target}...`);

  exec(
    `appcenter codepush release-react -a ${targetProjectAndroid} --entry-file ${entryFile} --target-binary-version "${targetBinaryVersion}" -d ${target} --bundle-name ${bundleName}`,
  );

  exec(
    `appcenter codepush release-react -a ${targetProjectIOS} --entry-file ${entryFile} --target-binary-version "${targetBinaryVersion}" -d ${target} --bundle-name ${bundleName}`,
  );
}

processCommand();
