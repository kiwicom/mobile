// @flow

import * as React from 'react';
import { Text, Color, StyleSheet } from '@kiwicom/mobile-shared';
import { type TranslationType } from '@kiwicom/mobile-localization';

type Props = {|
  children: TranslationType,
|};

export default function Message(props: Props): React.Node {
  return <Text style={styles.error}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: Color.red.dark,
  },
});
