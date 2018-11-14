// @flow

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';

import FlightServicesMenuGroup from './FlightServicesMenuGroup';
import type { FlightServicesQueryResponse } from './__generated__/FlightServicesQuery.graphql';
import Deeplink from '../../components/Deeplink';
import BookingDetailContext from '../../context/BookingDetailContext';

type Props = {||};

export default class FlightServices extends React.Component<Props> {
  renderInner = (renderProps: FlightServicesQueryResponse) => (
    <FlightServicesMenuGroup bookedServices={renderProps.singleBooking} />
  );

  render() {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => (
          <PublicApiRenderer
            query={graphql`
              query FlightServicesQuery($id: Int!, $authToken: String!) {
                singleBooking(id: $id, authToken: $authToken) {
                  ... on BookingInterface {
                    ...FlightServicesMenuGroup_bookedServices
                  }
                }
              }
            `}
            variables={{
              id: bookingId,
              authToken,
            }}
            render={this.renderInner}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  }
}

export const FlightServicesSubmenuItems = {
  'mmb.flight_services.checked_baggage': {
    screen: function OpenCheckedBaggage() {
      return <Deeplink to="BAGS" />;
    },
  },
  'mmb.flight_services.allocated_seating': {
    screen: function OpenAllocatedSeating() {
      return <Deeplink to="SEATING" />;
    },
  },
  'mmb.flight_services.sports_equipment': {
    screen: function OpenSportsEquipment() {
      return <Deeplink to="SPORT_EQUIPMENT" />;
    },
  },
  'mmb.flight_services.musical_equipment': {
    screen: function OpenMusicalEquipment() {
      return <Deeplink to="MUSICAL_EQUIPMENT" />;
    },
  },
  'mmb.flight_services.special_assistance': {
    screen: function OpenSpecialAssistance() {
      return <Deeplink to="ASSISTANCE" />;
    },
  },
  'mmb.flight_services.pets': {
    screen: function OpenPetPassengers() {
      return <Deeplink to="PETS" />;
    },
  },
};
