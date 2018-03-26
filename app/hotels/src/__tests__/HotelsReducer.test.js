// @flow

import HotelsReducer from '../HotelsReducer';

const defaultSearchParams = {
  checkin: new Date(3),
  checkout: new Date(4),
  roomsConfiguration: {
    adultsCount: 1,
    children: [],
  },
};

const defaultCurrentSearchStats = {
  priceMax: Number.MAX_SAFE_INTEGER,
  priceMin: 0,
};

describe('HotelsReducer', () => {
  describe('setSearch', () => {
    it('it should update search filters for list of hotels', () => {
      const state = {
        cityId: null,
        location: '',
        searchParams: defaultSearchParams,
        currentSearchStats: defaultCurrentSearchStats,
      };
      const action = {
        type: 'setSearch',
        search: {
          ...defaultSearchParams,
          checkin: new Date(1),
          checkout: new Date(2),
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });
  });

  describe('setCurrentSearchStats', () => {
    it('should update currentSearchStats', () => {
      const state = {
        cityId: null,
        location: '',
        searchParams: defaultSearchParams,
        currentSearchStats: defaultCurrentSearchStats,
      };
      const action = {
        type: 'setCurrentSearchStats',
        currentSearchStats: {
          priceMax: 3999,
          priceMin: 200,
        },
      };

      expect(HotelsReducer(state, action)).toMatchSnapshot();
    });
  });

  it('handles setLocationAndCityId', () => {
    const state = {
      cityId: null,
      location: '',
      searchParams: defaultSearchParams,
      currentSearchStats: defaultCurrentSearchStats,
    };
    const action = {
      type: 'setLocationAndCityId',
      location: 'Rome',
      cityId: 'rome',
    };

    expect(HotelsReducer(state, action)).toMatchSnapshot();
  });
});
