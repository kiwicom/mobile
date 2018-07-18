// @flow strict

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { withNavigation } from 'react-navigation';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import PassengerMenuRightContent from './PassengerInsuranceMenuRightContent';
import PassengerMenuItem from '../../../../components/passengerMenuItem/PassengerMenuItem';
import type { PassengerInsuranceMenuItem as PassengerType } from './__generated__/PassengerInsuranceMenuItem.graphql';

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

const PassengerInsuranceMenuItem = (props: Props) => {
  const fullName = idx(props, _ => _.data.fullName) || '';
  const insuranceType = idx(props, _ => _.data.insuranceType);
  const title = idx(props, _ => _.data.title) || '';
  const birthday = idx(props, _ => _.data.birthday) || null;
  const databaseId = idx(props, _ => _.data.databaseId);

  function onPress() {
    props.navigation.navigate({
      routeName: 'mmb.trip_services.insurance.selection',
      key: 'key-mmb.trip_services.insurance.selection',
      params: {
        fullName,
        title,
        birthday,
        databaseId,
        insuranceType,
      },
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
