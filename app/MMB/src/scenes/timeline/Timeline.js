// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import idx from 'idx';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import type {
  TimelineQueryResponse,
  TimelineEvent as TimelineEventType,
} from './__generated__/TimelineQuery.graphql';
import BookingDetailContext from '../../context/BookingDetailContext';
import BookedFlightTimelineEvent from './events/BookedFlightTimelineEvent';
import AirportArrivalTimelineEvent from './events/AirportArrivalTimelineEvent';
import DaySeparator from './DaySeparator';

// @TODO Display day banners only once for each day
function getValidTimelineEvent(data: TimelineEventType, index) {
  if (data && data.__typename) {
    switch (data.__typename) {
      case 'BookedFlightTimelineEvent':
        return (
          <React.Fragment key={'TimelineEvent-' + data.__typename + index}>
            {data && data.timestamp && <DaySeparator date={data.timestamp} />}
            <BookedFlightTimelineEvent data={data} />
          </React.Fragment>
        );
      case 'AirportArrivalTimelineEvent':
        return (
          <React.Fragment key={'TimelineEvent-' + data.__typename + index}>
            {data && data.timestamp && <DaySeparator date={data.timestamp} />}
            <AirportArrivalTimelineEvent data={data} />
          </React.Fragment>
        );
      default:
        return null;
    }
  }
  return null;
}

export default class Timeline extends React.Component<{||}> {
  renderInner = (renderProps: TimelineQueryResponse) => {
    const events = idx(renderProps, _ => _.bookingTimeline.events);
    const children =
      events &&
      events.map((event, index) => getValidTimelineEvent(event, index));

    return <ScrollView>{children}</ScrollView>;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TimelineQuery($id: ID!) {
              bookingTimeline(id: $id) {
                events {
                  __typename
                  timestamp
                  ... on BookedFlightTimelineEvent {
                    ...BookedFlightTimelineEvent
                  }
                  ... on AirportArrivalTimelineEvent {
                    ...AirportArrivalTimelineEvent
                  }
                }
              }
            }
          `}
          variables={{
            id: bookingId,
          }}
          render={this.renderInner}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
