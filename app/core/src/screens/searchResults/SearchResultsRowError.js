// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SimpleCard } from '@kiwicom/react-native-app-common';

export default function BookingListRowError() {
  return (
    <SimpleCard additionalStyles={styles.card}>
      <Text>
        We couldn&apos;t load this search result because of our API returned an
        error.
      </Text>
    </SimpleCard>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fee',
  },
});
