// @flow

import * as React from 'react';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { type TranslationType } from '@kiwicom/mobile-localization';

type Props = {|
  +title: TranslationType,
|};

export default function DescriptionTitle(props: Props) {
  const title = React.cloneElement(props.title, {
    textTransform: 'uppercase',
  });
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorTextSecondary,
    marginBottom: 8,
    fontWeight: '800',
    fontSize: 12,
    letterSpacing: 0.4,
  },
});
