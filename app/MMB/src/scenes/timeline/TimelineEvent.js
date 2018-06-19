// @flow

import * as React from 'react';
import idx from 'idx';
import { DateFormatter } from '@kiwicom/mobile-localization';

import type { TimelineEvent as TimelineEventType } from './__generated__/TimelineQuery.graphql';
import TimelineEventLayout from './TimelineEventLayout';
import DateLocation from './TimelineEventDateLocation';

type Props = {|
  +data: ?TimelineEventType,
  +iconVertLines: React.Node,
  +mainContent: React.Node,
|};

const TimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  let time = null;
  let isPastEvent = false;
  if (timestamp) {
    time = DateFormatter(new Date(timestamp)).formatToTime();
    isPastEvent = new Date() - new Date(timestamp) > 0;
  }
  let dateLocation = null;
  if (time) {
    dateLocation = <DateLocation time={time} />;
  }

  const iconVertLines = React.Children.map(props.iconVertLines, child =>
    React.cloneElement(child, {
      isPastEvent,
    }),
  );
  return (
    <TimelineEventLayout
      isPastEvent={isPastEvent}
      dateLocation={dateLocation}
      iconVertLines={iconVertLines}
      mainContent={props.mainContent}
    />
  );
};

export default TimelineEvent;
