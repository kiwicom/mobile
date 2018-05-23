// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet, Color } from '@kiwicom/mobile-shared';

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
    color: Color.textLight,
  },
});
