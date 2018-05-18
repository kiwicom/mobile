// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { Location as LocationDataType } from './__generated__/Location.graphql';

type Props = {|
  data: LocationDataType,
|};

function Location(props: Props) {
  const cityName = idx(props, _ => _.data.airport.city.name);

  return (
    <Text style={styleSheet.city}>
      <Translation passThrough={cityName} />
    </Text>
  );
}

export default createFragmentContainer(
  Location,
  graphql`
    fragment Location on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  city: {
    fontSize: 16,
    fontWeight: '600',
  },
});
