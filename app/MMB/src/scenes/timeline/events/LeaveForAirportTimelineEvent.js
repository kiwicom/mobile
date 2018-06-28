// @flow

import * as React from 'react';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Note from '../MainContentNote';
import Title from '../MainContentTitle';
import type { LeaveForAirportTimelineEvent as LeaveForAirportTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: LeaveForAirportTimelineEventType,
|};

const LeaveForAirportTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      displayTime={false}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="&#xe052;" />} />}
      mainContent={
        <React.Fragment>
          <Title>
            <Translation id="mmb.booking_timeline.event.leave_for_airport.title" />
          </Title>
          <Note>
            <Translation id="mmb.booking_timeline.event.leave_for_airport.note" />
          </Note>
        </React.Fragment>
      }
    />
  );
};

export default createFragmentContainer(
  LeaveForAirportTimelineEvent,
  graphql`
    fragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {
      timestamp
    }
  `,
);
