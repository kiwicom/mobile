// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import brandImage from './bookingLogo.png';

export default function BrandLabel() {
  return (
    <View style={styleSheet.wrapper}>
      <Text style={styleSheet.poweredBy}>
        <Translation id="single_hotel.powered_by" />
      </Text>
      <Image
        style={styleSheet.image}
        resizeMode="contain"
        source={brandImage}
      />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poweredBy: {
    color: Color.textLight,
  },
  image: {
    marginTop: 2,
    height: 15,
  },
});
