// @flow strict

const path = require('path');
const exec = require('child_process').execSync;

const iosPath = path.join(__dirname, '..', 'ios');

exec('pod install', { cwd: iosPath, stdio: 'inherit' });
