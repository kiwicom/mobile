// @flow

import { NativeModules } from 'react-native';

export default function CurrencyFormatter(price: number, toCurrency: string) {
  const formattedPrice = NativeModules.RNCurrencyManager.formatAmount(
    price,
    toCurrency,
  );
  return Math.round(formattedPrice * 100) / 100;
}
