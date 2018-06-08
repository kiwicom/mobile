// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon, WebView } from '@kiwicom/mobile-shared';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  MenuItem,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LoungeMenuItem from './LoungeMenuItem';
import ParkingMenuItem from './ParkingMenuItem';
import InsuranceMenuItem from './InsuranceMenuItem';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripServicesQueryResponse } from './__generated__/TripServicesQuery.graphql';

const VoidAction = () => {
  console.warn('TODO');
};

type Props = {|
  +navigation: NavigationType,
|};

export default class TripServices extends React.Component<Props> {
  navigate = (key: RouteNamesType, params: Object) => {
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
          <InsuranceMenuItem />
        </TitledMenuGroup>

        <TitledMenuGroup
          title={<Translation id="mmb.trip_services.local_services" />}
        >
          <MenuItem
            title={
              <Translation id="mmb.trip_services.local_services.car_rental" />
            }
            onPress={VoidAction}
            icon={<TextIcon code="&#xe03a;" />}
          />
          <MenuItem
            title={<Translation id="mmb.trip_services.local_services.hotel" />}
            onPress={VoidAction}
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
          <MenuItem
            title={
              <Translation id="mmb.trip_services.local_services.transportation" />
            }
            onPress={VoidAction}
            icon={<TextIcon code="<" />}
          />
        </TitledMenuGroup>
      </ScrollView>
    );
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, departureTime, arrivalTime }) => (
        <PrivateApiRenderer
          query={graphql`
            query TripServicesQuery(
              $bookingId: ID!
              $departureTime: DateTime!
              $arrivalTime: DateTime!
            ) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  availableWhitelabeledServices {
                    ...LoungeMenuItem @arguments(departureTime: $departureTime)
                    ...ParkingMenuItem
                      @arguments(
                        departureTime: $departureTime
                        arrivalTime: $arrivalTime
                      )
                  }
                }
              }
            }
          `}
          variables={{
            bookingId,
            departureTime,
            arrivalTime,
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
};
