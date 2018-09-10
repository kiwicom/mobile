// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import Touchable from './Touchable';
import type { StylePropType } from '../types/Styles';

type Props = {|
  +children: React.Node,
  +onPress?: () => void,
  +style?: StylePropType,
  +delayPressIn?: number,
|};

export default function SimpleCard(props: Props) {
  if (props.onPress) {
    return (
      <Touchable
        style={[styles.wrapper, props.style]}
        onPress={props.onPress}
        delayPressIn={props.delayPressIn}
      >
        {props.children}
      </Touchable>
    );
  }

  return <View style={[styles.wrapper, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: defaultTokens.paletteWhite,
    borderStyle: 'solid',
    padding: 10,
    android: {
      marginHorizontal: 8,
      elevation: 1,
      borderRadius: 3,
      overflow: 'hidden',
    },
    ios: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: defaultTokens.paletteCloudNormal,
    },
  },
});
