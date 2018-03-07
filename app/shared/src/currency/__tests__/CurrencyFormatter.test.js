// @flow

import { NativeModules } from 'react-native';

import CurrencyFormatter from '../CurrencyFormatter';

describe('CurrencyFormatter', () => {
  it('should call NativeModules.RNCurrencyManager.formatAmount', () => {
    CurrencyFormatter(100, 'USD');
    expect(NativeModules.RNCurrencyManager.formatAmount).toHaveBeenCalledWith(
      100,
      'USD',
    );
  });
});
