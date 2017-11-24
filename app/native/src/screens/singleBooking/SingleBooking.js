// @flow

import * as React from 'react';

import { createRefetchContainer, graphql } from 'react-relay';
import { Text, ScrollView, RefreshControl } from 'react-native';

import type { SingleBooking_booking } from './__generated__/SingleBooking_booking.graphql';

type Props = {
  relay: Object, // FIXME
  booking: SingleBooking_booking,
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

  render = () => (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._refetch}
        />
      }
    >
      <Text>TODO: PrivateApiRenderer with offline cache</Text>
      <Text>{JSON.stringify(this.props.booking, null, 1)}</Text>
    </ScrollView>
  );
}

export default createRefetchContainer(
  SingleBooking,
  graphql`
    fragment SingleBooking_booking on RootQuery
      @argumentDefinitions(bid: { type: "ID!" }) {
      booking(id: $bid) {
        id
        status
      }
    }
  `,
  graphql`
    query SingleBookingRendererQuery($bid: ID!) {
      ...SingleBooking_booking @arguments(bid: $bid)
    }
  `,
);
