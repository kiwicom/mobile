// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Title from '../MainContentTitle';
import Note from '../MainContentNote';
import type { CheckinClosingTimelineEvent as CheckinClosingTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: CheckinClosingTimelineEventType,
|};

const CheckinClosingTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="&#xe00e;" />} />}
      mainContent={
        <View style={styles.container}>
          <Title>
            <Translation id="mmb.booking_timeline.event.check_in_closing.title" />
          </Title>
          <Note>
            <Translation id="mmb.booking_timeline.event.check_in_closing.note" />
          </Note>
        </View>
      }
    />
  );
};

export default createFragmentContainer(
  CheckinClosingTimelineEvent,
  graphql`
    fragment CheckinClosingTimelineEvent on CheckinClosingTimelineEvent {
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
