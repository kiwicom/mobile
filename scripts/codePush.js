// @flow

/* eslint-disable no-console */

const path = require('path');
const childProcess = require('child_process');

const packageJson = require('../package.json');

const exec = (command, options) =>
  childProcess.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const targetBinaryVersion =
  packageJson.rnkiwimobile['code-push-target-binary-version'];

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
