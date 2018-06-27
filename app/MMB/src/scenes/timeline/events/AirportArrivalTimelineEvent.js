// @flow

import React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../MainContentNote';
import type { AirportArrivalTimelineEvent as AirportArrivalTimelineEventType } from './__generated__/AirportArrivalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: ?AirportArrivalTimelineEventType,
|};

const AirportArrivalTimelineEvent = (props: Props) => {
  const airport = idx(props, _ => _.data.location.airport.name);
  const code = idx(props, _ => _.data.location.airport.locationId);
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="a" />} />}
      mainContent={
        <React.Fragment>
          <Translation
            id="mmb.booking_timeline.event.airport_arrival.title"
            values={{
              airport,
              code,
            }}
          />
          <Note>
            <Translation id="mmb.booking_timeline.event.airport_arrival.note" />
          </Note>
        </React.Fragment>
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
          locationId
          name
        }
      }
    }
  `,
);
