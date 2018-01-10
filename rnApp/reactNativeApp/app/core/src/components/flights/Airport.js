// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text } from 'react-native';
import idx from 'idx';

import type { Airport } from './__generated__/Airport.graphql';

type Props = {|
  data: Airport,
|};

export const AirportWithoutData = ({ data }: Props) => {
  if (!data) {
    return null;
  }
  return (
    <Text>
      {idx(data, _ => _.city.name)} ({data.locationId})
    </Text>
  );
};

export default createFragmentContainer(
  AirportWithoutData,
  graphql`
    fragment Airport on Location {
      locationId
      city {
        name
      }
    }
  `,
);
