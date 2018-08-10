// @flow strict

import * as React from 'react';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

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
  const passengers = idx(props, _ => _.passengers) || [];
  return (
    <TitledMenuGroup title={<Translation id="mmb.trip_services.order.pax" />}>
      {passengers.map(passenger => (
        <PassengerInsuranceMenuItem
          passenger={passenger}
          key={idx(passenger, _ => _.databaseId)}
        />
      ))}
    </TitledMenuGroup>
  );
};
export default InsuranceOverviewPassengerMenuGroup;
