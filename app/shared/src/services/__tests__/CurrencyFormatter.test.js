// @flow

import CurrencyFormatter from '../CurrencyFormatter';

it('works', () => {
  expect(CurrencyFormatter(10)).toBe('10');
  expect(CurrencyFormatter(12.3)).toBe('12.3');
  expect(CurrencyFormatter(72.8499999)).toBe('72.85');
});
