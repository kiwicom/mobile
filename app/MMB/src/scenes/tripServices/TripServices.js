// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon, WebView } from '@kiwicom/mobile-shared';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';
import {
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LoungeMenuItem from './LoungeMenuItem';
import TitledMenuGroup from '../../components/menu/TitledMenuGroup';
import MenuItem from '../../components/menu/MenuItem';
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
      _ => _.booking.availableWhitelabeledServices,
    );

    return (
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
        <MenuItem
          title={<Translation id="mmb.trip_services.local_services.parking" />}
          onPress={VoidAction}
          icon={<TextIcon code="&#xe03e;" />}
        />
        <MenuItem
          title={
            <Translation id="mmb.trip_services.local_services.transportation" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="<" />}
        />
      </TitledMenuGroup>
    );
  };

  render = () => (
    <ScrollView>
      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.ordered_services" />}
      >
        <MenuItem
          title={
            <Translation id="mmb.trip_services.general_services.insurance" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="'" />}
        />
      </TitledMenuGroup>

      <TitledMenuGroup
        title={<Translation id="mmb.trip_services.general_services" />}
      >
        <MenuItem
          title={
            <Translation id="mmb.trip_services.general_services.insurance" />
          }
          onPress={VoidAction}
          icon={<TextIcon code="'" />}
        />
      </TitledMenuGroup>

      <BookingDetailContext.Consumer>
        {({ bookingId, departureTime }) => (
          <PrivateApiRenderer
            query={graphql`
              query TripServicesQuery(
                $departureTime: DateTime!
                $bookingId: ID!
              ) {
                booking(id: $bookingId) {
                  availableWhitelabeledServices {
                    ...LoungeMenuItem
                  }
                }
              }
            `}
            variables={{
              departureTime,
              bookingId,
            }}
            render={this.renderLocalServices}
          />
        )}
      </BookingDetailContext.Consumer>
    </ScrollView>
  );
}

export const TripServicesSubmenuItems = {
  'mmb.trip_services.webview': {
    screen: function TripServicesSubmenuWebview({ url }: {| +url: string |}) {
      return <WebView source={{ uri: url }} />;
    },
  },
};
