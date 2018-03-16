// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import Touchable from '../Touchable';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  children: React.Node,
  onPress?: Function,
  style?: StylePropType,
|};

const createStyle = (extraStyles: StylePropType = {}) => {
  let additionalWrapperStyles = {};

  if (Platform.OS === 'android') {
    additionalWrapperStyles = {
      marginHorizontal: 8,
      elevation: 1,
      borderRadius: 3,
    };
  }

  return StyleSheet.create({
    wrapper: {
      backgroundColor: '#fff',
      marginVertical: 3,
      paddingVertical: 10,
      paddingHorizontal: 10,
      ...additionalWrapperStyles,
      ...extraStyles,
    },
  });
};

export default function SimpleCard(props: Props) {
  const style = createStyle(props.style);

  if (props.onPress) {
    return (
      <Touchable style={style.wrapper} onPress={props.onPress}>
        {props.children}
      </Touchable>
    );
  }

  return <View style={style.wrapper}>{props.children}</View>;
}
