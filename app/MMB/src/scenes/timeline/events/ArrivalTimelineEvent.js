// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import type { ArrivalTimelineEvent as ArrivalTimelineEventType } from './__generated__/ArrivalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: ArrivalTimelineEventType,
|};

const ArrivalTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  const airport = idx(props, _ => _.data.location.airport.city.name);
  const code = idx(props, _ => _.data.location.airport.locationId);

  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="%" />} />}
      mainContent={
        <Translation
          id="mmb.booking_timeline.event.arrival.title"
          values={{
            airport,
            code,
          }}
        />
      }
    />
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
