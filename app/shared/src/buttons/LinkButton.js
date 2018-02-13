// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';

import Button, { type Props as ButtonProps } from './Button';
import Color from '../Color';

export default function LinkButton(buttonProps: ButtonProps) {
  return (
    <Button {...buttonProps} styles={{ ...styles, ...buttonProps.styles }} />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: Color.brand,
  },
});
