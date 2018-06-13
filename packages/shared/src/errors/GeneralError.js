// @flow

import * as React from 'react';
import { View } from 'react-native';
import type { TranslationType } from '@kiwicom/mobile-localization';

import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  // error message visible by user
  +errorMessage: TranslationType,
|};

export default function GeneralError({ errorMessage }: Props) {
  return (
    <View style={styleSheet.wrapper}>
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
  },
  text: {
    textAlign: 'center',
  },
});
