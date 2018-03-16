// @flow

import * as React from 'react';
import { View } from 'react-native';

import Color from '../Color';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import ButtonText from './ButtonText';

type Props = {|
  title: string,
  onPress: Function,
|};

export default function LinkButton(props: Props) {
  return (
    <Touchable accessibilityComponentType="button" onPress={props.onPress}>
      <View style={styleSheet.view}>
        <ButtonText style={styleSheet.text} text={props.title} />
      </View>
    </Touchable>
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
