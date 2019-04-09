// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  Price,
  Stars,
  Text,
  StyleSheet,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Distance from './HotelDistance';
import type { HotelTitle_data as HotelTitleType } from './__generated__/HotelTitle_data.graphql';

type Props = {|
  +data: HotelTitleType,
|};

function HotelTitle({ data }: Props) {
  const hotelName = data.name ?? '';
  const hotelStars = data.rating?.stars;

  return (
    <React.Fragment>
      <Text style={style.title}>
        <Translation passThrough={`${hotelName} `} />
        <Text style={style.rating}>
          <Stars rating={hotelStars} />
        </Text>
      </Text>

      <View style={style.distance}>
        <Distance hotel={data} />
      </View>
      <Price
        amount={data.money?.amount}
        currency={data.money?.currencyId}
        style={style.price}
      />
    </React.Fragment>
  );
}

export default createFragmentContainer(HotelTitle, {
  data: graphql`
    fragment HotelTitle_data on AllHotelsInterface {
      money {
        amount
        currencyId
      }
      ...HotelDistance_hotel
      name
      rating {
        stars
      }
    }
  `,
});

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
