// @flow

import * as React from 'react';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Note from '../MainContentNote';
import Title from '../MainContentTitle';
import type { TransportFromAirportTimelineEvent as TransportFromAirportTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: TransportFromAirportTimelineEventType,
|};

const TransportFromAirportTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      displayTime={false}
      timestamp={timestamp}
      iconVertLines={
        <TimelineEventIcon icon={<TextIcon code="<" orbit={true} />} />
      }
      mainContent={
        <React.Fragment>
          <Title>
            <Translation id="mmb.booking_timeline.event.transport_from_airport.title" />
          </Title>
          <Note>
            <Translation id="mmb.booking_timeline.event.transport_from_airport.note" />
          </Note>
        </React.Fragment>
      }
    />
  );
};

export default createFragmentContainer(
  TransportFromAirportTimelineEvent,
  graphql`
    fragment TransportFromAirportTimelineEvent on TransportFromAirportTimelineEvent {
      timestamp
    }
  `,
);
