// @flow

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  loading: boolean,
  onPress?: () => Promise<void>,
};

export default function GoogleButton({ onPress, loading = false }: Props) {
  if (loading === true) {
    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>Logging in...</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Google Sign in</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
