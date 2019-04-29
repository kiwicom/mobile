// @flow

import * as React from 'react';
import { type DecimalValue, Decimal } from 'decimal.js-light';
import {
  cancellablePromise,
  type CancellablePromiseType,
} from '@kiwicom/mobile-utils';

import Translation from './Translation';
import CurrencyFormatter from './CurrencyFormatter';
import Text from './Text';
import type { StylePropType } from '../types/Styles';

type Props = {|
  +amount?: ?DecimalValue,
  +currency?: ?string,
  +style?: StylePropType,
|};

type State = {|
  formattedCurrency: string,
|};

/**
 * Currently we are not doing proper formatting because we do not have enough
 * information about currencies being before/after the amount number. However,
 * all prices should be wrapped in this component so the future changes are easy.
 */
export default class Price extends React.Component<Props, State> {
  state = {
    formattedCurrency: '',
  };

  componentDidMount() {
    this.formatCurrency();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.amount !== this.props.amount) {
      this.formatCurrency();
    }
  }

  componentWillUnmount = () => {
    if (this.cancellablePromise !== null) {
      this.cancellablePromise.cancel();
    }
  };

  cancellablePromise: CancellablePromiseType | null = null;

  formatCurrency = async () => {
    const amount = this.props.amount ?? null;
    const currency = this.props.currency || null;

    if (amount !== null && currency !== null) {
      try {
        this.cancellablePromise = cancellablePromise(
          CurrencyFormatter(
            parseFloat(new Decimal(amount).toFixed(2)),
            currency,
          ),
        );
        const formattedCurrency = await this.cancellablePromise.promise;
        this.setState({ formattedCurrency });
        this.cancellablePromise = null;
      } catch (err) {
        this.cancellablePromise = null;
      }
    }
  };

  render() {
    return (
      <Text style={this.props.style}>
        <Translation passThrough={this.state.formattedCurrency} />
      </Text>
    );
  }
}
