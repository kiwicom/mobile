// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import Color from '../Color';
import Price from '../Price';

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: '#fff',
    borderWidth: 2,
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
    borderTopColor: '#ffffff',
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
  price: number,
  currency: string,
|};

const PriceMarker = (props: Props) => {
  const { isSelected } = props;
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
        <Price
          amount={props.price}
          currency={props.currency}
          amountStyle={priceStyles}
          currencyStyle={currencyStyles}
        />
      </View>
      <View style={[styles.arrowBorder]} />
      <View style={[styles.arrow, isSelected && selectedStyles.arrow]} />
    </View>
  );
};

export default PriceMarker;
