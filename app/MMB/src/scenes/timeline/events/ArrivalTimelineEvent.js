// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Title from '../MainContentTitle';
import type { ArrivalTimelineEvent as ArrivalTimelineEventType } from './__generated__/ArrivalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';
import TimelineEventDateLocationContext from '../../../context/TimelineEventDateLocationContext';

type Props = {|
  +data: ArrivalTimelineEventType,
|};

const ArrivalTimelineEvent = ({ data }: Props) => {
  const timestamp = data.timestamp;
  const airport = data.location?.airport?.city?.name;
  const code = data.location?.airport?.locationId ?? '';
  return (
    <TimelineEventDateLocationContext.Provider value={{ highlightText: true }}>
      <TimelineEvent
        timestamp={timestamp}
        place={code}
        iconVertLines={<TimelineEventIcon icon={<TextIcon code="%" />} />}
        mainContent={
          <React.Fragment>
            <Title>
              <Translation
                id="mmb.booking_timeline.event.arrival.title"
                values={{
                  airport,
                  code,
                }}
              />
            </Title>
          </React.Fragment>
        }
      />
    </TimelineEventDateLocationContext.Provider>
  );
};

export default createFragmentContainer(
  ArrivalTimelineEvent,
  graphql`
    fragment ArrivalTimelineEvent on ArrivalTimelineEvent {
      timestamp
      location {
        airport {
          locationId
          city {
            name
          }
        }
      }
    }
  `,
);
