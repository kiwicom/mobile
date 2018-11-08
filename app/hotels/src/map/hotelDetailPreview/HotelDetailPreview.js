// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  NetworkImage,
  Price,
  Text,
  Stars,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import {
  HotelDetailConsumer,
  type State as HotelDetailState,
} from './HotelDetailPreviewContext';
import HotelReviewScore from '../../components/HotelReviewScore';

type Props = {|
  +name?: ?string,
  +price?: ?{|
    +currency?: ?string,
    +amount?: ?number,
  |},
  +thumbnailUrl?: ?string,
  +stars?: ?number,
  +score?: ?number,
|};

export default class HotelDetailPreview extends React.Component<Props> {
  renderInner = ({ containerWidth }: HotelDetailState) => {
    const name = this.props?.name;
    const price = this.props?.price;
    const image = this.props?.thumbnailUrl;
    const stars = this.props?.stars ?? 0;
    const score = this.props?.score;
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
              <Price price={price} style={styles.price} />
            </View>
            <HotelReviewScore score={score} />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return <HotelDetailConsumer>{this.renderInner}</HotelDetailConsumer>;
  }
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
