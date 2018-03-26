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
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import Distance from './HotelDistance';
import type { HotelTitle as HotelTitleType } from './__generated__/HotelTitle.graphql';

type Props = {|
  data: HotelTitleType,
|};

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: Color.textDark,
    android: {
      fontSize: 15,
    },
    ios: {
      fontSize: 14,
    },
  },
  rating: {
    color: Color.grey.$600,
    fontSize: 9,
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
      lineHeight: 13,
    },
    ios: {
      fontSize: 12,
      lineHeight: 12,
    },
  },
});

function HotelTitle({ data }: Props) {
  const hotelName = idx(data, _ => _.hotel.name) || '';
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
      <Text style={style.title}>
        <DummyTranslation id={`${hotelName} `} />
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
