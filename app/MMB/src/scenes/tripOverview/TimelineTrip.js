// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { Color } from '@kiwicom/mobile-shared';
import last from 'lodash/last';

import TimelineDeparture from './TimelineDeparture';
import TimelineArrival from './TimelineArrival';
import TimelineLegWrapper from './TimelineLegWrapper';
import type { TimelineTrip as TimelineTripType } from './__generated__/TimelineTrip.graphql';

type Props = {|
  +data: TimelineTripType,
  +legsCounted: number,
|};

function TimelineTrip(props: Props) {
  const legs = idx(props.data, _ => _.legs) || [];

  return (
    <React.Fragment>
      {legs.map((leg, index) => {
        if (leg == null) {
          return null;
        }
        const departureColorCode =
          Color.tripColorCodes[props.legsCounted + index] ||
          last(Color.tripColorCodes);
        const arrivalColorCode =
          Color.tripColorCodes[props.legsCounted + index + 1] ||
          last(Color.tripColorCodes);
        return (
          <React.Fragment key={index}>
            <TimelineLegWrapper
              shouldDrawDashedLine={false}
              shouldDrawSolidLine={true}
              color={departureColorCode}
              data={null} // This is not needed on this wrapper
            >
              <TimelineDeparture
                routeStop={leg.departure}
                legInfo={leg}
                arrival={leg.arrival}
              />
            </TimelineLegWrapper>
            <TimelineLegWrapper
              shouldDrawDashedLine={index + 1 !== legs.length}
              shouldDrawSolidLine={false}
              color={arrivalColorCode}
              data={idx(legs, _ => _[index + 1]) || null} // Guarantee field is on next leg
            >
              <TimelineArrival data={leg.arrival} />
            </TimelineLegWrapper>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TimelineTrip,
  graphql`
    fragment TimelineTrip on Trip {
      legs {
        ...TimelineLegWrapper
        guarantee
        departure {
          ...TimelineDeparture_routeStop
        }
        arrival {
          ...TimelineArrival
          ...TimelineDeparture_arrival
        }
        ...TimelineDeparture_legInfo
      }
    }
  `,
);
