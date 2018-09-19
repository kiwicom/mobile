// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

import Button from './Button';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +onPress: () => void,
|};

export default function CloseButton({ onPress }: Props) {
  return (
    <Button onPress={onPress} style={styles.button}>
      <Text style={styles.text}>
        <Translation id="shared.button.close" />
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaultTokens.paletteCloudNormal,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
