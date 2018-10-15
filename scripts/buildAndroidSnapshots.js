/* eslint-disable no-console */
/* eslint-disable flowtype/require-valid-file-annotation */

const urlExists = require('url-exists');
const child_process = require('child_process');

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const SKYPICKER_URL =
  'http://trinerdis.cz:8000/repository/snapshots/com/trinerdis/skypicker/';

const FACEBOOK_URL =
  'http://trinerdis.cz:8000/repository/snapshots/com/facebook/react/';

if (!process.env.ANDROID_DEPLOYMENT_PASSWORD) {
  throw Error('You need to pass ANDROID_DEPLOYMENT_PASSWORD.');
}

// Read native dependencies versions from package.json (maps, vector icons...)
const buildPackage = require('../.build/package.json');
// react-native-native-modules version
const rnModulesPackage = require('../packages/rnmodules/package.json');

const baseFolder = 'android';

// Get versions and remove ^ if necessary
const getDependencyVersion = packageName => {
  return buildPackage.dependencies[packageName].replace('^', '');
};

const rnModulesVersion = rnModulesPackage['version'];

// Get rnkiwimobile version
const RNKiwiMobileVersion = buildPackage.version;

const deployDependency = (packageName, url, version, extension = '') => {
  return new Promise((resolve, reject) =>
    urlExists(`${url}${packageName}/${version}${extension}/`, (err, exists) => {
      if (err) {
        reject(err);
        return;
      }
      if (!exists) {
        console.log(`Deploying ${packageName}/${version}${extension}`);
        try {
          exec(
            `cd ${baseFolder}/native/${packageName} && ANDROID_DEPLOYMENT_PASSWORD=${
              // $FlowFixMe we already checked in the top that is defined
              process.env.ANDROID_DEPLOYMENT_PASSWORD
            } ../../gradlew --no-daemon uploadTrinerdis -Pversion=${version}`,
          );
        } catch (err) {
          reject(err);
          return;
        }
        console.log(
          `${packageName}/${version}${extension} was successfully deployed.`,
        );
      } else {
        console.log(
          `Skipping ${packageName}/${version}${extension} (already deployed).`,
        );
      }
      resolve();
    }),
  );
};

const deployLibrary = (packageName, version) => {
  console.log('Generating Android JS build...');
  child_process.execSync('scripts/buildAndroidJavascript.sh', {
    stdio: 'inherit',
  });
  console.log(`Deploying ${packageName}/${version}-SNAPSHOT`);
  try {
    exec(
      `cd ${baseFolder}/${packageName} && ANDROID_DEPLOYMENT_PASSWORD=${
        // $FlowFixMe we already checked in the top that is defined
        process.env.ANDROID_DEPLOYMENT_PASSWORD
      } ../gradlew --no-daemon uploadTrinerdis -Pversion=${version}`,
    );
  } catch (err) {
    console.log('ERROR:', err);
    process.exit(-1);
  }
  console.log(`${packageName}/${version}-SNAPSHOT was successfully deployed.`);
};

(() => {
  console.log(`Start building Android SNAPSHOT(s)...`);
  const reactNativeVersion = getDependencyVersion('react-native');

  Promise.all([
    deployDependency('react-native', FACEBOOK_URL, reactNativeVersion),
    deployDependency(
      'react-native-maps',
      SKYPICKER_URL,
      `${getDependencyVersion(
        'react-native-maps',
      )}.react-native.${reactNativeVersion}`,
      '-SNAPSHOT',
    ),
    deployDependency(
      'react-native-tooltips',
      SKYPICKER_URL,
      `${getDependencyVersion(
        'react-native-tooltips',
      )}.react-native.${reactNativeVersion}`,
      '-SNAPSHOT',
    ),
    deployDependency(
      'react-native-native-modules',
      SKYPICKER_URL,
      `${rnModulesVersion}.react-native.${reactNativeVersion}`,
      '-SNAPSHOT',
    ),
    deployDependency(
      'react-native-zip-archive',
      SKYPICKER_URL,
      `${getDependencyVersion(
        'react-native-zip-archive',
      )}.react-native.${reactNativeVersion}`,
      '-SNAPSHOT',
    ),
    deployDependency(
      'react-native-code-push',
      SKYPICKER_URL,
      `${getDependencyVersion(
        'react-native-code-push',
      )}.react-native.${reactNativeVersion}`,
      '-SNAPSHOT',
    ),
  ])
    .then(() => {
      // Main package to publish: rnkiwimobile
      console.log('-----');
      deployLibrary('rnkiwimobile', RNKiwiMobileVersion);
    })
    .catch(err => {
      console.log('ERROR:', err);
      process.exit(-1);
    });
})();
