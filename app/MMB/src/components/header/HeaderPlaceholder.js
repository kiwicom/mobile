// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

type Props = {|
  +children?: React.Node,
|};

export default function HeaderPlaceholder(props: Props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.brandLight,
    height: 140,
    width: '100%',
    overflow: 'hidden',
  },
});
