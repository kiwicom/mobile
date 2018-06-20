// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import idx from 'idx';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';
import { DateUtils } from '@kiwicom/mobile-localization';

import type { TimelineQueryResponse } from './__generated__/TimelineQuery.graphql';
import BookingDetailContext from '../../context/BookingDetailContext';
import BookedFlightTimelineEvent from './events/BookedFlightTimelineEvent';
import AirportArrivalTimelineEvent from './events/AirportArrivalTimelineEvent';
import LeaveForAirportTimelineEvent from './events/LeaveForAirportTimelineEvent';
import DaySeparator from './DaySeparator';

// @TODO Display day banners only once for each day
function getValidTimelineEvent(data) {
  if (data && data.__typename) {
    switch (data.__typename) {
      case 'BookedFlightTimelineEvent':
        return <BookedFlightTimelineEvent data={data} />;
      case 'AirportArrivalTimelineEvent':
        return <AirportArrivalTimelineEvent data={data} />;
      case 'LeaveForAirportTimelineEvent':
        return <LeaveForAirportTimelineEvent data={data} />;
      default:
        return null;
    }
  }
  return null;
}

function renderDaySeparator(event, prevEvent) {
  if (event && event.timestamp && prevEvent && prevEvent.timestamp) {
    const eventTimestamp = new Date(event.timestamp);
    const prevEventTimestamp = new Date(prevEvent.timestamp);
    if (!DateUtils.isSameDay(eventTimestamp, prevEventTimestamp)) {
      return <DaySeparator date={eventTimestamp} />;
    }
  }
  return null;
}

function renderChildren(events) {
  if (events) {
    return events.map((event, index) => {
      if (event && event.timestamp && event.__typename) {
        let daySeparator;
        if (index === 0) {
          daySeparator = <DaySeparator date={new Date(event.timestamp)} />;
        } else {
          daySeparator = renderDaySeparator(event, events[index - 1]);
        }
        return (
          <React.Fragment key={'TimelineEvent-' + event.__typename + index}>
            {daySeparator}
            {getValidTimelineEvent(event)}
          </React.Fragment>
        );
      }
      return null;
    });
  }
}

export default class Timeline extends React.Component<{||}> {
  renderInner = (renderProps: TimelineQueryResponse) => {
    const events = idx(renderProps, _ => _.bookingTimeline.events);
    const children = renderChildren(events);
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
                  ... on LeaveForAirportTimelineEvent {
                    ...LeaveForAirportTimelineEvent
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
