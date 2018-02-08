// @flow

import type {
  FilterParams,
  ActiveFilters,
  OnChangeFilterParams,
} from './FilterParametersType';

export const defaultFilterParams = {
  starsRating: [],
  minPrice: null,
  maxPrice: null,
  freeCancellation: false,
  hotelFacilities: [],
  minScore: null,
};

export const defaultActiveFilters = {
  isPriceFilterActive: false,
  isStarsFilterActive: false,
  isMinScoreActive: false,
  isHotelFacilitiesActive: false,
};

export type FilterReducerState = {
  filterParams: FilterParams,
  activeFilters: ActiveFilters,
};

export type FilterReducerActions = {|
  type: 'filtersReducer/FILTER_CHANGED',
  filter: OnChangeFilterParams,
|};

export const InitialFiltersReducerState: FilterReducerState = {
  filterParams: defaultFilterParams,
  activeFilters: defaultActiveFilters,
};

const setFilter = (state: FilterReducerState, action: FilterReducerActions) => {
  const newState = {
    ...state,
    filterParams: {
      ...state.filterParams,
      ...action.filter,
    },
  };
  const {
    filterParams: {
      minPrice,
      maxPrice,
      starsRating,
      minScore,
      hotelFacilities,
    },
  } = newState;
  return {
    ...newState,
    activeFilters: {
      isPriceFilterActive: minPrice !== null || maxPrice !== null,
      isStarsFilterActive: starsRating.length > 0,
      isMinScoreActive: minScore !== null,
      isHotelFacilitiesActive: hotelFacilities.length > 0,
    },
  };
};

export default (
  state: FilterReducerState = InitialFiltersReducerState,
  action: FilterReducerActions,
) => {
  switch (action.type) {
    case 'filtersReducer/FILTER_CHANGED':
      return setFilter(state, action);
    default:
      return state;
  }
};
