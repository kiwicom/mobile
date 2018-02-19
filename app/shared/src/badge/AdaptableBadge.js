// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { type StylePropType } from '@kiwicom/react-native-app-shared';

import Color from '../Color';

type Props = {|
  text: string,
  style?: StylePropType,
  textStyle?: StylePropType,
|};

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: Color.grey.$500,
  },
  text: {
    color: '#fff',
  },
});

/**
 * This badge automatically adapt width based on the text length inside so the
 * result looks like this:
 *
 * .----------.
 * | VERIFIED |
 * `----------`
 *
 * And it expands with long text:
 *
 * .-------------------------------------------------.
 * | UNVERIFIED with very long text to make it clear |
 * `-------------------------------------------------`
 */
export default function AdaptableBadge(props: Props) {
  return (
    <View style={[style.container, props.style]}>
      <Text style={[style.text, props.textStyle]}>{props.text}</Text>
    </View>
  );
}
