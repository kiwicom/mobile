// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { Icon } from '@kiwicom/mobile-shared';

import { FlightServicesMenuGroup } from '../FlightServicesMenuGroup';

it('should split ordered services from not ordered services', () => {
  // $FlowExpectedError: Passing just props needed to test this method
  const Component = new FlightServicesMenuGroup({
    bookedServices: {
      bookedServices: [
        {
          status: 'CONFIRMED',
          category: 'BAGS',
        },
        {
          status: 'OPEN',
          category: 'TRAVELLING_WITH_PETS',
        },
      ],
    },
  });

  expect(Component.getOrderedAndNotOrderedServices()).toEqual({
    ordered: [
      {
        key: 'BAGS',
        title: <Translation id="mmb.flight_services.additional_baggage" />,
        routeName: 'mmb.flight_services.checked_baggage',
        icon: <Icon name="baggage-checked" />,
      },
    ],
    rest: [
      {
        key: 'ALLOCATED_SEATING',
        title: <Translation id="mmb.flight_services.allocated_seating" />,
        routeName: 'mmb.flight_services.allocated_seating',
        icon: <Icon name="seat" />,
      },
      {
        key: 'SPORTS_EQUIPMENT',
        title: <Translation id="mmb.flight_services.sports_equipment" />,
        routeName: 'mmb.flight_services.sports_equipment',
        icon: <Icon name="gym" />,
      },
      {
        key: 'MUSICAL_EQUIPMENT',
        title: <Translation id="mmb.flight_services.musical_equipment" />,
        routeName: 'mmb.flight_services.musical_equipment',
        icon: <Icon name="musical-instruments" />,
      },
      {
        key: 'SPECIAL_ASSISTANCE',
        title: <Translation id="mmb.flight_services.special_assistance" />,
        routeName: 'mmb.flight_services.special_assistance',
        icon: <Icon name="wheelchair" />,
      },
      {
        key: 'TRAVELLING_WITH_PETS',
        title: <Translation id="mmb.flight_services.traveling_with_pets" />,
        routeName: 'mmb.flight_services.pets',
        icon: <Icon name="pet" />,
      },
    ],
  });
});
