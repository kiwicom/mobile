// @flow

import { NativeModules } from 'react-native';

import CurrencyFormatter from '../CurrencyFormatter';

describe('CurrencyFormatter', () => {
  it('should call NativeModules.RNCurrencyManager.formatAmountAsync', async () => {
    await CurrencyFormatter(100, 'USD');
    expect(
      NativeModules.RNCurrencyManager.formatAmountAsync,
    ).toHaveBeenCalledWith(100, 'USD');
  });
});
