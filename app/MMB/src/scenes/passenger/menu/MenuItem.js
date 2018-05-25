// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  description: React.Element<typeof Translation>,
|};

/**
 * This is basically a copy of /components/MenuItem
 * But it has a light title instead of bold
 * Example:
 *
 * .------------------------------.
 * |                              |
 * |  IC    Light Title           |
 * |  ON    Description           |
 * |                              |
 * `------------------------------`
 *
 */
export default function MenuItem(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.middleWrapper}>
        <Text style={styles.title}>{props.title}</Text>
        {props.description}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 15,
    android: {
      backgroundColor: Color.white,
      borderStartWidth: 5,
      borderStartColor: Color.white,
    },
    ios: {
      backgroundColor: Color.white,
    },
  },
  middleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: Color.textLight,
  },
});
