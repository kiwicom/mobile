// @flow

import * as React from 'react';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import FlightServicesMenuGroup from './FlightServicesMenuGroup';
import type { FlightServicesQueryResponse } from './__generated__/FlightServicesQuery.graphql';
import Deeplink from '../../components/Deeplink';

type Props = {|
  bookingId: string,
|};

export default class FlightServices extends React.Component<Props> {
  renderInner = (renderProps: FlightServicesQueryResponse) => (
    <FlightServicesMenuGroup bookedServices={renderProps.booking} />
  );

  render = () => (
    <PrivateApiRenderer
      query={graphql`
        query FlightServicesQuery($id: ID!) {
          booking(id: $id) {
            ...FlightServicesMenuGroup_bookedServices
          }
        }
      `}
      variables={{
        id: this.props.bookingId,
      }}
      render={this.renderInner}
    />
  );
}

type SubmenuProps = {|
  bookingId: string,
|};

export const FlightServicesSubmenuItems = {
  'mmb.flight_services.checked_baggage': {
    screen: function OpenCheckedBaggage({ bookingId }: SubmenuProps) {
      return <Deeplink to="BAGS" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.allocated_seating': {
    screen: function OpenAllocatedSeating({ bookingId }: SubmenuProps) {
      return <Deeplink to="SEATING" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.sports_equipment': {
    screen: function OpenSportsEquipment({ bookingId }: SubmenuProps) {
      return <Deeplink to="SPORT_EQUIPMENT" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.musical_equipment': {
    screen: function OpenMusicalEquipment({ bookingId }: SubmenuProps) {
      return <Deeplink to="MUSICAL_EQUIPMENT" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.special_assistance': {
    screen: function OpenSpecialAssistance({ bookingId }: SubmenuProps) {
      return <Deeplink to="ASSISTANCE" bookingID={bookingId} />;
    },
  },
  'mmb.flight_services.pets': {
    screen: function OpenPetPassengers({ bookingId }: SubmenuProps) {
      return <Deeplink to="PETS" bookingID={bookingId} />;
    },
  },
};
