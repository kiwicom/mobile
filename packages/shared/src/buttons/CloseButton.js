// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

import Button from './Button';
import ButtonTitle from './ButtonTitle';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +onPress: () => void,
|};

export default function CloseButton({ onPress }: Props) {
  return (
    <Button onPress={onPress} style={styles.button}>
      <ButtonTitle
        style={styles.text}
        text={<Translation id="shared.button.close" />}
      />
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
