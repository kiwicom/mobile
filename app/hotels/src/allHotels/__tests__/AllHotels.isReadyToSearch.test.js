// @flow

import { AllHotelsSearch } from '../AllHotelsSearch';
import { defaultFilterParams } from '../../filter/FiltersReducer';

const defaults = {
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

const defaultProps = {
  location: '',
  filter: defaultFilterParams,
  data: { edges: [] },
  isLoading: false,
  currency: 'EUR',
  openSingleHotel: jest.fn(),
  onSearchChange: jest.fn(),
  onFilterChange: jest.fn(),
  onLocationChange: jest.fn(),
  onCityIdChange: jest.fn(),
};

describe('AllHotelsSearch.isReadyToSearch', () => {
  it('works when dates & location is known', () => {
    const props = {
      ...defaultProps,
      data: {
        edges: [{ node: { id: 'berlin-de' } }],
      },
      search: {
        ...defaults,
        checkin: new Date(1),
        checkout: new Date(2),
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.isReadyToSearch()).toBe(true);
  });

  it('does not work with nulls', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaults,
        checkin: null,
        checkout: null,
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.isReadyToSearch()).toBe(false);
  });

  it('does not work with dates & no location', () => {
    const props = {
      ...defaultProps,
      search: {
        ...defaults,
        checkin: new Date(1),
        checkout: new Date(2),
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.isReadyToSearch()).toBe(false);
  });
});
