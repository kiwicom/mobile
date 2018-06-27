// @flow

import React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../MainContentNote';
import type { BoardingTimelineEvent as BoardingTimelineEventType } from './__generated__/BoardingTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: ?BoardingTimelineEventType,
|};

const BoardingTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      displayTime={false}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="&#xe00a;" />} />}
      mainContent={
        <React.Fragment>
          <Translation id="mmb.booking_timeline.event.gate_arrival.title" />
          <Note>
            <Translation id="mmb.booking_timeline.event.gate_arrival.note" />
          </Note>
        </React.Fragment>
      }
    />
  );
};

export default createFragmentContainer(
  BoardingTimelineEvent,
  graphql`
    fragment BoardingTimelineEvent on BoardingTimelineEvent {
      timestamp
    }
  `,
);
