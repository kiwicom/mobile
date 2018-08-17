// @flow strict

import * as React from 'react';
import { StyleSheet, type StylePropType } from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +style?: StylePropType,
  +children: React.Node,
|};

export default function Row(props: Props) {
  return (
    <View onPress={this.onPress} style={[styles.row, props.style]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: defaultTokens.paletteWhite,
    marginBottom: 5,
    paddingHorizontal: 11,
    paddingVertical: 20,
    flexDirection: 'row',
  },
});
