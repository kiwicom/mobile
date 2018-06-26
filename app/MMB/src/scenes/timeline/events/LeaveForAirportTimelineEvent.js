// @flow

import * as React from 'react';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, Color, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

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
      iconVertLines={
        <TimelineEventIcon icon={<Icon size={17} name="directions-walk" />} />
      }
      mainContent={
        <React.Fragment>
          <Translation id="mmb.booking_timeline.event.leave_for_airport.title" />
          <Text style={styles.note}>
            <Translation id="mmb.booking_timeline.event.leave_for_airport.note" />
          </Text>
        </React.Fragment>
      }
    />
  );
};

const styles = StyleSheet.create({
  note: { fontSize: 13, color: Color.ink.light },
});

export default createFragmentContainer(
  LeaveForAirportTimelineEvent,
  graphql`
    fragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {
      timestamp
    }
  `,
);
