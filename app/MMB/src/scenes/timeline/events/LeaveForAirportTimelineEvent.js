// @flow

import * as React from 'react';
import { Translation, TranslationFragment } from '@kiwicom/mobile-localization';
import { Text, Color, StyleSheet } from '@kiwicom/mobile-shared';

import type { TimelineEvent as TimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: TimelineEventType,
|};

const LeaveForAirportTimelineEvent = (props: Props) => {
  return (
    <TimelineEvent
      data={props.data}
      iconVertLines={<TimelineEventIcon name="directions-walk" />}
      mainContent={
        <TranslationFragment>
          <Translation id="mmb.booking_timeline.event.leave_for_airport.title" />
          <Text style={styles.note}>
            <Translation id="mmb.booking_timeline.event.leave_for_airport.note" />
          </Text>
        </TranslationFragment>
      }
    />
  );
};

const styles = StyleSheet.create({
  note: { fontSize: 13, color: Color.ink.light },
});

export default LeaveForAirportTimelineEvent;
