// @flow

import { execSync } from 'child_process';
import fetch from 'node-fetch';

const log = (...params) => {
  console.log(...params); // eslint-disable-line no-console
};

async function urlExists(url, headers) {
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      headers,
    });
    return res.ok;
  } catch (err) {
    log(err);
    return false;
  }
}

const exec = (command, options) =>
  execSync(command, {
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
  return new Promise(async (resolve, reject) => {
    var downloadUrl = `${url}com/trinerdis/skypicker/${packageName}/${version}${extension}/maven-metadata.xml`;

    log(`Checking if ${downloadUrl} exists.`);

    const exists = await urlExists(downloadUrl, {
      'Private-Token': process.env.DEPLOYMENT_TOKEN,
    });

    if (!exists) {
      log(`Deploying ${packageName}/${version}${extension}`);
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
      log(`${packageName}/${version}${extension} was successfully deployed.`);
    } else {
      log(`Skipping ${packageName}/${version}${extension} (already deployed).`);
    }
    resolve();
  });
};

const deployLibrary = (packageName, version) => {
  log(`Deploying ${packageName}/${version}-SNAPSHOT`);
  try {
    exec(
      `cd ${baseFolder}/${packageName} && DEPLOYMENT_TOKEN=${
        // $FlowFixMe we already checked in the top that is defined
        process.env.DEPLOYMENT_TOKEN
      } ../gradlew --no-daemon :${packageName}:uploadKiwi`,
    );
  } catch (err) {
    log('ERROR:', err);
    process.exit(-1);
  }
  log(`${packageName}/${version}-SNAPSHOT was successfully deployed.`);
};

(async () => {
  try {
    log(`Start building Android SNAPSHOT(s)...`);
    const reactNativeVersion = getDependencyVersion('react-native');

    await Promise.all([
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
    ]);
    // Main package to publish: rnkiwimobile
    log('-----');
    deployLibrary('rnkiwimobile', RNKiwiMobileVersion);
  } catch (err) {
    log('ERROR:', err);
    process.exit(-1);
  }
})();
