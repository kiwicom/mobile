// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import PassengerSubtitle from './PassengerSubtitle';
import PassengerMenuRightContent from './PassengerMenuRightContent';
import PassengerMenuItem from '../../../components/passengerMenuItem/PassengerMenuItem';
import type { TravelDocumentPassengerMenuItem as PassengerType } from './__generated__/TravelDocumentPassengerMenuItem.graphql';

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

const TravelDocumentPassengerMenuItem = ({ data, navigation }: Props) => {
  const title = data.title ?? '';
  const fullName = data.fullName ?? '';
  const idNumber = data.travelDocument?.idNumber ?? null;
  const expiryDate = data.travelDocument?.expiration ?? null;
  const passengerId = data.databaseId ?? null;

  function onPress() {
    navigation.navigate('TravelDocumentModalScreen', {
      title,
      fullName,
      passengerId,
    });
  }

  return (
    <PassengerMenuItem
      passengerFullName={data.fullName ?? ''}
      onPress={onPress}
      disabled={idNumber !== null}
      passengerSubtitle={
        <PassengerSubtitle expirationDate={expiryDate} idNumber={idNumber} />
      }
      menuRightContent={<PassengerMenuRightContent idNumber={idNumber} />}
    />
  );
};

export default createFragmentContainer(
  withNavigation(TravelDocumentPassengerMenuItem),
  graphql`
    fragment TravelDocumentPassengerMenuItem on Passenger {
      title
      fullName
      databaseId
      travelDocument {
        idNumber
        expiration
      }
    }
  `,
);
