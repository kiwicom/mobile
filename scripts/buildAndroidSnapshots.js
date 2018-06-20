/* @flow */

/* eslint-disable no-console */

const urlExists = require('url-exists');
const child_process = require('child_process');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const DEFAULT_URL =
  'http://trinerdis.cz:8000/repository/snapshots/com/trinerdis/skypicker/';

if (!process.env.ANDROID_DEPLOYMENT_PASSWORD) {
  throw Error('You need to pass ANDROID_DEPLOYMENT_PASSWORD.');
}

// Read native dependencies versions from package.json (maps, vector icons...)
const buildPackage = require('../.build/package.json');

// Get versions and remove ^ if necessary
const getDependencyVersion = packageName => {
  return buildPackage.dependencies[packageName].replace('^', '');
};

// Get rnkiwimobile version
const RNKiwiMobileVersion = buildPackage.version;

const deployToTrinerdis = (packageName, manualVersion, buildJS = false) => {
  const version = manualVersion
    ? manualVersion
    : getDependencyVersion(packageName);

  return new Promise((resolve, reject) =>
    urlExists(
      `${DEFAULT_URL}${packageName}/${version}-SNAPSHOT/`,
      (err, exists) => {
        if (err) {
          reject(err);
          return;
        }
        if (!exists) {
          if (buildJS) {
            console.log('Generating Android JS build...');
            child_process.execSync('scripts/buildAndroidJavascript.sh', {
              stdio: 'inherit',
            });
          }
          console.log(`Deploying ${packageName}/${version}-SNAPSHOT`);
          exec(
            `cd RNAndroidPlayground/${packageName} && ANDROID_DEPLOYMENT_PASSWORD=${
              // $FlowFixMe we already checked in the top that is defined
              process.env.ANDROID_DEPLOYMENT_PASSWORD
            } ../gradlew --no-daemon uploadTrinerdis -Pversion=${version}`,
          );
          console.log(
            `${packageName}/${version}-SNAPSHOT was successfully deployed.`,
          );
        } else {
          console.log(
            `Skipping ${packageName}/${version}-SNAPSHOT (already deployed).`,
          );
        }
        resolve();
      },
    ),
  );
};

(() => {
  console.log(`Start building Android SNAPSHOT(s)...`);
  Promise.all([
    deployToTrinerdis('react-native-maps'),
    deployToTrinerdis('react-native-vector-icons'),
    deployToTrinerdis('react-native-tooltips'),
  ]).then(() => {
    // Main package to publish: rnkiwimobile
    console.log('-----');
    deployToTrinerdis('rnkiwimobile', RNKiwiMobileVersion, true);
  });
})();
