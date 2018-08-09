// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { type AlertTranslationType } from '@kiwicom/mobile-localization';
import Dash from 'react-native-dash';
import idx from 'idx';

import TimelineDeparture from './TimelineDeparture';
import TimelineArrival from './TimelineArrival';
import TripOverviewContext from './TripOverviewContext';
import type { Timeline as TimelineDataType } from './__generated__/Timeline.graphql';

const lineWidth = 2;
const circleSize = 12;
const lineOffset = circleSize / 2 - lineWidth / 2;

type Warning = {|
  +text: AlertTranslationType,
  +timelineTitle: {|
    +localTime: ?Date,
    +iataCode: ?string,
  |},
|};

type PropsWithContext = {|
  +data: TimelineDataType,
  +type: 'MULTICITY' | 'RETURN' | 'ONEWAY',
  +warnings: Warning[],
  +actions: {
    +addWarningData: (warning: Warning) => void,
  },
|};

function renderLegs(legs) {
  const legsChildren = [];
  legs.forEach((leg, index) => {
    if (!leg) {
      return;
    }

    legsChildren.push(
      <TimelineDeparture key={index} routeStop={leg.departure} legInfo={leg} />,
    );
    legsChildren.push(<TimelineArrival key={index} data={leg.arrival} />);
  });
  return legsChildren.map((child, index) => {
    const isLast = legsChildren.length === index + 1;
    const isOdd = index & 1;

    const shouldDrawSolidLine = !isLast && !isOdd;
    const shouldDrawDashedLine = isOdd && !isLast;

    const itemWrapperStyle = {};

    if (shouldDrawSolidLine === true) {
      itemWrapperStyle.borderColor = Color.ink.light;
      itemWrapperStyle.borderStartWidth = lineWidth;
    }

    return (
      <View key={index} style={styles.rowContainer}>
        {shouldDrawDashedLine === true && (
          // Dash component is a workaround for dashed border not supported in RN (https://github.com/facebook/react-native/blob/cb1bdf1e37236f5147ee5ef745573c0ced1b4f14/React/Views/RCTBorderDrawing.m#L394).
          // Please try to not use it very often. It's resource heavy.
          <Dash
            dashGap={lineWidth * 2}
            dashLength={lineWidth}
            dashThickness={lineWidth}
            dashColor={Color.ink.light}
            style={styles.dashedLine}
          />
        )}

        <View style={[styles.itemWrapper, itemWrapperStyle]}>
          <View style={styles.item}>{child}</View>
        </View>
        <View style={styles.circle} />
      </View>
    );
  });
}

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
    if (trips.length > 1 && this.props.type === 'RETURN') {
      this.lastArrivalDifferentFromFirstDeparture();
    }
  }

  render() {
    const children = [];
    const trips = idx(this.props, _ => _.data) || [];

    trips.forEach(trip => {
      const legs = idx(trip, _ => _.legs) || [];
      children.push(renderLegs(legs));
    });

    return children;
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    position: 'absolute',
    start: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.brand,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    borderStartWidth: 0,
    borderEndWidth: 0,
    marginStart: lineOffset,
    paddingStart: 15,
  },
  dashedLine: {
    width: 1,
    flexDirection: 'column',
    start: lineOffset,
  },
  item: {
    marginBottom: 20,
  },
});

type Props = {|
  +data: TimelineDataType,
  +type: 'MULTICITY' | 'RETURN' | 'ONEWAY',
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
        departure {
          ...TimelineDeparture_routeStop
        }
        arrival {
          ...TimelineArrival
        }
        ...TimelineDeparture_legInfo
      }
    }
  `,
);
