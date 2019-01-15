// @flow

import { NativeModules } from 'react-native';

export const formatAmount = (
  price: number,
  toCurrency: string,
): Promise<number> => {
  return NativeModules.RNCurrencyManager.formatAmount(price, toCurrency);
};
