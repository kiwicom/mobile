// @flow

import * as React from 'react';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import Title from '../MainContentTitle';
import type { NoMoreEditsTimelineEvent as NoMoreEditsTimelineEventType } from '../__generated__/TimelineQuery.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: NoMoreEditsTimelineEventType,
|};

const NoMoreEditsTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      displayTime={false}
      timestamp={timestamp}
      iconVertLines={
        <TimelineEventIcon icon={<TextIcon code="&#xe00d;" orbit={true} />} />
      }
      mainContent={
        <Title>
          <Translation id="mmb.booking_timeline.event.no_more_edits.title" />
        </Title>
      }
    />
  );
};

export default createFragmentContainer(
  NoMoreEditsTimelineEvent,
  graphql`
    fragment NoMoreEditsTimelineEvent on NoMoreEditsTimelineEvent {
      timestamp
    }
  `,
);
