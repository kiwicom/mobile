// @flow strict

import * as React from 'react';
import { Button } from '@kiwicom/orbit-react-native';

import Translation from '../Translation';
import ButtonTitle from './ButtonTitle';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +onPress: () => void,
|};

export default function CloseButton({ onPress }: Props) {
  return (
    <Button onClick={onPress} type="secondary">
      <ButtonTitle style={styles.text} text={<Translation id="shared.button.close" />} />
    </Button>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    fontSize: 16,
  },
});
