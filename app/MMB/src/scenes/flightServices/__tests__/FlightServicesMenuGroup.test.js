// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';
import { TextIcon } from '@kiwicom/mobile-shared';

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
        icon: <TextIcon code="&#xe071;" />,
      },
    ],
    rest: [
      {
        key: 'ALLOCATED_SEATING',
        title: <Translation id="mmb.flight_services.allocated_seating" />,
        routeName: 'mmb.flight_services.allocated_seating',
        icon: <TextIcon code="&#xe02a;" />,
      },
      {
        key: 'SPORTS_EQUIPMENT',
        title: <Translation id="mmb.flight_services.sports_equipment" />,
        routeName: 'mmb.flight_services.sports_equipment',
        icon: <TextIcon code="&#xe089;" />,
      },
      {
        key: 'MUSICAL_EQUIPMENT',
        title: <Translation id="mmb.flight_services.musical_equipment" />,
        routeName: 'mmb.flight_services.musical_equipment',
        icon: <TextIcon code="&#xe086;" />,
      },
      {
        key: 'SPECIAL_ASSISTANCE',
        title: <Translation id="mmb.flight_services.special_assistance" />,
        routeName: 'mmb.flight_services.special_assistance',
        icon: <TextIcon code="&#xe088;" />,
      },
      {
        key: 'TRAVELLING_WITH_PETS',
        title: <Translation id="mmb.flight_services.traveling_with_pets" />,
        routeName: 'mmb.flight_services.pets',
        icon: <TextIcon code="&#xe043;" />,
      },
    ],
  });
});
