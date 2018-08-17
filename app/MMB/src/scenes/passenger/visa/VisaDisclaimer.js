// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

export default function VisaDisclaimer() {
  return (
    <Text style={styles.text}>
      <Translation id="mmb.passengers.visa_disclaimer" />
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    color: defaultTokens.colorTextSecondary,
  },
});
