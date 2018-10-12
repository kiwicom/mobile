// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Price, Stars, Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Distance from './HotelDistance';
import type { HotelTitle as HotelTitleType } from './__generated__/HotelTitle.graphql';

type Props = {|
  +data: HotelTitleType,
|};

function HotelTitle({ data }: Props) {
  const hotelName = idx(data, _ => _.name);
  const hotelStars = idx(data, _ => _.rating.stars);

  const price = data.price || null;

  return (
    <React.Fragment>
      <Text style={style.title}>
        <Translation passThrough={`${hotelName || ''} `} />
        <Text style={style.rating}>
          <Stars rating={hotelStars} />
        </Text>
      </Text>

      <View style={style.distance}>
        <Distance hotel={data} />
      </View>
      <Price price={price} style={style.price} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  HotelTitle,
  graphql`
    fragment HotelTitle on AllHotelAvailabilityHotel {
      price {
        amount
        currency
      }
      ...HotelDistance_hotel
      name
      rating {
        stars
      }
    }
  `,
);

const style = StyleSheet.create({
  title: {
    fontWeight: '600',
    color: defaultTokens.colorTextAttention,
    fontSize: 14,
    lineHeight: 18,
  },
  rating: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 10,
  },
  distance: {
    marginVertical: 6,
  },
  price: {
    fontWeight: 'bold',
    color: defaultTokens.paletteProductNormal,
    letterSpacing: 0,
    fontSize: 14,
    lineHeight: 18,
  },
});
