// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';
import Color from '../Color';

type Props = {|
  onIncrement: () => void,
  onDecrement: () => void,
  number: number,
  min?: number,
  max?: number,
|};

export default function IncrementDecrementButtons(props: Props) {
  const disableDecrement = props.number === props.min;
  const disableIncrement = props.number === props.max;
  return (
    <View style={styles.buttons}>
      <Button
        title="−" // minus sign, not hyphen
        onPress={!disableDecrement ? props.onDecrement : undefined}
        styles={{
          button: [styles.button, styles.decrementButton],
          buttonText: [
            styles.buttonText,
            disableDecrement && styles.buttonDisabled,
          ],
        }}
      />
      <Button
        title="+"
        onPress={!disableIncrement ? props.onIncrement : undefined}
        styles={{
          button: [styles.button, styles.incrementButton],
          buttonText: [
            styles.buttonText,
            disableIncrement && styles.buttonDisabled,
          ],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: Color.brand,
    backgroundColor: '#fff',
    height: 26,
    width: 40,
    borderRadius: 3,
    padding: 2,
    flexGrow: 0,
  },
  buttonText: {
    flex: 1,
    lineHeight: 24,
    color: Color.brand,
    fontSize: 28,
    fontWeight: '300',
  },
  incrementButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  decrementButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  buttonDisabled: {
    opacity: 0.55,
  },
});
