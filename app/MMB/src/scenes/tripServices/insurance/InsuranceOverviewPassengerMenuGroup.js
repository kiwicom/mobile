// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import PassengerInsuranceMenuItem from './menuItem/PassengerInsuranceMenuItem';
import type { InsuranceOverviewPassengerMenuGroup as PassengersType } from './__generated__/InsuranceOverviewPassengerMenuGroup.graphql';

type Props = {|
  +data: PassengersType,
|};

const InsuranceOverviewPassengerMenuGroup = (props: Props) => {
  const passengers = idx(props.data, _ => _.passengers) || [];
  return (
    <TitledMenuGroup title={<Translation id="mmb.trip_services.order.pax" />}>
      {passengers.map(passenger => (
        <PassengerInsuranceMenuItem
          data={passenger}
          key={idx(passenger, _ => _.databaseId)}
        />
      ))}
    </TitledMenuGroup>
  );
};
export default createFragmentContainer(
  InsuranceOverviewPassengerMenuGroup,
  graphql`
    fragment InsuranceOverviewPassengerMenuGroup on BookingInterface {
      passengers {
        databaseId
        ...PassengerInsuranceMenuItem
      }
    }
  `,
);
