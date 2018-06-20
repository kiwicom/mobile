// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import type { BookedFlightTimelineEvent as BookedFlightTimelineEventType } from './__generated__/BookedFlightTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: BookedFlightTimelineEventType,
|};

const BookedFlightTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon name="check" isFirst={true} />}
      mainContent={
        <Translation
          id="mmb.booking_timeline.event.booked_flight.title"
          values={{
            destination: 'Wonderland', // TODO in GQL proxy
          }}
        />
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
