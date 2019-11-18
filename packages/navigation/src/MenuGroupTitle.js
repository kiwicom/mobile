// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { Text, StyleSheet, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  title: React.Element<typeof Translation>,
|};

export default function MenuGroupTitle(props: Props) {
  const title = React.cloneElement(
    props.title,
    Platform.OS === 'ios' ? { textTransform: 'uppercase' } : {},
  );
  return (
    <View style={styleSheet.titleWrapper}>
      <Text style={styleSheet.title}>{title}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  titleWrapper: {
    paddingBottom: 11,
    paddingStart: 15,
    android: {
      paddingTop: 11,
    },
    ios: {
      paddingTop: 22,
    },
  },
  title: {
    color: defaultTokens.colorTextSecondary,
    fontWeight: '800',
    android: {
      fontSize: 17,
    },
  },
});
