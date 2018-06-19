// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Text } from '@kiwicom/mobile-shared';
import { Translation, DateFormatter } from '@kiwicom/mobile-localization';

import type { BookedFlightTimelineEvent as BookedFlightTimelineEventType } from './__generated__/BookedFlightTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';
import DateLocation from '../TimelineEventDateLocation';

type Props = {|
  +data: BookedFlightTimelineEventType,
|};

const BookedFlightTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  let time = null;
  if (timestamp) {
    time = DateFormatter(new Date(timestamp)).formatToTime();
  }
  let dateLocation = null;
  if (time) {
    dateLocation = <DateLocation time={time} />;
  }

  const isPastEvent = true;
  return (
    <TimelineEvent
      isPastEvent={isPastEvent}
      dateLocation={dateLocation}
      iconVertLines={
        <TimelineEventIcon
          name="check"
          isFirst={true}
          isPastEvent={isPastEvent}
        />
      }
      mainContent={
        <Text>
          <Translation
            id="mmb.booking_timeline.event.booked_flight.title"
            values={{
              destination: 'Wonderland', // TODO in GQL proxy
            }}
          />
        </Text>
      }
    />
  );
};

export default createFragmentContainer(
  BookedFlightTimelineEvent,
  graphql`
    fragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {
      timestamp
    }
  `,
);
