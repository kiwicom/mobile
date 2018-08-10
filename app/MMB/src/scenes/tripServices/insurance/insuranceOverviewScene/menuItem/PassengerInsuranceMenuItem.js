// @flow strict

import * as React from 'react';
import idx from 'idx';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import PassengerMenuRightContent from './PassengerInsuranceMenuRightContent';
import PassengerMenuItem from '../../../../../components/passengerMenuItem/PassengerMenuItem';

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Passenger = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?Date,
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

type Props = {|
  +passenger: Passenger,
  +navigation: NavigationType,
|};

const PassengerInsuranceMenuItem = (props: Props) => {
  const passenger = idx(props, _ => _.passenger);
  const fullName = idx(passenger, _ => _.fullName) || '';
  const insuranceType = idx(passenger, _ => _.insuranceType);

  function onPress() {
    props.navigation.navigate('mmb.trip_services.insurance.selection', {
      passenger,
    });
  }
  return (
    <PassengerMenuItem
      passengerFullName={fullName}
      onPress={onPress}
      menuRightContent={
        <PassengerMenuRightContent insuranceType={insuranceType} />
      }
    />
  );
};

export default withNavigation(PassengerInsuranceMenuItem);
