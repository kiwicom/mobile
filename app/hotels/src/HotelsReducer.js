// @flow

export type HotelsSearchParametersType = {|
  latitude: number | null,
  longitude: number | null,
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: {|
    adultsCount: number,
    children: number[],
  |},
|};

export type HotelsReducerState = {
  searchParams: HotelsSearchParametersType,
};

export type HotelsReducerActions = {|
  type: 'setSearchFilters',
  filter: HotelsSearchParametersType,
|};

const InitialHotelsState: HotelsReducerState = {
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
  state: HotelsReducerState = InitialHotelsState,
  action: HotelsReducerActions,
): HotelsReducerState => {
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
