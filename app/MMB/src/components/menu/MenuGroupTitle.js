// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, Color, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
|};

export default function MenuGroupTitle(props: Props) {
  return (
    <View style={styleSheet.titleWrapper}>
      <Text style={styleSheet.title}>{props.title}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  titleWrapper: {
    paddingBottom: 11,
    paddingLeft: 15,
    android: {
      paddingTop: 11,
    },
    ios: {
      paddingTop: 22,
    },
  },
  title: {
    color: Color.textLight,
    android: {
      fontSize: 17,
    },
  },
});
