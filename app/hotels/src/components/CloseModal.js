// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { CloseButton, StyleSheet, Device } from '@kiwicom/mobile-shared';

type Props = {|
  +onPress: () => void,
|};

export default function CloseModal(props: Props) {
  return (
    <View style={styles.button}>
      <CloseButton onPress={props.onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: Device.isIPhoneX ? 36 : 8,
    start: 8,
    end: 8,
  },
});
