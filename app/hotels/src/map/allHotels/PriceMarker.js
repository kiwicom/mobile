// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Price, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { PriceMarker as PriceMarkerData } from './__generated__/PriceMarker.graphql';

type Props = {|
  +isSelected?: boolean,
  +data: PriceMarkerData,
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

  return (
    <View>
      <View style={bubbleStyles}>
        {price &&
          price.amount &&
          price.currency && (
            <Price
              amount={price.amount}
              currency={price.currency}
              style={priceStyles}
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

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: defaultTokens.paletteWhite,
    borderRadius: 3,
    borderColor: defaultTokens.paletteCloudNormal,
    borderWidth: 1,
  },
  price: {
    color: defaultTokens.paletteInkDark,
    fontSize: 12,
    fontWeight: 'bold',
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 8,
    borderTopColor: defaultTokens.paletteCloudNormal,
    borderRadius: 3,
    alignSelf: 'center',
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 7,
    borderTopColor: defaultTokens.paletteWhite,
    alignSelf: 'center',
    marginTop: -18,
  },
});

const selectedStyles = StyleSheet.create({
  bubble: {
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
  price: {
    color: defaultTokens.paletteWhite,
  },
  arrow: {
    borderTopColor: defaultTokens.paletteBlueNormal,
  },
});
