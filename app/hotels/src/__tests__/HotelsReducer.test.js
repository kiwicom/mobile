// @flow

import HotelsReducer from '../HotelsReducer';

const defaultSearchParams = {
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
        cityId: null,
        location: '',
        searchParams: defaultSearchParams,
      };
      const action = {
        type: 'setSearchFilters',
        filter: {
          ...defaultSearchParams,
          checkin: new Date(1),
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });
  });
});
