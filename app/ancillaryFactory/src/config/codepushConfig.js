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

// TODO: Figure out how to know which stage is
const env = 'staging';

export const DEPLOYMENT_KEY = deploymentKeys[Platform.OS][env];

export const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
};
