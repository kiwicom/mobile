// @flow

import * as React from 'react';
import { View } from 'react-native';

import Color from './Color';
import StyleSheet from './PlatformStyleSheet';
import Touchable from './Touchable';
import type { StylePropType } from '../types/Styles';

type Props = {|
  children: React.Node,
  onPress?: Function,
  style?: StylePropType,
|};

export default function SimpleCard(props: Props) {
  if (props.onPress) {
    return (
      <Touchable style={[styles.wrapper, props.style]} onPress={props.onPress}>
        {props.children}
      </Touchable>
    );
  }

  return <View style={[styles.wrapper, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8edf1',
    marginVertical: 3,
    padding: 10,
    android: {
      marginHorizontal: 8,
      elevation: 1,
      borderRadius: 3,
      overflow: 'hidden',
    },
  },
});
