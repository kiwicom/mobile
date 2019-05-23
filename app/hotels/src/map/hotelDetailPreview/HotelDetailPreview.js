// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  Price,
  Text,
  Stars,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HotelDetailContext, {
  type State as HotelDetailState,
} from './HotelDetailPreviewContext';
import HotelReviewScore from '../../components/HotelReviewScore';

type Props = {|
  +name?: ?string,
  +currency?: ?string,
  +amount?: ?string,
  +thumbnailUrl?: ?string,
  +stars?: ?number,
  +score?: ?number,
|};

export default function HotelDetailPreview({
  name,
  amount,
  currency,
  thumbnailUrl: image,
  score,
  stars: propsStars,
}: Props) {
  const { containerWidth }: HotelDetailState = React.useContext(
    HotelDetailContext,
  );
  const stars = propsStars ?? 0;

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      <View>
        <NetworkImage
          style={styles.image}
          source={{
            uri: image,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.hotelName} numberOfLines={1}>
          <Translation passThrough={name} />
        </Text>
        <View style={styles.row}>
          <View>
            {stars > 0 && <Stars rating={stars} style={styles.stars} />}
            <Price amount={amount} currency={currency} style={styles.price} />
          </View>
          <HotelReviewScore score={score} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 3,
    marginEnd: 10,
  },
  description: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'baseline',
  },
  hotelName: {
    fontWeight: '500',
  },
  price: {
    color: defaultTokens.paletteProductNormal,
    fontWeight: 'bold',
    fontSize: 12,
    android: {
      lineHeight: 13,
    },
  },
  stars: {
    color: defaultTokens.paletteInkLight,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
