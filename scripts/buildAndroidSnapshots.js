/* eslint-disable no-console */
/* eslint-disable flowtype/require-valid-file-annotation */

const child_process = require('child_process');
const request = require('request');

function urlExists(url, headers, cb) {
  request({ url: url, headers: headers, method: 'HEAD' }, function(err, res) {
    if (err) {
      return cb(null, false);
    }
    cb(null, /4\d\d/.test(res.statusCode) === false);
  });
}

const exec = (command, options) =>
  child_process.execSync(command, {
    stdio: 'inherit',
    ...options,
  });

const SKYPICKER_URL =
  'https://gitlab.skypicker.com/api/v4/projects/301/packages/maven/';

if (!process.env.DEPLOYMENT_TOKEN) {
  throw Error('You need to pass DEPLOYMENT_TOKEN.');
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
  return new Promise((resolve, reject) => {
    var downloadUrl = `${url}com/trinerdis/skypicker/${packageName}/${version}${extension}/maven-metadata.xml`;

    console.log(`Checking if ${downloadUrl} exists.`);

    urlExists(
      downloadUrl,
      { 'Private-Token': process.env.DEPLOYMENT_TOKEN },
      (err, exists) => {
        if (err) {
          reject(err);
          return;
        }
        if (!exists) {
          console.log(`Deploying ${packageName}/${version}${extension}`);
          try {
            exec(
              `cd ${baseFolder} && DEPLOYMENT_TOKEN=${
                // $FlowFixMe we already checked in the top that is defined
                process.env.DEPLOYMENT_TOKEN
              } ./gradlew --no-daemon :${packageName}:uploadKiwi`,
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
      },
    );
  });
};

const deployLibrary = (packageName, version) => {
  console.log(`Deploying ${packageName}/${version}-SNAPSHOT`);
  try {
    exec(
      `cd ${baseFolder}/${packageName} && DEPLOYMENT_TOKEN=${
        // $FlowFixMe we already checked in the top that is defined
        process.env.DEPLOYMENT_TOKEN
      } ../gradlew --no-daemon :${packageName}:uploadKiwi`,
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
