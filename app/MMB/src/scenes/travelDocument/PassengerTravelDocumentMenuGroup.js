// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import PassengerMenuItem from './menuItem/PassengerMenuItem';
import type { PassengerTravelDocumentMenuGroup as PassengersType } from './__generated__/PassengerTravelDocumentMenuGroup.graphql';

type Props = {|
  +data: PassengersType,
|};

const PassengerTravelDocumentMenuGroup = (props: Props) => {
  const passengers = idx(props.data, _ => _.passengers) || [];
  return (
    <TitledMenuGroup
      title={
        <Translation id="mmb.missing_information.passenger_travel_document_menu_group.passengers" />
      }
    >
      {passengers.map(passenger => (
        <PassengerMenuItem
          data={passenger}
          key={idx(passenger, _ => _.databaseId)}
        />
      ))}
    </TitledMenuGroup>
  );
};
export default createFragmentContainer(
  PassengerTravelDocumentMenuGroup,
  graphql`
    fragment PassengerTravelDocumentMenuGroup on BookingInterface {
      passengers {
        databaseId
        ...PassengerMenuItem
      }
    }
  `,
);
