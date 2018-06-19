// @flow

import React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import type { TimelineEvent as TimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: ?TimelineEventType,
|};

const AirportArrivalTimelineEvent = (props: Props) => {
  const airport = idx(props, _ => _.data.location.airport.name);
  return (
    <TimelineEvent
      data={props.data}
      iconVertLines={<TimelineEventIcon name="flight" />}
      mainContent={
        <Translation
          id="mmb.booking_timeline.event.airport_arrival.title"
          values={{
            airport: airport,
          }}
        />
      }
    />
  );
};

export default createFragmentContainer(
  AirportArrivalTimelineEvent,
  graphql`
    fragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {
      timestamp
      location {
        airport {
          name
        }
      }
    }
  `,
);
