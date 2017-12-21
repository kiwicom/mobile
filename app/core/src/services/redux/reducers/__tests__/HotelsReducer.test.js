// @flow

import HotelsReducer from './../HotelsReducer';

const defaultSearchParams = {
  latitude: null,
  longitude: null,
  checkin: null,
  checkout: null,
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

describe('HotelsReducer', () => {
  describe('setSearchFilters', () => {
    it('it should update search filters for list of hotels', () => {
      const state = {
        searchParams: defaultSearchParams,
      };
      const action = {
        type: 'setSearchFilters',
        filter: {
          ...defaultSearchParams,
          latitude: 50.5,
          checkin: new Date(1),
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });
  });
});
