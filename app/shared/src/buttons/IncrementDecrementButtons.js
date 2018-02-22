// @flow

import * as React from 'react';
import { View } from 'react-native';

import Text from '../Text';
import Color from '../Color';
import TouchableItem from '../TouchableItem';
import StyleSheet from '../PlatformStyleSheet';

const Button = ({
  text,
  touchable,
  onPress,
}: {|
  text: string,
  touchable: boolean,
  onPress: () => void,
|}) => {
  const inner = (
    <View style={styleSheet.button}>
      <Text
        style={[
          styleSheet.buttonText,
          {
            opacity: touchable ? 1 : 0.5,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );

  if (touchable) {
    return (
      <TouchableItem activeOpacity={0.6} onPress={onPress}>
        {inner}
      </TouchableItem>
    );
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
    borderColor: Color.brand,
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
  buttonLeft: {
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: Color.brand,
  },
  buttonText: {
    color: Color.brand,
    fontSize: 25,
    // this helps to vertically align "+" and "-" on both platforms
    android: {
      lineHeight: 16,
    },
    ios: {
      lineHeight: 25,
    },
  },
});
