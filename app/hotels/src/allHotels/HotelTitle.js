// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { Text, View, StyleSheet } from 'react-native';
import { Color, Price, Stars } from '@kiwicom/react-native-app-common';

import Distance from './HotelDistance';
import type { HotelTitle as HotelTitleType } from './__generated__/HotelTitle.graphql';

type Props = {|
  data: HotelTitleType,
|};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 12,
    color: Color.grey.$600,
  },
  price: {
    fontWeight: 'bold',
    color: Color.brand,
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
    <View style={style.wrapper}>
      <Text>
        <Text style={style.title}>{hotelName}</Text>{' '}
        <Text style={style.rating}>
          <Stars rating={hotelStars} />
        </Text>
      </Text>
      <Distance hotel={data && data.hotel} />
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
