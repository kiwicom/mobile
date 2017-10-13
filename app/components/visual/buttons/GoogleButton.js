// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  onPress?: () => Promise<void>,
};

export default function GoogleButton({ onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Google Sign in</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 4,
    backgroundColor: 'rgb(202, 0, 0)',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
