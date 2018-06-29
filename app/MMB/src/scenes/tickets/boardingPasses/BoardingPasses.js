// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { SimpleCard, StyleSheet, TextIcon } from '@kiwicom/mobile-shared';

import TicketHeader from '../components/TicketHeader';

export default function BoardingPasses() {
  return (
    <SimpleCard>
      <View style={styles.header}>
        <TicketHeader
          icon={<TextIcon code="6" />}
          title={<Translation id="mmb.boarding_passes.boarding_pass" />}
        />
      </View>
    </SimpleCard>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 12,
    paddingTop: 4,
  },
});
