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
  it('Formats decimals correctly', () => {
    expect(CurrencyFormatter(10, 'NOK')).toBe(10);
    expect(CurrencyFormatter(12.3, 'NOK')).toBe(12.3);
    expect(CurrencyFormatter(72.8499999, 'NOK')).toBe(72.85);
  });
});
