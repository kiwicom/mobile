// @flow

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Color from '../Color';

type Props = {|
  content: string,
|};

export default function ErrorMessage(props: Props) {
  return (
    <View style={styles.container}>
      <Text>{props.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.red.$100,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
