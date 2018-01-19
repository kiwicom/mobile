// @flow

import CurrencyFormatter from '../CurrencyFormatter';

it('works', () => {
  expect(CurrencyFormatter(12.3)).toBe('12.3');
});
