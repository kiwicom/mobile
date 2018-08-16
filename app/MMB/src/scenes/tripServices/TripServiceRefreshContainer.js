// @flow

import * as React from 'react';
import { RefreshableScrollView, TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  TodoMenuItem,
  withNavigation,
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LoungeMenuItem from './LoungeMenuItem';
import ParkingMenuItem from './ParkingMenuItem';
import InsuranceMenuItem from './InsuranceMenuItem';
import CarRentalMenuItem from './CarRentalMenuItem';
import type { TripServiceRefreshContainer as BookingType } from './__generated__/TripServiceRefreshContainer.graphql';

type Props = {|
  +data: BookingType,
  +relay: RelayRefetchProp,
  +navigation: NavigationType,
|};

type State = {|
  isRefreshing: boolean,
|};

class TripServiceRefreshContainer extends React.Component<Props, State> {
  state = {
    isRefreshing: false,
  };

  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  openInsurance = () => {
    this.navigate('mmb.trip_services.insurance');
  };

  openWebview = (url: string) => {
    this.navigate('mmb.trip_services.webview', {
      url,
    });
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

      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.general_services" />}
      >
        <InsuranceMenuItem onOpenInsurance={this.openInsurance} />
      </TitledMenuGroup>

      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.local_services" />}
      >
        <CarRentalMenuItem
          data={idx(this.props.data, _ => _.availableWhitelabeledServices)}
          onOpenWebview={this.openWebview}
        />
        <TodoMenuItem
          title={<Translation id="mmb.trip_services.local_services.hotel" />}
          icon={<TextIcon code="&#xe029;" />}
        />
        <LoungeMenuItem
          data={idx(this.props.data, _ => _.availableWhitelabeledServices)}
          onOpenWebview={this.openWebview}
        />
        <ParkingMenuItem
          data={idx(this.props.data, _ => _.availableWhitelabeledServices)}
          onOpenWebview={this.openWebview}
        />
        <TodoMenuItem
          title={
            <Translation id="mmb.trip_services.local_services.transportation" />
          }
          icon={<TextIcon code="<" />}
        />
      </TitledMenuGroup>
    </RefreshableScrollView>
  );
}

export default createRefetchContainer(
  withNavigation(TripServiceRefreshContainer),
  graphql`
    fragment TripServiceRefreshContainer on BookingInterface {
      databaseId
      authToken
      availableWhitelabeledServices {
        ...CarRentalMenuItem
        ...LoungeMenuItem
        ...ParkingMenuItem
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
