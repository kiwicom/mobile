// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, TextIcon, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  icon: React.Element<typeof TextIcon>,
  description?: React.Element<typeof Translation>,
|};

/**
 * With optional description:
 *
 * .------------------------------.
 * |                              |
 * |  IC    Bold Title            |
 * |  ON    Optional description  |
 * |                              |
 * `------------------------------`
 *
 * Without description:
 *
 * .------------------------------.
 * |                              |
 * |  ICON  Bold Title            |
 * |                              |
 * `------------------------------`
 */
export default function MenuItem(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      <View style={styleSheet.icon}>{props.icon}</View>
      <View style={styleSheet.contentRow}>
        <Text style={styleSheet.title}>{props.title}</Text>
        {props.description && (
          <Text style={styleSheet.description}>{props.description}</Text>
        )}
      </View>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    backgroundColor: Color.white,
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 15,
  },
  icon: {
    paddingRight: 15,
    justifyContent: 'center',
  },
  contentRow: {},
  title: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: Color.textLight,
  },
});
