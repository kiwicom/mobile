// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import CurrencyFormatter from './CurrencyFormatter';
import Text from './Text';
import type { StylePropType } from '../types/Styles';

type Props = {|
  amount: number | null, // may be null (compatible with GraphQL query failure)
  currency: string | null, // may be null (compatible with GraphQL query failure)
  style?: StylePropType,
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

  componentDidMount = () => {
    this.formatCurrency();
  };

  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.amount !== this.props.amount) {
      this.formatCurrency();
    }
  };

  formatCurrency = async () => {
    if (this.props.amount != null && this.props.currency != null) {
      const formattedCurrency = await CurrencyFormatter(
        this.props.amount,
        this.props.currency,
      );
      this.setState({ formattedCurrency });
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
