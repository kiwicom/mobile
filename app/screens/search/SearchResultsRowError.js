// @flow

import * as React from 'react';
import { Text } from 'react-native';

import SimpleCard from '../../components/visual/cards/SimpleCard';

export default function BookingListRowError() {
  return (
    <SimpleCard>
      <Text>
        We couldn&apos;t load this search result because of our API returned an
        error.
      </Text>
    </SimpleCard>
  );
}
