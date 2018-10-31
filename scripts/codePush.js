// @flow

/* eslint-disable no-console */

const path = require('path');
const child_process = require('child_process');

const packageJson = require('../package');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const targetBinaryVersion =
  packageJson['rnkiwimobile']['code-push-target-binary-version'];

const entryFile = path.join(__dirname, '..', 'app/native.js');

function processCommand() {
  const target = 'Staging';
  console.log(`Building for ${target}...`);

  exec(
    `appcenter codepush release-react -a Kiwicom/mobile-android --entry-file ${entryFile} --target-binary-version "${targetBinaryVersion}" -d ${target}`,
  );

  exec(
    `appcenter codepush release-react -a Kiwicom/mobile-ios --entry-file ${entryFile} --target-binary-version "${targetBinaryVersion}" -d ${target}`,
  );
}

processCommand();