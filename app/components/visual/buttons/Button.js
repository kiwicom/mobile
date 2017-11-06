// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Color from '../../../styles/Color';

type Props = {
  onPress: Function,
  title: string,
};

export default function Button({ onPress, title }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
