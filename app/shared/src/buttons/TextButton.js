// @flow

import * as React from 'react';
import { type TranslationType } from '@kiwicom/mobile-localization';

import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';
import ButtonTitle from './ButtonTitle';
import Button from './Button';

type Props = {|
  title: TranslationType,
  onPress?: () => void,
|};

/**
 * Button with custom translated title.
 */
export default function TextButton(props: Props) {
  return (
    <Button onPress={props.onPress}>
      <ButtonTitle style={styleSheet.buttonText} text={props.title} />
    </Button>
  );
}

const styleSheet = StyleSheet.create({
  buttonText: {
    color: Color.white,
  },
});
