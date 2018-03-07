// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

import Price from '../Price';
import CurrencyFormatter from '../currency/CurrencyFormatter';

jest.mock('../currency/CurrencyFormatter', () => jest.fn());

const renderer = new ShallowRenderer();

describe('Price', () => {
  it('renders null values correctly', () => {
    expect(
      renderer.render(<Price amount={null} currency={null} />),
    ).toMatchSnapshot();
    expect(
      renderer.render(<Price amount={45} currency={null} />),
    ).toMatchSnapshot();
    expect(
      renderer.render(<Price amount={null} currency="EUR" />),
    ).toMatchSnapshot();
  });

  it('calls Currencyformatter if amount and currency is passed', () => {
    testRenderer.create(<Price amount={45} currency="EUR" />);
    expect(CurrencyFormatter).toHaveBeenCalledWith(45, 'EUR');
  });
});
