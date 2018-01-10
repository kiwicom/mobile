// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { SimpleCard } from '@kiwicom/react-native-app-common';

export default function BookingListRowError() {
  return (
    <SimpleCard>
      <Text>
        We couldn&apos;t load the booking because of our API returned an error.
      </Text>
    </SimpleCard>
  );
}
