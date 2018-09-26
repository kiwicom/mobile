// @flow

import React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../MainContentNote';
import Title from '../MainContentTitle';
import type { BoardingTimelineEvent as BoardingTimelineEventType } from './__generated__/BoardingTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: ?BoardingTimelineEventType,
|};

const BoardingTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  const terminal = idx(props, _ => _.data.terminal);
  const noteTranslationId = terminal
    ? 'mmb.booking_timeline.event.gate_arrival.note_terminal'
    : 'mmb.booking_timeline.event.gate_arrival.note';
  return (
    <TimelineEvent
      timestamp={timestamp}
      displayTime={false}
      iconVertLines={
        <TimelineEventIcon icon={<TextIcon code="&#xe00a;" orbit={true} />} />
      }
      mainContent={
        <React.Fragment>
          <Title>
            <Translation id="mmb.booking_timeline.event.gate_arrival.title" />
          </Title>
          <Note>
            <Translation id={noteTranslationId} values={{ terminal }} />
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
      terminal
    }
  `,
);
