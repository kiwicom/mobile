// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

import Note from '../../MainContentNote';
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

  return (
    <TimelineEvent
      timestamp={timestamp}
      iconVertLines={<TimelineEventIcon icon={<TextIcon code="*" />} />}
      mainContent={
        <React.Fragment>
          <Translation
            id="mmb.booking_timeline.event.departure.title"
            values={{
              destination,
            }}
          />
          <Note>{renderNote(duration)}</Note>
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
    }
  `,
);
