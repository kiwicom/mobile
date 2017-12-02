// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Color from '../Color';

type Props = {|
  title: string,
  onPress?: Function,
  styles?: {
    button?: Object,
    buttonText?: Object,
  },
|};

export default function Button({ onPress, title, styles }: Props) {
  const buttonView = (
    <View style={[defaultStyles.button, styles && styles.button]}>
      <Text style={[defaultStyles.buttonText, styles && styles.buttonText]}>
        {title}
      </Text>
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{buttonView}</TouchableOpacity>;
  } else {
    return buttonView;
  }
}

const defaultStyles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 2,
    backgroundColor: Color.brand,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
