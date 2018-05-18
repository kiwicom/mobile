// @flow

import * as React from 'react';
import { View } from 'react-native';

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
    backgroundColor: '#fff',
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
