// @flow strict

import * as React from 'react';
import { TextIcon, Text, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +icon: React.Element<typeof TextIcon>,
  +title: React.Element<typeof Translation>,
|};

export default function TicketHeader(props: Props) {
  const icon = React.cloneElement(props.icon, { style: styles.icon });
  return (
    <View style={styles.header}>
      {icon}
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  icon: {
    color: defaultTokens.colorIconAttention,
    alignSelf: 'center',
    marginEnd: 7,
  },
  headerText: {
    color: defaultTokens.colorTextAttention,
    fontSize: 16,
  },
});
