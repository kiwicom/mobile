// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Title from '../MainContentTitle';
import type { NavigateToTerminalTimelineEvent as NavigateToTerminalTimelineEventType } from './__generated__/NavigateToTerminalTimelineEvent.graphql';
import TimelineEvent from '../TimelineEvent';
import TimelineEventIcon from '../TimelineEventIcon';

type Props = {|
  +data: NavigateToTerminalTimelineEventType,
|};

const NavigateToTerminalTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={
        <TimelineEventIcon icon={<TextIcon code="&#xe052;" orbit={true} />} />
      }
      mainContent={
        <Title>
          <Translation id="mmb.booking_timeline.event.navigate_to_terminal.title" />
        </Title>
      }
    />
  );
};

export default createFragmentContainer(
  NavigateToTerminalTimelineEvent,
  graphql`
    fragment NavigateToTerminalTimelineEvent on NavigateToTerminalTimelineEvent {
      timestamp
    }
  `,
);
