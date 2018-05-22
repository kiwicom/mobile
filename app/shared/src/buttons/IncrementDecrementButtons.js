// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import Text from '../Text';
import Color from '../Color';
import Touchable from '../Touchable';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

const Button = ({
  text,
  touchable,
  onPress,
  style,
}: {|
  text: string,
  touchable: boolean,
  onPress: () => void,
  style?: StylePropType,
|}) => {
  const inner = (
    <View
      style={[styleSheet.button, touchable ? null : styleSheet.buttonDisabled]}
    >
      <Text
        style={[
          styleSheet.buttonText,
          touchable ? null : styleSheet.buttonTextDisabled,
          style,
        ]}
      >
        <Translation passThrough={text} />
      </Text>
    </View>
  );

  if (touchable) {
    return <Touchable onPress={onPress}>{inner}</Touchable>;
  }

  return inner;
};

export default function IncrementDecrementButtons(props: {|
  onIncrement: () => void,
  onDecrement: () => void,
  number: number,
  min?: number,
  max?: number,
|}) {
  const disableDecrement = props.number === props.min;
  const disableIncrement = props.number === props.max;

  return (
    <View style={styleSheet.buttonsGroup}>
      <View style={styleSheet.buttonLeft}>
        <Button
          text="–"
          touchable={!disableDecrement}
          onPress={props.onDecrement}
          style={styleSheet.minusText}
        />
      </View>
      <Button
        text="+"
        touchable={!disableIncrement}
        onPress={props.onIncrement}
      />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  buttonsGroup: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Color.inputBackground,
    height: 29,
    width: 94, // 47 * 2 (see button)
    borderRadius: 4,
    backgroundColor: Color.white,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 47, // 94 / 2 (see buttonsGroup)
  },
  buttonDisabled: {
    backgroundColor: Color.inputBackground,
  },
  buttonLeft: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: Color.inputBackground,
    paddingBottom: 0,
  },
  buttonText: {
    color: Color.textDark,
    fontSize: 25,
    ios: {
      paddingBottom: 33,
    },
    android: {
      paddingBottom: 3,
    },
  },
  buttonTextDisabled: {
    color: Color.textLight,
  },
  minusText: {
    android: {
      paddingBottom: 1,
    },
    ios: {
      paddingBottom: 32,
    },
  },
});
