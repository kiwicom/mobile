// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { StylePropType } from '@kiwicom/react-native-app-shared';

import Text from '../Text';
import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  text: string,
  style?: StylePropType,
  textStyle?: StylePropType,
  icon?: React.Node,
|};

const style = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: Color.grey.$500,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
      {props.icon}
      <Text style={[style.text, props.textStyle]}>{props.text}</Text>
    </View>
  );
}
