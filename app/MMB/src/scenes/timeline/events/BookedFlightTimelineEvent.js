// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Title from '../MainContentTitle';
import type { BookedFlightTimelineEvent as BookedFlightTimelineEventType } from './__generated__/BookedFlightTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: BookedFlightTimelineEventType,
|};

const BookedFlightTimelineEvent = ({ data }: Props) => {
  const timestamp = data.timestamp;
  const destination = data.location?.airport?.city?.name;
  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="V" />} />}
      mainContent={
        <Title>
          <Translation
            id="mmb.booking_timeline.event.booked_flight.title"
            values={{
              destination,
            }}
          />
        </Title>
      }
    />
  );
};

export default createFragmentContainer(
  BookedFlightTimelineEvent,
  graphql`
    fragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {
      timestamp
      location {
        airport {
          city {
            name
          }
        }
      }
    }
  `,
);
