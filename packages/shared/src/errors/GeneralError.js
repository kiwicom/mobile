// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import type { TranslationType } from '../../types/Translation';

type Props = {|
  // error message visible by user
  +errorMessage: TranslationType,
  +testID?: string,
|};

export default function GeneralError({ errorMessage, testID }: Props) {
  return (
    <View style={styleSheet.wrapper} testID={testID}>
      <Text style={styleSheet.text}>{errorMessage}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: defaultTokens.paletteWhite,
  },
  text: {
    textAlign: 'center',
  },
});
