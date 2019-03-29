// @flow

import { execSync } from 'child_process';
import fetch from '@kiwicom/fetch';

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

if (!process.env.RNKIWIMOBILE_DEPLOYMENT_TOKEN) {
  throw Error('You need to pass RNKIWIMOBILE_DEPLOYMENT_TOKEN.');
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

const rnModulesVersion = rnModulesPackage.version;

// Get rnkiwimobile version
const RNKiwiMobileVersion = buildPackage.version;

const deployDependency = async (packageName, url, version, extension = '') => {
  const downloadUrl = `${url}com/trinerdis/skypicker/${packageName}/${version}${extension}/maven-metadata.xml`;

  log(`Checking if ${downloadUrl} exists.`);

  const exists = await urlExists(downloadUrl, {
    'Private-Token': process.env.RNKIWIMOBILE_DEPLOYMENT_TOKEN,
  });

  if (!exists) {
    log(`Deploying ${packageName}/${version}${extension}`);

    exec(
      `cd ${baseFolder} && RNKIWIMOBILE_DEPLOYMENT_TOKEN=${
        // $FlowFixMe we already checked in the top that is defined
        process.env.RNKIWIMOBILE_DEPLOYMENT_TOKEN
      } ./gradlew --no-daemon :${packageName}:uploadKiwi`,
    );

    log(`${packageName}/${version}${extension} was successfully deployed.`);
  } else {
    log(`Skipping ${packageName}/${version}${extension} (already deployed).`);
  }
};

const deployLibrary = (packageName, version) => {
  log(`Deploying ${packageName}/${version}-SNAPSHOT`);
  try {
    exec(
      `cd ${baseFolder}/${packageName} && RNKIWIMOBILE_DEPLOYMENT_TOKEN=${
        // $FlowFixMe we already checked in the top that is defined
        process.env.RNKIWIMOBILE_DEPLOYMENT_TOKEN
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
    log('Start building Android SNAPSHOT(s)...');
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
        'react-native-native-modules',
        SKYPICKER_URL,
        `${rnModulesVersion}.react-native.${reactNativeVersion}`,
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
      deployDependency(
        'react-native-gesture-handler',
        SKYPICKER_URL,
        `${getDependencyVersion(
          'react-native-gesture-handler',
        )}.react-native.${reactNativeVersion}`,
        '-SNAPSHOT',
      ),
      deployDependency(
        '@react-native-community_async-storage',
        SKYPICKER_URL,
        `${getDependencyVersion(
          '@react-native-community/async-storage',
        )}.react-native.${reactNativeVersion}`,
        '-SNAPSHOT',
      ),
      deployDependency(
        '@react-native-community_netinfo',
        SKYPICKER_URL,
        `${getDependencyVersion(
          '@react-native-community/netinfo',
        )}.react-native.${reactNativeVersion}`,
        '-SNAPSHOT',
      ),
      deployDependency(
        'react-native-webview',
        SKYPICKER_URL,
        `${getDependencyVersion(
          'react-native-webview',
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
