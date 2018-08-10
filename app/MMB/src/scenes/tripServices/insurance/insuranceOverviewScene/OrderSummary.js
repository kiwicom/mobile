// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Color,
  Text as NativeText,
  Price,
} from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

function Text({ children }) {
  return <NativeText style={styleSheet.text}>{children}</NativeText>;
}

export default function OrderSummary() {
  return (
    <View style={styleSheet.wrapper}>
      <View style={styleSheet.row}>
        <View style={styleSheet.item}>
          <Text>
            <Translation passThrough="TODO" />
          </Text>
        </View>
        <Price amount={-1} currency="WTF" style={styleSheet.price} />
      </View>

      <SeparatorFullWidth color={Color.textLight} />

      <View style={styleSheet.row}>
        <View style={styleSheet.item}>
          <Text>
            <Translation id="mmb.trip_services.order.total" />
          </Text>
        </View>
        <Price amount={-1} currency="WTF" style={styleSheet.price} />
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Color.ink.normal,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  item: {
    flexGrow: 1,
  },
  text: {
    color: Color.textLight,
  },
  price: {
    color: Color.white,
  },
});
