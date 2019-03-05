// @flow strict

import { Platform } from 'react-native';

// TODO: Fill in with CodePush keys

const deploymentKeys = {
  ios: {
    staging: 's',
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
