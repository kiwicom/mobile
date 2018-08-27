// @flow

import { formatAmount } from '@kiwicom/rnmodules';

import CurrencyFormatter from '../CurrencyFormatter';

describe('CurrencyFormatter', () => {
  it('should call formatAmount', async () => {
    await CurrencyFormatter(100, 'USD');
    expect(formatAmount).toHaveBeenCalledWith(100, 'USD');
  });
});
