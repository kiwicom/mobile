// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon, WebView } from '@kiwicom/mobile-shared';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  TodoMenuItem,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LoungeMenuItem from './LoungeMenuItem';
import ParkingMenuItem from './ParkingMenuItem';
import InsuranceMenuItem from './InsuranceMenuItem';
import CarRentalMenuItem from './CarRentalMenuItem';
import InsuranceOverview from './insurance/InsuranceOverview';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripServicesQueryResponse } from './__generated__/TripServicesQuery.graphql';

type Props = {|
  +navigation: NavigationType,
|};

export default class TripServices extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate({
      routeName: key,
      key: `key-${key}`,
      params,
    });
  };

  openWebview = (url: string) => {
    this.navigate('mmb.trip_services.webview', {
      url,
    });
  };

  openInsurance = () => {
    this.navigate('mmb.trip_services.insurance');
  };

  renderLocalServices = (rendererProps: TripServicesQueryResponse) => {
    const availableWhitelabeledServices = idx(
      rendererProps,
      _ => _.node.availableWhitelabeledServices,
    );

    return (
      <ScrollView>
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
            data={availableWhitelabeledServices}
            onOpenWebview={this.openWebview}
          />
          <TodoMenuItem
            title={<Translation id="mmb.trip_services.local_services.hotel" />}
            icon={<TextIcon code="&#xe029;" />}
          />
          <LoungeMenuItem
            data={availableWhitelabeledServices}
            onOpenWebview={this.openWebview}
          />
          <ParkingMenuItem
            data={availableWhitelabeledServices}
            onOpenWebview={this.openWebview}
          />
          <TodoMenuItem
            title={
              <Translation id="mmb.trip_services.local_services.transportation" />
            }
            icon={<TextIcon code="<" />}
          />
        </TitledMenuGroup>
      </ScrollView>
    );
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TripServicesQuery($bookingId: ID!) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  availableWhitelabeledServices {
                    ...CarRentalMenuItem
                    ...LoungeMenuItem
                    ...ParkingMenuItem
                  }
                }
              }
            }
          `}
          variables={{
            bookingId,
          }}
          render={this.renderLocalServices}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

export const TripServicesSubmenuItems = {
  'mmb.trip_services.webview': {
    screen: function TripServicesSubmenuWebview({ url }: {| +url: string |}) {
      return <WebView source={{ uri: url }} />;
    },
  },
  'mmb.trip_services.insurance': {
    screen: function TripServicesSubmenuInsurance() {
      return <InsuranceOverview />;
    },
  },
};
