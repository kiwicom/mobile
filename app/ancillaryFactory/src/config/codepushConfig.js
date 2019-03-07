// @flow strict

import CodePush from 'react-native-code-push';
import { Platform } from 'react-native';

// TODO: Fill in with Kiwi CodePush keys

const deploymentKeys = {
  ios: {
    staging: '',
    production: '',
  },
  android: {
    staging: '',
    production: '',
  },
};

let env = 'staging';

if (typeof process.env.NODE_ENV !== 'undefined') {
  env = process.env.NODE_ENV;
}

export const DEPLOYMENT_KEY = deploymentKeys[Platform.OS][env];

export const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};
