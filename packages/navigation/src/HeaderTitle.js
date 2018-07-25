// @flow

import * as React from 'react';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';

import type { TranslationType } from '../../localization';

const HeaderTitle = ({ children }: {| children: TranslationType |}) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    color: Color.textDark,
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
