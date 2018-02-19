// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { TouchableItem, StyleSheet } from '@kiwicom/react-native-app-shared';

type Props = {|
  children: React.Node,
  onPress?: Function,
|};

const createStyle = () => {
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
      paddingVertical: 12,
      paddingHorizontal: 12,
      ...additionalWrapperStyles,
    },
  });
};

export default function SimpleCard(props: Props) {
  const style = createStyle();

  if (props.onPress) {
    return (
      <TouchableItem style={style.wrapper} onPress={props.onPress}>
        {props.children}
      </TouchableItem>
    );
  }

  return <View style={style.wrapper}>{props.children}</View>;
}
