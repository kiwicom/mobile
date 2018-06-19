// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

import type { TimelineEvent as TimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: TimelineEventType,
|};

const BookedFlightTimelineEvent = (props: Props) => {
  return (
    <TimelineEvent
      data={props.data}
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

export default BookedFlightTimelineEvent;
