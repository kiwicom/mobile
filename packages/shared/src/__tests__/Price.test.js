// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

import Price from '../Price';
import CurrencyFormatter from '../CurrencyFormatter';

jest.mock('../CurrencyFormatter', () => jest.fn());
jest.mock('../../../utils/src/cancellablePromise.js', () => ({
  promise: new Promise((resolve, reject) => {
    reject(new Error('err'));
  }),
}));

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

  it('does not call set state if promise is rejected', async () => {
    const Component = new Price({ amount: 45, currency: 'EUR' });

    jest.spyOn(Component, 'setState');
    await Component.formatCurrency();

    expect(Component.setState).not.toHaveBeenCalled();
  });

  it('calls formatCurrency if amount updates', () => {
    const Component = new Price({ amount: 45, currency: 'EUR' });
    Component.formatCurrency = jest.fn();

    Component.componentDidUpdate({ amount: 46 });

    expect(Component.formatCurrency).toHaveBeenCalledWith();
  });

  it('does not call formatCurrency if amount is the same', () => {
    const Component = new Price({ amount: 45, currency: 'EUR' });
    Component.formatCurrency = jest.fn();

    Component.componentDidUpdate({ amount: 45 });

    expect(Component.formatCurrency).not.toHaveBeenCalled();
  });

  it('calls formatCurrency if prevProps price is undefined', () => {
    const Component = new Price({ amount: 45, currency: 'EUR' });
    Component.formatCurrency = jest.fn();

    Component.componentDidUpdate({});

    expect(Component.formatCurrency).toHaveBeenCalledWith();
  });

  it('calls formatCurrency if current price is undefined', () => {
    const Component = new Price({});
    Component.formatCurrency = jest.fn();

    Component.componentDidUpdate({ amount: 45, currency: 'EUR' });

    expect(Component.formatCurrency).toHaveBeenCalledWith();
  });
});
