// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Title from '../MainContentTitle';
import Note from '../MainContentNote';
import type { TimeToCheckinTimelineEvent as TimeToCheckinTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: TimeToCheckinTimelineEventType,
|};

const TimeToCheckinTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      displayTime={false}
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="&#xe00f;" />} />}
      mainContent={
        <View style={styles.container}>
          <Title>
            <Translation id="mmb.booking_timeline.event.time_to_check_in.title" />
          </Title>
          <Note>
            <Translation id="mmb.booking_timeline.event.time_to_check_in.note" />
          </Note>
        </View>
      }
    />
  );
};

export default createFragmentContainer(
  TimeToCheckinTimelineEvent,
  graphql`
    fragment TimeToCheckinTimelineEvent on TimeToCheckinTimelineEvent {
      timestamp
    }
  `,
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
