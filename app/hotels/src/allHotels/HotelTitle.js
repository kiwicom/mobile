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
  const hotelName = idx(data, _ => _.hotel.name);
  const hotelStars = idx(data, _ => _.hotel.rating.stars);

  const price = {
    ...{
      // default null object
      amount: null,
      currency: null,
    },
    ...data.price,
  };

  return (
    <React.Fragment>
      <Text style={style.title}>
        <Translation passThrough={`${hotelName || ''} `} />
        <Text style={style.rating}>
          <Stars rating={hotelStars} />
        </Text>
      </Text>

      <View style={style.distance}>
        <Distance hotel={data && data.hotel} />
      </View>
      <Price
        amount={price.amount}
        currency={price.currency}
        style={style.price}
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  HotelTitle,
  graphql`
    fragment HotelTitle on HotelAvailability {
      price {
        amount
        currency
      }
      hotel {
        ...HotelDistance_hotel
        name
        rating {
          stars
        }
      }
    }
  `,
);

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: defaultTokens.colorTextAttention,
    android: {
      fontSize: 15,
    },
    ios: {
      fontSize: 14,
    },
  },
  rating: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 9,
  },
  distance: {
    marginVertical: 6,
  },
  price: {
    fontWeight: 'bold',
    color: defaultTokens.paletteProductNormal,
    letterSpacing: 0,
    android: {
      fontSize: 13,
      lineHeight: 13,
    },
    ios: {
      fontSize: 12,
      lineHeight: 12,
    },
  },
});
