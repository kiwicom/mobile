// @flow strict

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import PassengerMenuRightContent from './PassengerInsuranceMenuRightContent';
import PassengerMenuItem from '../../../../components/passengerMenuItem/PassengerMenuItem';
import type { PassengerInsuranceMenuItem as PassengerResponseType } from './__generated__/PassengerInsuranceMenuItem.graphql';

type Props = {|
  +data: PassengerResponseType,
  +navigation: NavigationType,
|};

const PassengerInsuranceMenuItem = (props: Props) => {
  const passenger = idx(props, _ => _.data);
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

export default createFragmentContainer(
  withNavigation(PassengerInsuranceMenuItem),
  graphql`
    fragment PassengerInsuranceMenuItem on Passenger {
      fullName
      title
      birthday
      databaseId
      insuranceType
    }
  `,
);
