// @flow

import * as React from 'react';
import { RefreshableScrollView } from '@kiwicom/mobile-shared';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import idx from 'idx';

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
    this.setState({ isRefreshing: true });
    this.props.relay.refetch(
      {
        id: idx(this.props.data, _ => _.databaseId),
        authToken: idx(this.props.data, _ => _.authToken),
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

  render = () => (
    <RefreshableScrollView
      refreshing={this.state.isRefreshing}
      onRefresh={this.refetch}
    >
      {/* TODO: ordered services - how does it work here? */}

      <GeneralServicesMenuGroup data={this.props.data} />

      <LocalServicesMenuGroup
        data={idx(this.props.data, _ => _.availableWhitelabeledServices)}
      />
    </RefreshableScrollView>
  );
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
