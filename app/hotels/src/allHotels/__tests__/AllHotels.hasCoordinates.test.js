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
  search: {
    ...defaults,
    checkin: new Date(1),
    checkout: new Date(2),
  },
};

describe('AllHotelsSearch.hasCoordinates', () => {
  it('returns true when coordinates are passed', () => {
    const props = {
      ...defaultProps,
      coordinates: {
        latitude: 34.3,
        longitude: 12.12312,
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.hasCoordinates()).toBe(true);
  });

  it('returns false if latitude is not defined', () => {
    const props = {
      ...defaultProps,
      coordinates: {
        longitude: 12.12312,
      },
    };
    // $FlowExpectedError: Expect error since it breaks with flow type
    const component = new AllHotelsSearch(props);

    expect(component.hasCoordinates()).toBe(false);
  });
  it('returns false if longitude is not defined', () => {
    const props = {
      ...defaultProps,
      coordinates: {
        latitude: 12.12312,
      },
    };
    // $FlowExpectedError: Expect error since it breaks with flow type
    const component = new AllHotelsSearch(props);

    expect(component.hasCoordinates()).toBe(false);
  });

  it('returns true if passed 0, 0 coordinate', () => {
    const props = {
      ...defaultProps,
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    };
    const component = new AllHotelsSearch(props);

    expect(component.hasCoordinates()).toBe(true);
  });
});
