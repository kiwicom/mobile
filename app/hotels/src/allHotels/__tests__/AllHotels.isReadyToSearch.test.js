// @flow

import AllHotels from '../AllHotels';

const defaults = {
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

it('works with zeros', () => {
  const component = new AllHotels();

  expect(component.isReadyToSearch()).toBe(false); // false by default

  component.state = {
    search: {
      ...defaults,
      latitude: 51.5,
      longitude: 0, // please keep zero here
      checkin: new Date(1),
      checkout: new Date(2),
    },
  };

  expect(component.isReadyToSearch()).toBe(true);

  component.state = {
    search: {
      ...defaults,
      latitude: null,
      longitude: null,
      checkin: null,
      checkout: null,
    },
  };

  expect(component.isReadyToSearch()).toBe(false);

  component.state = {
    search: {
      ...defaults,
      latitude: 0,
      longitude: 0,
      checkin: new Date(1),
      checkout: new Date(2),
    },
  };

  expect(component.isReadyToSearch()).toBe(true);
});
