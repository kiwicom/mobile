// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { type AlertTranslationType } from '@kiwicom/mobile-localization';
import idx from 'idx';
import { StyleSheet } from '@kiwicom/mobile-shared';

import TripOverviewContext, { type BookingType } from './TripOverviewContext';
import type { Timeline as TimelineDataType } from './__generated__/Timeline.graphql';
import TimelineTrip from './TimelineTrip';
import TripTitle from './tripTitle/TripTitle';

type Warning = {|
  +text: AlertTranslationType,
  +timelineTitle: {|
    +localTime: ?Date,
    +iataCode: ?string,
  |},
|};

type PropsWithContext = {|
  +data: TimelineDataType,
  +type: BookingType,
  +warnings: Warning[],
  +actions: {
    +addWarningData: (warning: Warning) => void,
  },
|};

class Timeline extends React.Component<PropsWithContext> {
  componentDidMount() {
    this.addWarnings();
  }

  departureDifferentFromPreviousArrival(trip, index) {
    if (index > 0) {
      const trips = idx(this.props, _ => _.data) || [];
      const arrivalPreviousTrip = idx(trips, _ => _[index - 1].arrival);
      const departure = idx(trip, _ => _.departure);
      const arrivalLocationId =
        idx(arrivalPreviousTrip, _ => _.airport.locationId) || '';
      const departureLocationId =
        idx(departure, _ => _.airport.locationId) || '';
      const arrivalCityName =
        idx(arrivalPreviousTrip, _ => _.airport.city.name) || '';
      const departureCityName = idx(departure, _ => _.airport.city.name) || '';

      if (arrivalLocationId !== departureLocationId) {
        const warning = {
          text: {
            id: 'mmb.flight_overview.timeline.warning.different_airport_return',
            values: {
              arrival: `${arrivalCityName} (${arrivalLocationId})`,
              departure: `${departureCityName} (${departureLocationId})`,
            },
          },
          timelineTitle: {
            localTime: idx(departure, _ => _.localTime),
            iataCode: departureLocationId,
          },
        };
        this.props.actions.addWarningData(warning);
      }
    }
  }

  lastArrivalDifferentFromFirstDeparture() {
    const trips = idx(this.props, _ => _.data) || [];
    const arrival = idx(trips, _ => _[trips.length - 1].arrival);
    const departure = idx(trips, _ => _[0].departure);
    const arrivalLocationId = idx(arrival, _ => _.airport.locationId) || '';
    const departureLocationId = idx(departure, _ => _.airport.locationId) || '';
    const arrivalCityName = idx(arrival, _ => _.airport.city.name) || '';
    const departureCityName = idx(departure, _ => _.airport.city.name) || '';
    if (arrivalLocationId !== departureLocationId) {
      const warning = {
        text: {
          id:
            'mmb.flight_overview.timeline.warning.different_airport_return_first',
          values: {
            arrival: `${arrivalCityName} (${arrivalLocationId})`,
            departure: `${departureCityName} (${departureLocationId})`,
          },
        },
        timelineTitle: {
          localTime: idx(arrival, _ => _.localTime),
          iataCode: arrivalLocationId,
        },
      };
      this.props.actions.addWarningData(warning);
    }
  }

  addWarnings() {
    const trips = idx(this.props, _ => _.data) || [];
    trips.forEach((trip, index) => {
      this.departureDifferentFromPreviousArrival(trip, index);
    });
    if (trips.length > 1 && this.props.type === 'BookingReturn') {
      this.lastArrivalDifferentFromFirstDeparture();
    }
  }

  render() {
    const trips = idx(this.props, _ => _.data) || [];

    let legsCounted = 0;
    return (
      <React.Fragment>
        {trips.map((trip, index) => {
          const legs = idx(trip, _ => _.legs) || [];
          const legsCount = legsCounted;
          legsCounted += legs.length;
          return (
            <React.Fragment key={`trip-${index}`}>
              <View style={styles.tripTitle}>
                <TripTitle index={index} data={trip} />
              </View>
              <TimelineTrip data={trip} legsCounted={legsCount} />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

type Props = {|
  +data: TimelineDataType,
|};

function TimelineWithContext(props: Props) {
  return (
    <TripOverviewContext.Consumer>
      {context => <Timeline {...props} {...context} />}
    </TripOverviewContext.Consumer>
  );
}

export default createFragmentContainer(
  TimelineWithContext,
  graphql`
    fragment Timeline on Trip @relay(plural: true) {
      ...TripTitle
      departure {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      arrival {
        localTime
        airport {
          locationId
          city {
            name
          }
        }
      }
      legs {
        id
      }
      ...TimelineTrip
    }
  `,
);

const styles = StyleSheet.create({
  tripTitle: {
    marginBottom: 15,
  },
});
