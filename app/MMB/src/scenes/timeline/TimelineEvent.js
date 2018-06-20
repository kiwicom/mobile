// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/mobile-localization';

import TimelineEventLayout from './TimelineEventLayout';
import DateLocation from './TimelineEventDateLocation';

type Props = {|
  +timestamp: ?Date,
  +iconVertLines: React.Node,
  +mainContent: React.Node,
|};

const TimelineEvent = (props: Props) => {
  const { timestamp } = props;
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
