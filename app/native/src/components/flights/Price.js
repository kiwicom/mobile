// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text } from 'react-native';

import type { Price } from './__generated__/Price.graphql';

type Props = {
  data: Price,
};

const styles = {
  fontWeight: 'bold',
};

export const PriceWithoutData = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <Text style={styles}>
      {data && data.amount} {data && data.currency}
    </Text>
  );
};

export default createFragmentContainer(
  PriceWithoutData,
  graphql`
    fragment Price on Price {
      amount
      currency
    }
  `,
);
