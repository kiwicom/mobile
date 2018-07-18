// @flow

import { NativeModules } from 'react-native';

NativeModules.RNKiwiGestureController = {
  enableGestures: jest.fn((moduleName: string) => moduleName),
  disableGestures: jest.fn((moduleName: string) => moduleName),
  closeModal: jest.fn(),
  invokeDefaultBackButton: jest.fn(),
};
