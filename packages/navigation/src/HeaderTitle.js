// @flow

import * as React from 'react';
import { StyleSheet, Text, type TranslationType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

const HeaderTitle = ({ children }: {| children: TranslationType |}) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorTextAttention,
    fontWeight: '600',
    android: {
      fontSize: 18,
    },
    ios: {
      fontSize: 17,
    },
  },
});

export default HeaderTitle;
