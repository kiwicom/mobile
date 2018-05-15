// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import type { TripInfo as TripInfoType } from './__generated__/TripInfo.graphql';

type Props = {|
  data: TripInfoType,
|};

function TripInfo(props: Props) {
  return (
    <View>
      <Translation passThrough={JSON.stringify(props.data)} />
    </View>
  );
}

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on Booking {
      type
    }
  `,
);
