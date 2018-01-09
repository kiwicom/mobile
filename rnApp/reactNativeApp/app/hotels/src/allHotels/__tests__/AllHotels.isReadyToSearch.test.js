// @flow

import AllHotels from '../AllHotels';

const defaults = {
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

const defaultProps = {
  openSingleHotel: jest.fn(),
  onFilterChange: jest.fn(),
};

describe('AllHotels.isReadyToSearch', () => {
  it('works with one zero', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaults,
        latitude: 51.5,
        longitude: 0, // please keep zero here
        checkin: new Date(1),
        checkout: new Date(2),
      },
    };
    const component = new AllHotels(props);

    expect(component.isReadyToSearch()).toBe(true);
  });

  it('does not work with nulls', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaults,
        latitude: null,
        longitude: null,
        checkin: null,
        checkout: null,
      },
    };
    const component = new AllHotels(props);

    expect(component.isReadyToSearch()).toBe(false);
  });

  it('works with zeros', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaults,
        latitude: 0,
        longitude: 0,
        checkin: new Date(1),
        checkout: new Date(2),
      },
    };
    const component = new AllHotels(props);

    expect(component.isReadyToSearch()).toBe(true);
  });
});
