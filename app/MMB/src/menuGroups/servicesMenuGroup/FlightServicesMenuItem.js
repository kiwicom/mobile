// @flow strict

import * as React from 'react';
import { MenuItem } from '@kiwicom/mobile-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import type { FlightServicesMenuItem as BookingType } from './__generated__/FlightServicesMenuItem.graphql';

type Props = {|
  +onPress: () => void,
  +isActive: boolean,
  +data: BookingType,
|};

export const FlightServicesMenuItem = (props: Props) => {
  const hasFlights = props.data.some(trip => {
    const legs = trip.legs ?? [];
    return legs.some(leg => leg?.type === 'AIRCRAFT');
  });
  if (hasFlights === false) {
    return null;
  }
  return (
    <MenuItem
      onPress={props.onPress}
      isActive={props.isActive}
      icon={<Icon name="flight-services" />}
      title={<Translation id="mmb.main_menu.services.flight_services" />}
      description={
        <Translation id="mmb.main_menu.services.flight_services.description" />
      }
      testID="flightServices"
    />
  );
};

export default createFragmentContainer(
  FlightServicesMenuItem,
  graphql`
    fragment FlightServicesMenuItem on Trip @relay(plural: true) {
      legs {
        type
      }
    }
  `,
);
