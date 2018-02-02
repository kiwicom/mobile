// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import Color from '../Color';

type Props = {|
  children: React.Node,
  type: 'error',
|};

export default function Message(props: Props): React.Node {
  return <Text style={styles[props.type]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: Color.red.$900,
  },
});
