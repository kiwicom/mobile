// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../../MainContentNote';
import Title from '../../MainContentTitle';
import renderNote from './DepartureTimelineEventNote';
import type { DepartureTimelineEvent as DeparturelineEventType } from './__generated__/DepartureTimelineEvent.graphql';
import TimelineEvent from '../../TimelineEvent';
import TimelineEventIcon from '../../TimelineEventIcon';

type Props = {|
  +data: DeparturelineEventType,
|};

const DepartureTimelineEvent = (props: Props) => {
  const timestamp = idx(props, _ => _.data.timestamp);
  const destination = idx(props, _ => _.data.location.airport.city.name);
  const duration = idx(props, _ => _.data.duration);
  const airlineCode = idx(props, _ => _.data.airline.code);
  const airlineName = idx(props, _ => _.data.airline.name);
  const flightNumber = idx(props, _ => _.data.flightNumber);

  let flight = '';
  if (airlineCode && flightNumber) {
    flight = `${airlineCode} ${flightNumber}`;
  }
  if (flight.length > 9 && airlineCode) {
    flight = airlineCode;
  }

  let flightIdentifier = '';
  if (airlineCode && flightNumber) {
    flightIdentifier = `${airlineCode}${flightNumber}`;
  }

  return (
    <TimelineEvent
      timestamp={timestamp}
      flight={flight}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="*" />} />}
      mainContent={
        <React.Fragment>
          <Title>
            <Translation
              id="mmb.booking_timeline.event.departure.title"
              values={{
                destination,
              }}
            />
          </Title>
          <Note>{renderNote(duration, airlineName, flightIdentifier)}</Note>
        </React.Fragment>
      }
    />
  );
};

export default createFragmentContainer(
  DepartureTimelineEvent,
  graphql`
    fragment DepartureTimelineEvent on DepartureTimelineEvent {
      timestamp
      location {
        airport {
          city {
            name
          }
        }
      }
      duration
      airline {
        code
        name
      }
      flightNumber
    }
  `,
);
