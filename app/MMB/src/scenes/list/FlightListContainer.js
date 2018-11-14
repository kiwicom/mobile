// @flow

import * as React from 'react';
import { StyleSheet, RefreshableScrollView } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';

import FlightList from './FlightList';
import FlightListLayout from './FlightListLayout';
import type { FlightListContainer_future as FutureFlightType } from './__generated__/FlightListContainer_future.graphql';
import type { FlightListContainer_past as PastFlightType } from './__generated__/FlightListContainer_past.graphql';

type Props = {|
  +future: FutureFlightType,
  +past: PastFlightType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class FlightListContainer extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      null,
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
      {
        force: true,
      },
    );
  };

  render() {
    return (
      <RefreshableScrollView
        contentContainerStyle={styles.container}
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        <FlightListLayout
          title={<Translation id="mmb.my_bookings.future_trips" />}
          content={<FlightList data={this.props.future} />}
        />
        <FlightListLayout
          title={<Translation id="mmb.my_bookings.past_trips" />}
          content={<FlightList data={this.props.past} />}
        />
      </RefreshableScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default createRefetchContainer(
  FlightListContainer,
  graphql`
    fragment FlightListContainer_future on BookingInterfaceConnection {
      ...FlightList
    }

    fragment FlightListContainer_past on BookingInterfaceConnection {
      ...FlightList
    }
  `,
  graphql`
    query FlightListContainerQuery {
      future: customerBookings(only: FUTURE) {
        ...FlightListContainer_future
      }
      past: customerBookings(only: PAST) {
        ...FlightListContainer_past
      }
    }
  `,
);
