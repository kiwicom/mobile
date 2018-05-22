// @flow

import { NativeModules } from 'react-native';

NativeModules.RNKiwiGestureController = {
  enableGestures: jest.fn((moduleName: string) => moduleName),
  disableGestures: jest.fn((moduleName: string) => moduleName),
};
