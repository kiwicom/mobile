// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +invertColors: boolean,
  +iconComponent: React.Element<typeof Icon>,
|};

export default function MenuItemIcon(props: Props) {
  return (
    <View style={styleSheet.iconWrapper}>
      {React.cloneElement(props.iconComponent, {
        style: [
          props.iconComponent.props.style,
          styleSheet.icon,
          props.invertColors ? styleSheet.iconInverted : null,
        ],
      })}
    </View>
  );
}

const styleSheet = StyleSheet.create({
  iconWrapper: {
    paddingEnd: 15,
    justifyContent: 'center',
  },
  icon: {
    android: {
      fontSize: 20,
      height: 20,
      width: 20,
      lineHeight: 20,
    },
    ios: {
      fontSize: 19,
      height: 19,
      width: 19,
      lineHeight: 19,
      color: defaultTokens.colorIconSecondary,
    },
  },
  iconInverted: {
    ios: {
      color: defaultTokens.paletteWhite,
    },
  },
});
