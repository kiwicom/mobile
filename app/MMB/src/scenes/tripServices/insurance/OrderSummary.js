// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Text as NativeText } from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

function Text({ children }) {
  return <NativeText style={styleSheet.text}>{children}</NativeText>;
}

function Price({ children }) {
  return <NativeText style={styleSheet.price}>{children}</NativeText>;
}

export default function OrderSummary() {
  return (
    <View style={styleSheet.wrapper}>
      <Text>
        <Translation passThrough="TODO" />
      </Text>
      <Price>
        <Translation passThrough="TODO" />
      </Price>

      <SeparatorFullWidth />

      <Text>
        <Translation id="mmb.trip_services.order.total" />
      </Text>
      <Price>
        <Translation passThrough="TODO" />
      </Price>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Color.ink.normal,
    padding: 10,
  },
  text: {
    color: Color.textLight,
  },
  price: {
    color: Color.white,
  },
});
