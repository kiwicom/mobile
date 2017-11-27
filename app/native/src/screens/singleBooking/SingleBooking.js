// @flow

import * as React from 'react';
import idx from 'idx';

import { createRefetchContainer, graphql } from 'react-relay';
import { ScrollView, RefreshControl, View, Text } from 'react-native';

import BookingOverviewRow from '../../components/bookings/OverviewRow';
import Layout from '../../components/visual/view/Layout';
import RouteStop from '../../components/flights/RouteStop';
import Date from '../../components/visual/datetime/Date';
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

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Timeline
              data={[].concat(
                // TODO refactor a little bit (second prop renderItem)
                ...legs.map(leg => {
                  if (leg) {
                    return [
                      <View key={`departure_${leg.id}`}>
                        <RouteStop data={leg.departure} />
                        <Date
                          dateTime={leg.departure && leg.departure.localTime}
                        />
                      </View>,
                      <View key={`arrival_${leg.id}`}>
                        <RouteStop data={leg.arrival} />
                        <Date dateTime={leg.arrival && leg.arrival.localTime} />
                      </View>,
                    ];
                  } else {
                    return [
                      // TODO: errored row component
                      <View key="error">
                        <Text>Leg could not be loaded.</Text>
                      </View>,
                    ];
                  }
                }),
              )}
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
