// @flow

import { NativeModules } from 'react-native';

NativeModules.RNCurrencyManager = {
  formatAmount: jest.fn((price: number) => price),
  formatAmountAsync: jest.fn((price: number) => price),
};
