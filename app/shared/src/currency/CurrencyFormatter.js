// @flow

import { NativeModules } from 'react-native';

export default function CurrencyFormatter(price: number, toCurrency: string) {
  return NativeModules.RNCurrencyManager.formatAmount(price, toCurrency);
}
