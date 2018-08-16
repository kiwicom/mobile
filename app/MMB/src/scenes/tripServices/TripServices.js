// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { ScrollView } from 'react-native';
import { TextIcon, WebView } from '@kiwicom/mobile-shared';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';
import {
  TitledMenuGroup,
  TodoMenuItem,
  HeaderTitle,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import idx from 'idx';

import LoungeMenuItem from './LoungeMenuItem';
import ParkingMenuItem from './ParkingMenuItem';
import InsuranceMenuItem from './InsuranceMenuItem';
import CarRentalMenuItem from './CarRentalMenuItem';
import InsuranceOverviewSceneContainer from './insurance/insuranceOverviewScene/InsuranceOverviewSceneContainer';
import InsuranceSelectionSceneContainer from './insurance/insuranceSelectionScene/InsuranceSelectionSceneContainer';
import PaymentScene from './insurance/PaymentScene';
import RefundScene from './insurance/RefundScene';
import MoreInfoScene from './insurance/moreInfoScene/MoreInfoScene';
import InsuranceTermsPdfScene from './insurance/InsuranceTermsPdfScene';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripServicesQueryResponse } from './__generated__/TripServicesQuery.graphql';

type Props = {|
  +navigation: NavigationType,
|};

export default class TripServices extends React.Component<Props> {
  navigate = (key: RouteNamesType, params?: Object) => {
    this.props.navigation.navigate(key, params);
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
      _ => _.singleBooking.availableWhitelabeledServices,
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
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          query={graphql`
            query TripServicesQuery($bookingId: Int!, $authToken: String!) {
              singleBooking(id: $bookingId, authToken: $authToken) {
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
            authToken,
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
    screen: function TripServicesSubmenuInsurance({
      navigation,
    }: {|
      +navigation: NavigationType,
    |}) {
      return <InsuranceOverviewSceneContainer navigation={navigation} />;
    },
    headerTitle: function TripServicesHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.trip_services.insurance.selection': {
    screen: function TripServicesSubmenuInsuranceSelection() {
      return <InsuranceSelectionSceneContainer />;
    },
    headerTitle: function TripServicesHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.selection.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.trip_services.insurance.payment': {
    screen: function TripServicesSubmenuInsurancePayment() {
      return <PaymentScene />;
    },
  },
  'mmb.trip_services.insurance.refund': {
    screen: function TripServicesSubmenuInsuranceRefund() {
      return <RefundScene />;
    },
    headerTitle: function TripServicesSubmenuInsuranceRefundHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.refund.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.trip_services.insurance.selection.more_info': {
    screen: function TripServicesSubmenuInsuranceSelectionMoreInfo({
      navigation,
    }: {|
      +navigation: NavigationType,
    |}) {
      return <MoreInfoScene navigation={navigation} />;
    },
    headerTitle: function TripServicesSubmenuInsuranceSelectionMoreInfoHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.more_info.title" />
        </HeaderTitle>
      );
    },
  },
  'mmb.trip_services.insurance.selection.more_info.terms': {
    screen: function TripServicesSubmenuInsuranceSelectionMoreInfo() {
      return <InsuranceTermsPdfScene />;
    },
    headerTitle: function TripServicesSubmenuInsuranceSelectionMoreInfoHeaderTitle() {
      return (
        <HeaderTitle>
          <Translation id="mmb.trip_services.insurance.more_info.title" />
        </HeaderTitle>
      );
    },
  },
};
