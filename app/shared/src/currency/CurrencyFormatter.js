// @flow

import { NativeModules } from 'react-native';

export default async function CurrencyFormatter(
  price: number,
  toCurrency: string,
) {
  const formattedAmount = await NativeModules.RNCurrencyManager.formatAmountAsync(
    price,
    toCurrency,
  );
  return formattedAmount;
}
