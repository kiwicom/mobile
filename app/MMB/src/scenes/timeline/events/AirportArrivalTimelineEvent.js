// @flow

import React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Text } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

import type { AirportArrivalTimelineEvent as AirportArrivalTimelineEventType } from './__generated__/AirportArrivalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';
import DateLocation from '../TimelineEventDateLocation';

type Props = {|
  +data: ?AirportArrivalTimelineEventType,
|};

const AirportArrivalTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  const airport = idx(props, _ => _.data.location.airport.name);
  let time = null;
  if (timestamp) {
    time = DateFormatter(new Date(timestamp)).formatToTime();
  }
  let dateLocation = null;
  if (time) {
    dateLocation = <DateLocation time={time} />;
  }
  return (
    <TimelineEvent
      dateLocation={dateLocation}
      iconVertLines={<TimelineEventIcon name="flight" />}
      mainContent={
        <Text>
          <Translation
            id="mmb.booking_timeline.event.airport_arrival.title"
            values={{
              airport: airport,
            }}
          />
        </Text>
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
