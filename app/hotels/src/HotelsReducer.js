// @flow

export type HotelsSearchParametersType = {
  checkin: Date | null,
  checkout: Date | null,
  roomsConfiguration: {|
    adultsCount: number,
    children: Array<{|
      age: number,
    |}>,
  |},
};

export type HotelsReducerState = {
  cityId: string | null,
  location: string,
  searchParams: HotelsSearchParametersType,
};

export type HotelsReducerActions =
  | {| type: 'setSearchFilters', filter: HotelsSearchParametersType |}
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
};

export default (
  state: HotelsReducerState = InitialHotelsState,
  action: HotelsReducerActions,
): HotelsReducerState => {
  switch (action.type) {
    case 'setSearchFilters':
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
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
