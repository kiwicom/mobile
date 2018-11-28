// @flow strict

import * as React from 'react';
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

const DepartureTimelineEvent = ({ data }: Props) => {
  const timestamp = data.timestamp;
  const destination = data.location?.airport?.city?.name;
  const duration = data.duration;
  const airlineCode = data.airline?.code;
  const airlineName = data.airline?.name;
  const flightNumber = data.flightNumber;

  let flight = '';
  if (airlineCode != null && flightNumber != null) {
    flight = `${airlineCode} ${flightNumber}`;
  }
  if (flight.length > 9 && airlineCode != null) {
    flight = airlineCode;
  }

  let flightIdentifier = '';
  if (airlineCode != null && flightNumber != null) {
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
