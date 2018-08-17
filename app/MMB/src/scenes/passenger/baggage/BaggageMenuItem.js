// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, TextIcon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +bagCount: number,
  +icon: React.Element<typeof TextIcon>,
  +value: React.Node,
|};

export default function BaggageMenuItem(props: Props) {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={[styles.row, styles.countContainer]}>
        <Text style={styles.count}>
          <Translation passThrough={`${props.bagCount}×`} />
        </Text>
        {props.icon}
      </View>
      {props.value}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: defaultTokens.paletteWhite,
    alignItems: 'center',
  },
  countContainer: {
    marginEnd: 8,
  },
  count: {
    marginEnd: 3,
  },
});
