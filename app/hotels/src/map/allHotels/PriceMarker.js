// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Price, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { PriceMarker_data as PriceMarkerData } from './__generated__/PriceMarker_data.graphql';

type Props = {|
  +isSelected?: boolean,
  +data: ?PriceMarkerData,
|};

const PriceMarker = (props: Props) => {
  const { isSelected, data } = props;
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
        {props.data != null && (
          <Price
            amount={data?.amount}
            currency={data?.currencyId}
            style={priceStyles}
          />
        )}
      </View>
      <View style={[styles.arrowBorder]} />
      <View style={[styles.arrow, isSelected && selectedStyles.arrow]} />
    </View>
  );
};

export default createFragmentContainer(PriceMarker, {
  data: graphql`
    fragment PriceMarker_data on Money {
      amount
      currencyId
    }
  `,
});

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
    fontSize: 14,
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
