// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import HotelsFilterContext from '../HotelsFilterContext';

const getWrapper = () =>
  renderer
    .create(<HotelsFilterContext.Provider>{null}</HotelsFilterContext.Provider>)
    .getInstance();

it('sets filter', () => {
  const wrapper = getWrapper();

  wrapper.setFilter({ orderBy: 'PRICE' });
  wrapper.setFilter({
    starsRating: [1, 2],
  });
  wrapper.setFilter({
    minPrice: 45,
    maxPrice: 95,
  });

  expect(wrapper.state.filterParams.starsRating).toEqual([1, 2]);
  expect(wrapper.state.filterParams.maxPrice).toEqual(95);
  expect(wrapper.state.filterParams.minPrice).toEqual(45);
  expect(wrapper.state.orderBy).toEqual('PRICE');

  expect(wrapper.state.activeFilters.isStarsFilterActive).toBe(true);
  expect(wrapper.state.activeFilters.isPriceFilterActive).toBe(true);
  expect(wrapper.state.activeFilters.isOrderFilterActive).toBe(true);
});

it('sets orderBy filter inactive', () => {
  const wrapper = getWrapper();

  wrapper.setFilter({ orderBy: 'PRICE' });
  expect(wrapper.state.orderBy).toEqual('PRICE');
  expect(wrapper.state.activeFilters.isOrderFilterActive).toBe(true);

  wrapper.setFilter({ orderBy: null });
  expect(wrapper.state.orderBy).toEqual(null);
  expect(wrapper.state.activeFilters.isOrderFilterActive).toBe(false);
});
