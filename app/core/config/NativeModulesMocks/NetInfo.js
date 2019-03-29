// @flow

import { NativeModules } from 'react-native';

NativeModules.RNCNetInfo = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  getConnectionInfo: jest.fn(),
  isConnected: {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    fetch: jest.fn(),
  },
  isConnectionExpensive: jest.fn(),
};
