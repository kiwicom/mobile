// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/mobile-localization';

import TimelineEventLayout from './TimelineEventLayout';
import DateLocation from './TimelineEventDateLocation';
import TimelineEventContext from '../../context/TimelineEventContext';

type Props = {|
  +timestamp: ?Date,
  +place?: string,
  +displayTime: boolean,
  +iconVertLines: React.Node,
  +mainContent: React.Node,
|};

const TimelineEvent = (props: Props) => {
  const { timestamp, place } = props;
  let time = null;
  let isPastEvent = false;
  if (timestamp) {
    time = DateFormatter(new Date(timestamp)).formatToTime();
    isPastEvent = new Date() - new Date(timestamp) > 0;
  }
  let dateLocation = null;
  if (time && props.displayTime) {
    dateLocation = <DateLocation time={time} place={place} />;
  }

  return (
    <TimelineEventContext.Provider value={{ isPastEvent }}>
      <TimelineEventLayout
        dateLocation={dateLocation}
        iconVertLines={props.iconVertLines}
        mainContent={props.mainContent}
      />
    </TimelineEventContext.Provider>
  );
};

TimelineEvent.defaultProps = {
  displayTime: true,
};

export default TimelineEvent;
