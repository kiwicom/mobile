// @flow

import { AppRegistry } from 'react-native';

import MMBStandalonePackage from './src/appRegistry/MMBStandalonePackage';

AppRegistry.registerComponent('ManageMyBooking', () => MMBStandalonePackage);

export { MMBStandalonePackage };
