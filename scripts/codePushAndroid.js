// @flow

/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'),
);

const targetBinaryVersion =
  packageJson['rnkiwimobile']['code-push-target-binary-version'];

const entryFile = path.join(__dirname, '..', 'app/native.js');

function processCommand() {
  const isProduction = process.argv[2] && process.argv[2] === '--prod';
  const target = isProduction ? 'Production' : 'Staging';
  console.log(`Building for ${target}...`);

  exec(
    `appcenter codepush release-react -a Kiwicom/mobile-android --entry-file ${entryFile} --target-binary-version "${targetBinaryVersion}" -d ${target}`,
  );
}

processCommand();
