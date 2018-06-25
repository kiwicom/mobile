// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import idx from 'idx';
import { LayoutSingleColumn, TextButton } from '@kiwicom/mobile-shared';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import {
  MenuItem,
  TitledMenuGroup,
  SeparatorFullWidth,
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import DestinationImage from './DestinationImage';
import OrderSummary from './OrderSummary';
import TripInfo from '../../../components/header/TripInfo';
import BookingDetailContext from '../../../context/BookingDetailContext';
import type { InsuranceOverviewSceneQueryResponse } from './__generated__/InsuranceOverviewSceneQuery.graphql';

type Props = {|
  +data: InsuranceOverviewSceneQueryResponse,
  +navigation: NavigationType,
|};

class InsuranceOverviewScene extends React.Component<Props> {
  navigate = (routeName: RouteNamesType) => {
    this.props.navigation.navigate({
      routeName,
      key: 'key-' + routeName,
    });
  };

  goToTheInsuranceSelection = () => {
    // TODO: PAX ID (?)
    this.navigate('mmb.trip_services.insurance.selection');
  };

  goToTheInsurancePayment = () => {
    this.navigate('mmb.trip_services.insurance.payment');
  };

  goToTheInsuranceRefund = () => {
    this.navigate('mmb.trip_services.insurance.refund');
  };

  render = () => {
    const { data } = this.props;
    const pax = idx(data, _ => _.node.passengers) || [];

    return (
      <React.Fragment>
        <ScrollView>
          <LayoutSingleColumn>
            <DestinationImage data={data.node} />

            <TripInfo data={data.node} />

            <TitledMenuGroup
              title={<Translation id="mmb.trip_services.order.pax" />}
              customSeparator={<SeparatorFullWidth />}
            >
              {pax.map(pap => {
                if (!pap) {
                  return null;
                }
                return (
                  <MenuItem
                    key={pap.databaseId}
                    title={<Translation passThrough={pap.fullName} />}
                    onPress={this.goToTheInsuranceSelection}
                  />
                );
              })}
            </TitledMenuGroup>

            <View style={{ padding: 10 }}>
              <TextButton
                title={
                  <Translation id="mmb.trip_services.order.process_to_refund" />
                }
                onPress={this.goToTheInsuranceRefund}
              />
            </View>

            <View style={{ padding: 10 }}>
              <TextButton
                title={
                  <Translation id="mmb.trip_services.order.process_to_payment" />
                }
                onPress={this.goToTheInsurancePayment}
              />
            </View>
          </LayoutSingleColumn>
        </ScrollView>
        <OrderSummary />
      </React.Fragment>
    );
  };
}

type ContainerProps = {|
  navigation: NavigationType,
|};

export default class InsuranceOverviewSceneContainer extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = (response: InsuranceOverviewSceneQueryResponse) => {
    return (
      <InsuranceOverviewScene
        data={response}
        navigation={this.props.navigation}
      />
    );
  };

  render = () => {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId }) => (
          <PrivateApiRenderer
            render={this.renderInnerComponent}
            query={graphql`
              query InsuranceOverviewSceneQuery($bookingId: ID!) {
                node(id: $bookingId) {
                  ... on BookingInterface {
                    ...DestinationImage
                    ...TripInfo
                    passengers {
                      databaseId
                      fullName
                    }
                  }
                }
              }
            `}
            variables={{
              bookingId: bookingId,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  };
}
