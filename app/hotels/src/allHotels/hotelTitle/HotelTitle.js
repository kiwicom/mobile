// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import { Color, Price, StyleSheet } from '@kiwicom/react-native-app-shared';

import Distance from '../HotelDistance';
import Title from './Title';
import type { HotelTitle as HotelTitleType } from './__generated__/HotelTitle.graphql';

type Props = {|
  data: HotelTitleType,
|};

const style = StyleSheet.create({
  distance: {
    marginVertical: 6,
  },
  price: {
    fontWeight: 'bold',
    color: Color.brand,
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
    <View>
      <Title hotelName={hotelName} hotelStars={hotelStars} />
      <View style={style.distance}>
        <Distance hotel={data && data.hotel} />
      </View>
      <Price
        amount={price.amount}
        currency={price.currency}
        style={style.price}
      />
    </View>
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
