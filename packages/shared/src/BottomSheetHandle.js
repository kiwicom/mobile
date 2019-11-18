// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  +style?: StylePropType,
|};

export default function Handle(props: Props) {
  // $FlowFixMe Errors after moving rn modules from untyped to declarations
  return <View style={[styles.handle, props.style]} />;
}

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 3,
    borderBottomColor: defaultTokens.paletteInkLight,
    borderRadius: parseInt(defaultTokens.borderRadiusNormal, 10),
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});
