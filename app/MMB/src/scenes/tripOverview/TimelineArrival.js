// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import type { TimelineArrival as TimelineArrivalDataType } from './__generated__/TimelineArrival.graphql';

type Props = {|
  +data: TimelineArrivalDataType,
|};

function TimelineArrival(props: Props) {
  const data = props.data;
  const localTime = idx(data, _ => _.localTime);
  const cityName = idx(data, _ => _.airport.city.name);
  const iataCode = idx(data, _ => _.airport.locationId);

  return (
    <React.Fragment>
      <Translation passThrough={localTime} />
      <Translation passThrough={cityName} />
      <Translation passThrough={iataCode} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TimelineArrival,
  graphql`
    fragment TimelineArrival on RouteStop {
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
