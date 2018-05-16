// @flow

import * as React from 'react';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { PassengerDetail_booking as PassengersType } from './__generated__/PassengerDetail_booking.graphql';

type Props = {|
  booking: PassengersType,
  relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

export class PassengerDetail extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        id: idx(this.props.booking, _ => _.databaseId),
      },
      null,
      () => {
        this.setState({ isRefreshing: false });
      },
    );
  };

  render = () => {
    const passengers = idx(this.props.booking, _ => _.passengers) || [];
    return (
      <RefreshableScrollView
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        {passengers.map(passenger => (
          <Translation
            key={idx(passenger, _ => _.databaseId)}
            passThrough={JSON.stringify(passenger)}
          />
        ))}
      </RefreshableScrollView>
    );
  };
}

export default createRefetchContainer(
  PassengerDetail,
  graphql`
    fragment PassengerDetail_booking on Booking {
      databaseId
      passengers {
        databaseId
        firstname
        lastname
      }
    }
  `,
  graphql`
    query PassengerDetailQuery($id: ID!) {
      booking(id: $id) {
        ...PassengerDetail_booking
      }
    }
  `,
);
