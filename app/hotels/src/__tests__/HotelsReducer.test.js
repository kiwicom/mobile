// @flow

import HotelsReducer, { defaultFilterParams } from '../HotelsReducer';

const defaultSearchParams = {
  checkin: null,
  checkout: null,
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

describe('HotelsReducer', () => {
  describe('setSearch', () => {
    it('it should update search filters for list of hotels', () => {
      const state = {
        cityId: null,
        location: '',
        searchParams: defaultSearchParams,
        filterParams: defaultFilterParams,
      };
      const action = {
        type: 'setSearch',
        search: {
          ...defaultSearchParams,
          checkin: new Date(1),
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });

    it('it should update filters for list of hotels', () => {
      const state = {
        cityId: null,
        location: '',
        searchParams: defaultSearchParams,
        filterParams: defaultFilterParams,
      };
      const action = {
        type: 'setFilter',
        filter: {
          minPrice: 20,
          maxPrice: 30,
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });
  });
});
