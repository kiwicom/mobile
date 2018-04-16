// @flow

import * as React from 'react';
import { StyleSheet, Color, type StylePropType } from '@kiwicom/mobile-shared';
import { View } from 'react-native';

const styles = StyleSheet.create({
  row: {
    backgroundColor: Color.white,
    marginBottom: 5,
    paddingHorizontal: 11,
    paddingVertical: 20,
    flexDirection: 'row',
  },
});

type Props = {|
  style?: StylePropType,
  children: React.Node,
|};

export default function Row(props: Props) {
  return (
    <View onPress={this.onPress} style={[styles.row, props.style]}>
      {props.children}
    </View>
  );
}
