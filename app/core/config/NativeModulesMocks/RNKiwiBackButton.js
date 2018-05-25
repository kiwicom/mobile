// @flow

import { NativeModules } from 'react-native';

NativeModules.RNKiwiBackButton = {
  enableGestures: jest.fn((moduleName: string) => moduleName),
  disableGestures: jest.fn((moduleName: string) => moduleName),
};
