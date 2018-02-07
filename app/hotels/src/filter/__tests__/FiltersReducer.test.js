// @flow

import FiltersReducer, { InitialFiltersReducerState } from '../FiltersReducer';

const type = 'filtersReducer/FILTER_CHANGED';

describe('FiltersReducer', () => {
  it('should return the initialState', () => {
    // $FlowExpectedError: the second argument is intentionally not a valid action
    expect(FiltersReducer(undefined, {})).toMatchSnapshot();
  });
  it('should handle FILTER_CHANGED action', () => {
    const state = InitialFiltersReducerState;
    const action = {
      type,
      filter: {
        starsRating: [2],
        minPrice: 14,
        maxPrice: 29,
        freeCancellation: true,
        hotelFacilities: ['pool'],
        minScore: 3,
      },
    };

    const actionMaxpriceOnly = {
      type,
      filter: {
        starsRating: [],
        minPrice: null,
        maxPrice: 29,
        freeCancellation: false,
        hotelFacilities: [],
        minScore: null,
      },
    };
    const actionMinPriceOnly = {
      type,
      filter: {
        starsRating: [],
        minPrice: 50,
        maxPrice: null,
        freeCancellation: false,
        hotelFacilities: [],
        minScore: null,
      },
    };
    expect(FiltersReducer(state, action)).toMatchSnapshot();
    expect(FiltersReducer(state, actionMaxpriceOnly)).toMatchSnapshot();
    expect(FiltersReducer(state, actionMinPriceOnly)).toMatchSnapshot();
  });
});
