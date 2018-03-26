// @flow

import { DateFormatter } from '@kiwicom/react-native-app-translations';

import type {
  OnChangeSearchParams,
  SearchParams,
} from './allHotels/searchForm/SearchParametersType';
import type { CurrentSearchStats } from './filter/CurrentSearchStatsType';

export type HotelsReducerState = {
  cityId: string | null,
  location: string,
  searchParams: SearchParams,
  currentSearchStats: CurrentSearchStats,
};

export type HotelsReducerActions =
  | {| type: 'setSearch', search: OnChangeSearchParams |}
  | {| type: 'setLocation', location: string |}
  | {| type: 'setCityId', cityId: string | null |}
  | {| type: 'setLocationAndCityId', cityId: string, location: string |}
  | {| type: 'setCurrentSearchStats', currentSearchStats: CurrentSearchStats |};

const InitialHotelsState: HotelsReducerState = {
  cityId: null,
  location: '',
  searchParams: {
    checkin: DateFormatter()
      .add(1, 'week')
      .startOf('isoWeek')
      .toDate(),
    checkout: DateFormatter()
      .add(1, 'week')
      .endOf('isoWeek')
      .toDate(),
    roomsConfiguration: {
      adultsCount: 1,
      children: [],
    },
  },
  currentSearchStats: {
    priceMax: 10000,
    priceMin: 0,
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
    case 'setCurrentSearchStats':
      return {
        ...state,
        currentSearchStats: { ...action.currentSearchStats },
      };
    case 'setLocationAndCityId':
      return {
        ...state,
        location: action.location,
        cityId: action.cityId,
      };
    default:
      return state;
  }
};
