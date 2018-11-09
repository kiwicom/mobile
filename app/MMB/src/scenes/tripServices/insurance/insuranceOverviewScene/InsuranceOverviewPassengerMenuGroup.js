// @flow strict

import * as React from 'react';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import PassengerInsuranceMenuItem from './menuItem/PassengerInsuranceMenuItem';

type InsuranceType = 'NONE' | 'TRAVEL_BASIC' | 'TRAVEL_PLUS';

type Passenger = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?Date,
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
|};

type Props = {|
  +passengers: Passenger[],
|};

const InsuranceOverviewPassengerMenuGroup = (props: Props) => {
  const passengers = props.passengers ?? [];
  return (
    <TitledMenuGroup title={<Translation id="mmb.trip_services.order.pax" />}>
      {passengers.map(passenger => (
        <PassengerInsuranceMenuItem
          passenger={passenger}
          key={passenger.databaseId}
        />
      ))}
    </TitledMenuGroup>
  );
};
export default InsuranceOverviewPassengerMenuGroup;
