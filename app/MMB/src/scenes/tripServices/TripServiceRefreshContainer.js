// @flow

import * as React from 'react';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';

import GeneralServicesMenuGroup from './GeneralServicesMenuGroup';
import LocalServicesMenuGroup from './LocalServicesMenuGroup';
import type { TripServiceRefreshContainer as BookingType } from './__generated__/TripServiceRefreshContainer.graphql';

type Props = {|
  +data: BookingType,
  +relay: RelayRefetchProp,
|};

type State = {|
  isRefreshing: boolean,
|};

class TripServiceRefreshContainer extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  refetch = () => {
    const { data } = this.props;
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        id: data.databaseId,
        authToken: data.authToken,
      },
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
        refreshing={this.state.isRefreshing}
        onRefresh={this.refetch}
      >
        {/* TODO: ordered services - how does it work here? */}

        <GeneralServicesMenuGroup data={this.props.data} />

        <LocalServicesMenuGroup
          data={this.props.data.availableWhitelabeledServices}
        />
      </RefreshableScrollView>
    );
  }
}

export default createRefetchContainer(
  TripServiceRefreshContainer,
  graphql`
    fragment TripServiceRefreshContainer on BookingInterface {
      databaseId
      authToken
      ...GeneralServicesMenuGroup
      availableWhitelabeledServices {
        ...LocalServicesMenuGroup
      }
    }
  `,
  graphql`
    query TripServiceRefreshContainerQuery(
      $bookingId: Int!
      $authToken: String!
    ) {
      singleBooking(id: $bookingId, authToken: $authToken) {
        ...TripServiceRefreshContainer
      }
    }
  `,
);
