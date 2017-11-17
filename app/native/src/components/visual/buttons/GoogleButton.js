// @flow

import * as React from 'react';
import { StyleSheet } from 'react-native';

import Button from './Button';

type Props = {|
  loading: boolean,
  onPress: () => Promise<void>,
|};

export default function GoogleButton({ onPress, loading = false }: Props) {
  if (loading === true) {
    return (
      <Button
        title="Logging in..."
        onPress={onPress}
        touchable={false}
        styles={styles}
      />
    );
  } else {
    return <Button title="Google Sign in" onPress={onPress} styles={styles} />;
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ca0000',
  },
});
