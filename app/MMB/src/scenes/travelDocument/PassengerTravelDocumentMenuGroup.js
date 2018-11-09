// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { TitledMenuGroup } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import TravelDocumentPassengerMenuItem from './menuItem/TravelDocumentPassengerMenuItem';
import type { PassengerTravelDocumentMenuGroup as PassengersType } from './__generated__/PassengerTravelDocumentMenuGroup.graphql';

type Props = {|
  +data: PassengersType,
|};

const PassengerTravelDocumentMenuGroup = (props: Props) => {
  const passengers = props.data.passengers ?? [];
  return (
    <TitledMenuGroup
      title={
        <Translation id="mmb.missing_information.passenger_travel_document_menu_group.passengers" />
      }
    >
      {passengers.map(passenger => (
        <TravelDocumentPassengerMenuItem
          data={passenger}
          key={passenger?.databaseId}
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
        ...TravelDocumentPassengerMenuItem
      }
    }
  `,
);
