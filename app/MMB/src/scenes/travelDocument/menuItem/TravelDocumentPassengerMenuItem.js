// @flow strict

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  type NavigationType,
  withNavigation,
} from '@kiwicom/mobile-navigation';

import PassengerSubtitle from './PassengerSubtitle';
import PassengerMenuRightContent from './PassengerMenuRightContent';
import PassengerMenuItem from '../../../components/passengerMenuItem/PassengerMenuItem';
import type { PassengerMenuItem as PassengerType } from '../../../components/passengerMenuItem/__generated__/PassengerMenuItem.graphql';

type Props = {|
  +data: PassengerType,
  +navigation: NavigationType,
|};

const TravelDocumentPassengerMenuItem = (props: Props) => {
  const title = idx(props.data, _ => _.title) || '';
  const fullName = idx(props.data, _ => _.fullName) || '';
  const idNumber = idx(props.data, _ => _.travelDocument.idNumber) || null;
  const expiryDate = idx(props.data, _ => _.travelDocument.expiration) || null;
  const passengerId = idx(props.data, _ => _.databaseId) || null;

  function onPress() {
    props.navigation.navigate('TravelDocumentModalScreen', {
      title,
      fullName,
      passengerId,
    });
  }

  return (
    <PassengerMenuItem
      passengerFullName={idx(props.data, _ => _.fullName) || ''}
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
