// @flow

import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

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
  const styles = createStyles(disableDecrement, disableIncrement);

  return (
    <View style={styles.buttonsGroup}>
      <Button
        title="−" // minus sign, not hyphen
        onPress={!disableDecrement ? props.onDecrement : undefined}
        styles={{
          button: styles.decrementButton,
          buttonText: styles.decrementButtonText,
        }}
      />
      <Button
        title="+"
        onPress={!disableIncrement ? props.onIncrement : undefined}
        styles={{
          button: styles.incrementButton,
          buttonText: styles.incrementButtonText,
        }}
      />
    </View>
  );
}

function createStyles(disableDecrement: boolean, disableIncrement: boolean) {
  const buttonStyle = {
    borderWidth: 1,
    borderColor: Color.brand,
    backgroundColor: '#fff',
    height: 26,
    width: 40,
    borderRadius: 3,
    padding: 2,
    flexGrow: 0,
  };
  const buttonText = {
    flex: 1,
    lineHeight: Platform.OS === 'ios' ? 24 : 20,
    color: Color.brand,
    fontSize: 28,
    fontWeight: '300',
  };
  return StyleSheet.create({
    buttonsGroup: {
      flexDirection: 'row',
    },
    incrementButton: {
      ...buttonStyle,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    decrementButton: {
      ...buttonStyle,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRightWidth: 0,
    },
    incrementButtonText: {
      ...buttonText,
      opacity: disableIncrement ? 0.55 : 1,
    },
    decrementButtonText: {
      ...buttonText,
      opacity: disableDecrement ? 0.55 : 1,
    },
  });
}
