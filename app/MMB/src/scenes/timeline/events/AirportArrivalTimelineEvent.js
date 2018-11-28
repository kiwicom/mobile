// @flow strict

import React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../MainContentNote';
import Title from '../MainContentTitle';
import type { AirportArrivalTimelineEvent as AirportArrivalTimelineEventType } from './__generated__/AirportArrivalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';
import TimelineEventDateLocationContext from '../../../context/TimelineEventDateLocationContext';

type Props = {|
  +data: ?AirportArrivalTimelineEventType,
|};

const AirportArrivalTimelineEvent = ({ data }: Props) => {
  const airport = data?.location?.airport?.name;
  const code = data?.location?.airport?.locationId ?? '';
  const timestamp = data?.timestamp;
  return (
    <TimelineEventDateLocationContext.Provider value={{ highlightText: true }}>
      <TimelineEvent
        timestamp={timestamp}
        place={code}
        iconVertLines={<TimelineEventIcon icon={<TextIcon code="a" />} />}
        mainContent={
          <React.Fragment>
            <Title>
              <Translation
                id="mmb.booking_timeline.event.airport_arrival.title"
                values={{
                  airport,
                  code,
                }}
              />
            </Title>
            <Note>
              <Translation id="mmb.booking_timeline.event.airport_arrival.note" />
            </Note>
          </React.Fragment>
        }
      />
    </TimelineEventDateLocationContext.Provider>
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
