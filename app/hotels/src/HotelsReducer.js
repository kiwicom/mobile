// @flow

import type {
  OnChangeSearchParams,
  SearchParams,
} from './allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from './filter/FilterParametersType';

export type HotelsReducerState = {
  cityId: string | null,
  location: string,
  searchParams: SearchParams,
  filterParams: FilterParams,
};

export type HotelsReducerActions =
  | {| type: 'setSearch', search: OnChangeSearchParams |}
  | {| type: 'setFilter', filter: OnChangeFilterParams |}
  | {| type: 'setLocation', location: string |}
  | {| type: 'setCityId', cityId: string | null |};

const InitialHotelsState: HotelsReducerState = {
  cityId: null,
  location: '',
  searchParams: {
    checkin: null,
    checkout: null,
    roomsConfiguration: {
      adultsCount: 1,
      children: [],
    },
  },
  filterParams: {
    minPrice: null,
    maxPrice: null,
  },
};

export default (
  state: HotelsReducerState = InitialHotelsState,
  action: HotelsReducerActions,
): HotelsReducerState => {
  switch (action.type) {
    case 'setSearch':
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          ...action.search,
        },
      };
    case 'setFilter':
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          ...action.filter,
        },
      };
    case 'setLocation':
      return {
        ...state,
        location: action.location,
      };
    case 'setCityId':
      return {
        ...state,
        cityId: action.cityId,
      };
    default:
      return state;
  }
};
