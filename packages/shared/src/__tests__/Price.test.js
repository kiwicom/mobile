// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

import Price from '../Price';
import CurrencyFormatter from '../CurrencyFormatter';

jest.mock('../CurrencyFormatter', () => jest.fn());
jest.mock('../CancellablePromise', () => ({
  promise: new Promise((resolve, reject) => {
    reject();
  }),
}));

const renderer = new ShallowRenderer();

describe('Price', () => {
  it('renders null values correctly', () => {
    expect(
      renderer.render(<Price price={{ amount: null, currency: null }} />),
    ).toMatchSnapshot();
    expect(
      renderer.render(<Price price={{ amount: 45, currency: null }} />),
    ).toMatchSnapshot();
    expect(
      renderer.render(<Price price={{ amount: null, currency: 'EUR' }} />),
    ).toMatchSnapshot();
  });

  it('calls Currencyformatter if amount and currency is passed', () => {
    testRenderer.create(<Price price={{ amount: 45, currency: 'EUR' }} />);
    expect(CurrencyFormatter).toHaveBeenCalledWith(45, 'EUR');
  });

  it('does not call set state if promise is rejected', async () => {
    const Component = new Price({ price: { amount: 45, currency: 'EUR' } });

    jest.spyOn(Component, 'setState');
    await Component.formatCurrency();

    expect(Component.setState).not.toHaveBeenCalled();
  });
});
