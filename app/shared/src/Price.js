// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/react-native-app-localization';

import CurrencyFormatter from './currency/CurrencyFormatter';
import Text from './Text';
import type { StylePropType } from '../types/Styles';

type Props = {|
  amount: number | null, // may be null (compatible with GraphQL query failure)
  currency: string | null, // may be null (compatible with GraphQL query failure)
  style?: StylePropType,
|};

/**
 * Currently we are not doing proper formatting because we do not have enough
 * information about currencies being before/after the amount number. However,
 * all prices should be wrapped in this component so the future changes are easy.
 */
export default function Price(props: Props) {
  const amount =
    props.amount != null && props.currency != null
      ? CurrencyFormatter(props.amount, props.currency)
      : '';

  return (
    <Text style={props.style}>
      <Translation passThrough={amount} />
    </Text>
  );
}
