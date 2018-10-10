// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import CurrencyFormatter from './CurrencyFormatter';
import Text from './Text';
import type { StylePropType } from '../types/Styles';
import CancellablePromise, {
  type CancellablePromiseType,
} from './CancellablePromise';

type PriceType = {
  +amount?: ?number,
  +currency?: ?string,
};

type Props = {|
  +price?: ?PriceType,
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
  cancellablePromise: CancellablePromiseType | null = null;
  state = {
    formattedCurrency: '',
  };

  componentDidMount = () => {
    this.formatCurrency();
  };

  componentDidUpdate = (prevProps: Props) => {
    if (
      (prevProps.price && prevProps.price.amount) !==
      (this.props.price && this.props.price.amount)
    ) {
      this.formatCurrency();
    }
  };

  componentWillUnmount = () => {
    if (this.cancellablePromise !== null) {
      this.cancellablePromise.cancel();
    }
  };

  formatCurrency = async () => {
    if (
      this.props.price != null &&
      this.props.price.amount != null &&
      this.props.price.currency != null
    ) {
      try {
        this.cancellablePromise = CancellablePromise(
          CurrencyFormatter(this.props.price.amount, this.props.price.currency),
        );
        const formattedCurrency = await this.cancellablePromise.promise;
        this.setState({ formattedCurrency });
        this.cancellablePromise = null;
      } catch (err) {
        this.cancellablePromise = null;
      }
    }
  };

  render = () => {
    return (
      <Text style={this.props.style}>
        <Translation passThrough={this.state.formattedCurrency} />
      </Text>
    );
  };
}
