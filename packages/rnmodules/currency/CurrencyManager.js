// @flow

import { NativeModules } from 'react-native';

export const formatAmount = (
  price: number,
  toCurrency: string,
): Promise<Number> => {
  return NativeModules.RNCurrencyManager.formatAmount(price, toCurrency);
};
