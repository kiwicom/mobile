// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  Price,
  Text,
  type OnLayout,
  Translation,
} from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +text: React.Element<typeof Translation>,
  +price: React.Element<typeof Price>,
|};

const SPACING = 5;

const SummaryRow = ({ text, price }: Props) => {
  const [containerWidth, setContainerWidth] = React.useState(null);
  const [priceWidth, setPriceWidth] = React.useState(null);

  function onContainerLayout(event: OnLayout) {
    setContainerWidth(event.nativeEvent.layout.width);
  }

  function onPriceLayout(event: OnLayout) {
    setPriceWidth(event.nativeEvent.layout.width);
  }

  const maxWidth =
    containerWidth != null && priceWidth != null
      ? containerWidth - priceWidth - SPACING
      : 0;

  return (
    <View style={styles.row} onLayout={onContainerLayout}>
      <Text style={[styles.text, { maxWidth }]} numberOfLines={1}>
        {text}
      </Text>
      <View onLayout={onPriceLayout}>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
  price: {
    color: defaultTokens.colorTextAttention,
  },
});

export default SummaryRow;
