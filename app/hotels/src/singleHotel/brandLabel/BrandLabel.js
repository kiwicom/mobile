// @flow strict

import * as React from 'react';
import { View, Image } from 'react-native';
import { StyleSheet, Text, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

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
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  poweredBy: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 10,
  },
  image: {
    marginTop: 2,
    height: 14,
  },
});
