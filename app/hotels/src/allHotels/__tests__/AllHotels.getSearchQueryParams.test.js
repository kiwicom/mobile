// @flow

import { AllHotelsSearch } from '../AllHotelsSearch';
import { defaultFilterParams } from '../../filter/FiltersReducer';
import { sanitizeDate } from '../../GraphQLSanitizers';

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
  coordinates: {
    latitude: 3,
    longitude: 4,
  },
  search: {
    ...defaults,
    checkin: new Date(1),
    checkout: new Date(2),
  },
};

describe('AllHotels.getSearchQueryParams', () => {
  it('searches with coordinates if no location is set', () => {
    const component = new AllHotelsSearch(defaultProps);

    expect(component.getSearchQueryParams()).toEqual({
      checkin: sanitizeDate(new Date(1)),
      checkout: sanitizeDate(new Date(2)),
      latitude: 3,
      longitude: 4,
      roomsConfiguration: { adultsCount: 1, children: [] },
    });
  });
  it('ignores coordinates if location is set', () => {
    const props = {
      ...defaultProps,
      location: 'Berlin',
      data: {
        edges: [{ node: { id: 'berlin-de' } }],
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.getSearchQueryParams()).toEqual({
      checkin: sanitizeDate(new Date(1)),
      checkout: sanitizeDate(new Date(2)),
      cityId: 'berlin-de',
      roomsConfiguration: { adultsCount: 1, children: [] },
    });
  });
});
