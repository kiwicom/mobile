// @flow

import type { ReduxState, ReduxActions } from '../../../types/Redux';

type HotelsState = $PropertyType<ReduxState, 'hotels'>;

const InitialHotelsState: HotelsState = {
  searchParams: {
    latitude: 50.08,
    longitude: 14.44,
    checkin: null,
    checkout: null,
    roomsConfiguration: {
      adultsCount: 1,
      children: [],
    },
  },
};

export default (
  state: HotelsState = InitialHotelsState,
  action: ReduxActions,
): HotelsState => {
  switch (action.type) {
    case 'setSearchFilters':
      return {
        ...state,
        searchParams: action.filter,
      };
    default:
      return state;
  }
};
