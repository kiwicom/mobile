// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import type { TimelineDeparture as TimelineDepartureDataType } from './__generated__/TimelineDeparture.graphql';

type Props = {|
  +data: TimelineDepartureDataType,
|};

function TimelineDeparture(props: Props) {
  const data = props.data;
  const localTime = idx(data, _ => _.localTime);
  const cityName = idx(data, _ => _.airport.city.name);
  const iataCode = idx(data, _ => _.airport.locationId);

  return (
    <React.Fragment>
      <Translation passThrough={localTime} />
      <Translation passThrough={cityName} />
      <Translation passThrough={iataCode} />
      {/* TODO: additional info here */}
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TimelineDeparture,
  graphql`
    fragment TimelineDeparture on RouteStop {
      localTime
      airport {
        locationId
        city {
          name
        }
      }
    }
  `,
);
