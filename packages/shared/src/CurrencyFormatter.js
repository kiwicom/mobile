// @flow strict

import { formatAmount } from '@kiwicom/rnmodules';

export default async function CurrencyFormatter(
  price: number,
  toCurrency: string,
) {
  const formattedAmount = await formatAmount(price, toCurrency);
  return formattedAmount;
}
