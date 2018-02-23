// @flow

const path = require('path');
const child_process = require('child_process');

const exec = child_process.execSync;
const hotelPath = path.join(__dirname, '..', 'app', 'hotels');
const buildPath = path.join(__dirname, '..', '.build');

const getBuildCommand = platform => {
  return `yarn react-native bundle --dev=false --verbose --platform=${platform} --entry-file=${hotelPath}/index.js --bundle-output=${buildPath}/${platform}/hotels.${platform}.jsbundle --assets-dest ${buildPath}/${platform}`;
};

exec(`mkdir -pv ${buildPath}/ios && mkdir -pv ${buildPath}/android`, {
  stdio: 'inherit',
});
exec(getBuildCommand('ios'), { stdio: 'inherit' });
exec(getBuildCommand('android'), { stdio: 'inherit' });

exec('npm version patch', {
  cwd: buildPath,
  stdio: 'inherit',
});
exec('npm publish --access=public', {
  cwd: buildPath,
  stdio: 'inherit',
});
