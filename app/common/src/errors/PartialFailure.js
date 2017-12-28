// @flow

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Color } from '@kiwicom/react-native-app-common';

type Props = {|
  children: React.Node,
|};

export default function PartialFailure({ children }: Props) {
  const style = createStyle();
  return [
    children,
    <View key="warning" style={style.container}>
      <Text>
        Some parts of the page may be missing due to partial server error.
      </Text>
    </View>,
  ];
}

function createStyle() {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: Color.red.$100,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
  });
}
