// @flow strict

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Button } from '@kiwicom/universal-components';

import ButtonTitle from './ButtonTitle';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +onPress: () => void,
|};

export default function CloseButton({ onPress, style }: Props) {
  return (
    <Button onPress={onPress} type="secondary">
      <ButtonTitle
        style={styles.text}
        text={<Translation id="shared.button.close" />}
      />
    </Button>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
