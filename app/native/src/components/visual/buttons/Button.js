// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Color from '../../../styles/Color';

type Props = {|
  onPress: Function,
  title: string,
  styles?: {
    button?: Object,
    buttonText?: Object,
  },
  touchable?: boolean,
|};

export default function Button({
  onPress,
  title,
  styles,
  touchable = true,
}: Props) {
  const buttonView = (
    <View style={[defaultStyles.button, styles && styles.button]}>
      <Text style={[defaultStyles.buttonText, styles && styles.buttonText]}>
        {title}
      </Text>
    </View>
  );

  if (touchable) {
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
