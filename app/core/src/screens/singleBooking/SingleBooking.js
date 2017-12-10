// @flow

import * as React from 'react';
import idx from 'idx';
import { createRefetchContainer, graphql } from 'react-relay';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { Layout, DateTime } from '@kiwicom/react-native-app-common';

import BookingOverviewRow from '../../components/bookings/OverviewRow';
import RouteStop from '../../components/flights/RouteStop';
import Duration from '../../components/flights/Duration';
import Airline from '../../components/flights/Airline';
import Timeline from './Timeline';

import type { SingleBooking as SingleBookingType } from './__generated__/SingleBooking.graphql';

type Props = {
  relay: Object, // FIXME
  data: SingleBookingType,
};

type State = {
  refreshing: boolean,
};

class SingleBooking extends React.Component<Props, State> {
  state: State = {
    refreshing: false,
  };

  _refetch = () => {
    this.setState({ refreshing: true }, () => {
      this.props.relay.refetch(
        v => v,
        null,
        () => {
          this.setState({ refreshing: false });
        },
        {
          force: true,
        },
      );
    });
  };

  /**
   * Prepares array in this format (can be rendered in the time-line):
   *
   * [departure, arrival, departure, arrival, ...]
   */
  _prepareTimelineComponentsList = legs => {
    return [].concat(
      ...legs.map(leg => {
        if (leg) {
          return [
            <View key={`departure_${leg.id}`}>
              <Text style={{ fontWeight: 'bold' }}>
                <RouteStop data={leg.departure} />
              </Text>
              <View style={{ paddingLeft: 10 }}>
                <DateTime dateTime={leg.departure && leg.departure.localTime} />
                <Text>Flight no.: {leg.flightNumber}</Text>
                <Airline data={leg.airline} />
                <View style={{ flexDirection: 'row' }}>
                  <Text>Duration: </Text>
                  <Duration minutes={leg.duration} />
                </View>
                <Text>
                  {leg.recheckRequired
                    ? 'Recheck is required!'
                    : 'Recheck is not required... :)'}
                </Text>
              </View>
            </View>,
            <View key={`arrival_${leg.id}`}>
              <Text style={{ fontWeight: 'bold' }}>
                <RouteStop data={leg.arrival} />
              </Text>
              <View style={{ paddingLeft: 10 }}>
                <DateTime dateTime={leg.arrival && leg.arrival.localTime} />
              </View>
            </View>,
          ];
        } else {
          return [
            <View key="error">
              <Text>Flight leg could not be loaded.</Text>
            </View>,
          ];
        }
      }),
    );
  };

  render = () => {
    const legs = idx(this.props, _ => _.data.booking.legs) || [];

    return (
      <Layout>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._refetch}
            />
          }
        >
          <BookingOverviewRow node={this.props.data.booking} />

          <View style={{ marginTop: 15, marginBottom: 10 }}>
            <Timeline
              componentsList={this._prepareTimelineComponentsList(legs)}
            />
          </View>

          {/*
           <Button title="Ticket PDF" />
           TODO: simple button (link) + the same in login form!
           */}
        </ScrollView>
      </Layout>
    );
  };
}

export default createRefetchContainer(
  SingleBooking,
  graphql`
    fragment SingleBooking on RootQuery
      @argumentDefinitions(bid: { type: "ID!" }) {
      booking(id: $bid) {
        id
        status
        ...OverviewRow_node
        legs {
          id
          duration
          flightNumber
          recheckRequired
          airline {
            ...Airline
          }
          departure {
            localTime
            ...RouteStop
          }
          arrival {
            localTime
            ...RouteStop
          }
        }
      }
    }
  `,
  graphql`
    query SingleBookingRendererQuery($bid: ID!) {
      ...SingleBooking @arguments(bid: $bid)
    }
  `,
);
