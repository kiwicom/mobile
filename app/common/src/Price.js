// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {|
  amount: number | null, // may be null (compatible with GraphQL query failure)
  currency: string | null, // may be null (compatible with GraphQL query failure)
  // $FlowFixMeProps
  style?: Object,
  // $FlowFixMeProps
  amountStyle?: Object,
  // $FlowFixMeProps
  currencyStyle?: Object,
|};

/**
 * Currently we are not doing proper formatting because we do not have enough
 * information about currencies being before/after the amount number. However,
 * all prices should be wrapped in this component so the future changes are easy.
 */
export default function Price(props: Props) {
  return (
    <Text style={props.style}>
      <Text style={props.amountStyle}>{props.amount}</Text>{' '}
      <Text style={props.currencyStyle}>{props.currency}</Text>
    </Text>
  );
}
