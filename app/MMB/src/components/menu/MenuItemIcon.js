// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';

type Props = {|
  invertColors: boolean,
  iconComponent: React.Element<typeof TextIcon>,
|};

export default function MenuItemIcon(props: Props) {
  return (
    <View style={styleSheet.iconWrapper}>
      {React.cloneElement(props.iconComponent, {
        style: [
          styleSheet.icon,
          props.invertColors ? styleSheet.iconInverted : null,
        ],
      })}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  iconWrapper: {
    paddingRight: 15,
    justifyContent: 'center',
  },
  icon: {
    android: {
      fontSize: 15,
    },
    ios: {
      fontSize: 14,
      color: Color.grey.$600,
    },
  },
  iconInverted: {
    ios: {
      color: Color.white,
    },
  },
});
