// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import { Color, Price, StyleSheet } from '@kiwicom/react-native-app-shared';

import type { PriceMarker as PriceMarkerData } from './__generated__/PriceMarker.graphql';

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: Color.grey.$200,
    borderWidth: 1,
  },
  price: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  currency: {
    color: Color.grey.$700,
    fontSize: 12,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 8,
    borderTopColor: Color.grey.$200,
    borderRadius: 3,
    alignSelf: 'center',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 7,
    borderTopColor: '#fff',
    alignSelf: 'center',
    marginTop: -18,
  },
});

const selectedStyles = StyleSheet.create({
  bubble: {
    backgroundColor: Color.brand,
  },
  price: {
    color: '#fff',
  },
  currency: {
    color: '#fff',
  },
  arrow: {
    borderTopColor: Color.brand,
  },
});

type Props = {|
  isSelected?: boolean,
  data: PriceMarkerData,
|};

const PriceMarker = (props: Props) => {
  const { isSelected, data: price } = props;
  const bubbleStyles = StyleSheet.flatten([
    styles.bubble,
    isSelected && selectedStyles.bubble,
  ]);
  const priceStyles = StyleSheet.flatten([
    styles.price,
    isSelected && selectedStyles.price,
  ]);
  const currencyStyles = StyleSheet.flatten([
    styles.currency,
    props.isSelected && selectedStyles.currency,
  ]);

  return (
    <View>
      <View style={bubbleStyles}>
        {price &&
          price.amount &&
          price.currency && (
            <Price
              amount={price.amount}
              currency={price.currency}
              amountStyle={priceStyles}
              currencyStyle={currencyStyles}
            />
          )}
      </View>
      <View style={[styles.arrowBorder]} />
      <View style={[styles.arrow, isSelected && selectedStyles.arrow]} />
    </View>
  );
};

export default createFragmentContainer(
  PriceMarker,
  graphql`
    fragment PriceMarker on Price {
      amount
      currency
    }
  `,
);
