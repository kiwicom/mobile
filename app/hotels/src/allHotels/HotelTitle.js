// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import {
  Color,
  Price,
  Stars,
  Text,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';

import Distance from './HotelDistance';
import type { HotelTitle as HotelTitleType } from './__generated__/HotelTitle.graphql';

type Props = {|
  data: HotelTitleType,
|};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#30363d',
    android: {
      fontSize: 15,
      lineHeight: 18,
    },
    ios: {
      fontSize: 14,
      lineHeight: 16,
    },
  },
  rating: {
    color: Color.grey.$600,
    android: {
      fontSize: 13,
    },
    ios: {
      fontSize: 12,
    },
  },
  distance: {
    marginVertical: 6,
  },
  price: {
    fontWeight: 'bold',
    color: Color.brand,
    letterSpacing: 0,
    android: {
      fontSize: 13,
      lineHeight: 12,
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
    <View style={style.wrapper}>
      <Text>
        <Text style={style.title}>{hotelName}</Text>{' '}
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
