// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +children: ?TranslationType,
|};

const Note = (props: Props): React.Node => {
  if (props.children) {
    return <Text style={styles.note}>{props.children}</Text>;
  }
  return null;
};

export default Note;

const styles = StyleSheet.create({
  note: {
    fontSize: 13,
    color: defaultTokens.paletteInkLight,
  },
});
