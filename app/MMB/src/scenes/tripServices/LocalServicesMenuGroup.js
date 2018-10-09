// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import {
  graphql,
  createFragmentContainer,
  type RelayRefetchProp,
} from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  withNavigation,
  type NavigationType,
  type RouteNamesType,
} from '@kiwicom/mobile-navigation';

import HotelMenuItem from './hotelMenuItem/HotelMenuItem';
import LoungeMenuItem from './LoungeMenuItem';
import ParkingMenuItem from './ParkingMenuItem';
import CarRentalMenuItem from './CarRentalMenuItem';
import TransportationMenuItem from './transportationMenuItem/TransportationMenuItem';
import type { LocalServicesMenuGroup as LocalServicesMenuGroupType } from './__generated__/LocalServicesMenuGroup.graphql';

type Props = {|
  +data: LocalServicesMenuGroupType,
  +relay: RelayRefetchProp,
  +navigation: NavigationType,
|};

class LocalServicesMenuGroup extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
  };

  openWebview = (url: string) => {
    this.navigate('mmb.trip_services.webview', {
      url,
    });
  };

  render = () => (
    <TitledMenuGroup
      title={<Translation id="mmb.trip_services.local_services" />}
    >
      <CarRentalMenuItem
        data={this.props.data}
        onOpenWebview={this.openWebview}
      />
      <HotelMenuItem data={this.props.data} />
      <LoungeMenuItem data={this.props.data} onOpenWebview={this.openWebview} />
      <ParkingMenuItem
        data={this.props.data}
        onOpenWebview={this.openWebview}
      />
      <TransportationMenuItem
        data={this.props.data}
        onOpenWebview={this.openWebview}
      />
    </TitledMenuGroup>
  );
}

export default createFragmentContainer(
  withNavigation(LocalServicesMenuGroup),
  graphql`
    fragment LocalServicesMenuGroup on WhitelabeledServices {
      ...CarRentalMenuItem
      ...LoungeMenuItem
      ...ParkingMenuItem
      ...HotelMenuItem
      ...TransportationMenuItem
    }
  `,
);
