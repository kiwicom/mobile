// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import {
  LayoutSingleColumn,
  TextButton,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import {
  type RouteNamesType,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import InsuranceOverviewPassengerMenuGroup from './InsuranceOverviewPassengerMenuGroup';
import DestinationImage from './DestinationImage';
import OrderSummary from './orderSummary/OrderSummary';
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

type Props = {|
  +data: InsuranceOverviewSceneQueryResponse,
  +navigation: NavigationType,
  +initContext: (data: Data) => void,
  +reset: () => void,
  +hasChanged: () => boolean,
  +passengers: Passenger[],
  +initialised: boolean,
  +amount: number,
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

  componentWillUnmount() {
    this.props.reset();
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

  render() {
    const { data, passengers, amount } = this.props;
    const hasChanged = this.props.hasChanged();
    return (
      <React.Fragment>
        <ScrollView
          contentContainerStyle={styles.container}
          alwaysBounceVertical={false}
        >
          <LayoutSingleColumn>
            <DestinationImage data={data.singleBooking} />

            <TripInfo data={data.singleBooking} />

            <InsuranceOverviewPassengerMenuGroup passengers={passengers} />

            {hasChanged && amount <= 0 && (
              <View style={styles.buttonWrapper}>
                <TextButton
                  title={
                    <Translation id="mmb.trip_services.order.process_to_refund" />
                  }
                  onPress={this.goToTheInsuranceRefund}
                />
              </View>
            )}

            {amount > 0 && (
              <View style={styles.buttonWrapper}>
                <TextButton
                  title={
                    <Translation id="mmb.trip_services.order.process_to_payment" />
                  }
                  onPress={this.goToTheInsurancePayment}
                />
              </View>
            )}
          </LayoutSingleColumn>
        </ScrollView>
        {hasChanged && <OrderSummary />}
      </React.Fragment>
    );
  }
}

export default withInsuranceContext(state => ({
  initContext: state.actions.initState,
  reset: state.actions.reset,
  hasChanged: state.actions.hasChanged,
  passengers: state.passengers,
  initialised: state.initialised,
  amount: state.amount,
}))(InsuranceOverviewScene);

const styles = StyleSheet.create({
  container: {
    paddingBottom: 52,
  },
  buttonWrapper: {
    padding: 10,
  },
});
