// @flow

import * as React from 'react';
import { View } from 'react-native';

import Color from '../Color';
import TouchableItem from '../TouchableItem';
import StyleSheet from '../PlatformStyleSheet';
import Text from '../Text';

type Props = {|
  title: string,
  onPress: Function,
|};

export default function LinkButton(props: Props) {
  return (
    <TouchableItem accessibilityComponentType="button" onPress={props.onPress}>
      <View style={styleSheet.view}>
        <Text style={styleSheet.text}>{props.title}</Text>
      </View>
    </TouchableItem>
  );
}

const styleSheet = StyleSheet.create({
  view: {
    backgroundColor: 'transparent',
  },
  text: {
    color: Color.brand,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
