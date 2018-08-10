// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { LayoutSingleColumn, TextButton } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import InsuranceOverviewPassengerMenuGroup from '../insuranceOverviewScene/InsuranceOverviewPassengerMenuGroup';
import DestinationImage from '../insuranceOverviewScene/DestinationImage';
import OrderSummary from '../insuranceOverviewScene/OrderSummary';
import TripInfo from '../../../../components/header/TripInfo';
import type { InsuranceOverviewSceneQueryResponse } from './__generated__/InsuranceOverviewSceneContainerQuery.graphql';
import { withInsuranceContext } from './InsuranceOverviewSceneContext';

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Passenger = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?Date,
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

type InsurancePrice = {|
  +insuranceType: InsuranceType,
  +price: {|
    +amount: number,
    +currency: string,
  |},
|};

type Data = {|
  +passengers: Passenger[],
  +insurancePrices: InsurancePrice[],
|};

type Change = {|
  +databaseId: ?number,
  +from: ?InsuranceType,
  +to: ?InsuranceType,
|};

type Props = {|
  +data: InsuranceOverviewSceneQueryResponse,
  +navigation: NavigationType,
  +initContext: (data: Data) => void,
  +passengers: Passenger[],
  +changes: Change[],
  +initialised: boolean,
|};

class InsuranceOverviewScene extends React.Component<Props> {
  componentDidMount() {
    const passengers = this.props.data.singleBooking.passengers;
    const insurancePrices = this.props.data.singleBooking.insurancePrices;
    this.props.initContext({ passengers, insurancePrices });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.initialised && !this.props.initialised) {
      const passengers = this.props.data.singleBooking.passengers;
      const insurancePrices = this.props.data.singleBooking.insurancePrices;
      this.props.initContext({ passengers, insurancePrices });
    }
  }

  navigate = (routeName: RouteNamesType) => {
    this.props.navigation.navigate(routeName);
  };

  goToTheInsurancePayment = () => {
    this.navigate('mmb.trip_services.insurance.payment');
  };

  goToTheInsuranceRefund = () => {
    this.navigate('mmb.trip_services.insurance.refund');
  };

  render = () => {
    const { data, passengers, changes } = this.props;

    const hasChanged = changes.some(change => change.to !== change.from);

    return (
      <React.Fragment>
        <ScrollView>
          <LayoutSingleColumn>
            <DestinationImage data={data.singleBooking} />

            <TripInfo data={data.singleBooking} />

            <InsuranceOverviewPassengerMenuGroup passengers={passengers} />

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
        {hasChanged && <OrderSummary />}
      </React.Fragment>
    );
  };
}

export default withInsuranceContext(state => ({
  initContext: state.actions.initState,
  passengers: state.passengers,
  changes: state.changes,
  initialised: state.initialised,
}))(InsuranceOverviewScene);
