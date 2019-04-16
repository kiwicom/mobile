// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Logger } from '@kiwicom/mobile-shared';

import { HotelsPaginationContainer } from '../HotelsPaginationContainer';
import { HotelsContext } from '../../HotelsContext';

jest.mock('../RenderSearchResults');
jest.mock('../../filter/FilterStripe', () => () => null);

const defaultProps = (stats: Object = { maxPrice: 100, minPrice: 50 }) => ({
  data: {
    allAvailableBookingComHotels: {
      stats,
    },
  },
  relay: {
    hasMore: () => false,
  },
});

const renderComponent = (
  props: Object = {},
  setCurrentSearchStats: Function = () => {},
) =>
  renderer.create(
    <HotelsContext.Provider
      // $FlowExpectedError: Just passing what is needed for the test
      value={{
        // $FlowExpectedError: Just passing what is needed for the test
        actions: {
          setCurrentSearchStats,
        },
      }}
    >
      <HotelsPaginationContainer {...props} />
    </HotelsContext.Provider>,
  );

it('calls Logger when mounted', () => {
  const spy = jest.spyOn(Logger, 'ancillaryDisplayed');
  const wrapper = renderComponent(defaultProps());
  wrapper.update(); // useEffect is not called on intial render, but when browser is idle, https://github.com/facebook/react/issues/14050#issuecomment-447888631
  wrapper.update();
  expect(spy).toHaveBeenCalledWith(
    'ANCILLARY_STEP_RESULTS',
    'ANCILLARY_PROVIDER_BOOKINGCOM',
  );
  expect(spy).toHaveBeenCalledTimes(1);
});

it('calls setCurrentSearchStats when minPrice and maxPrice are defined', () => {
  const setCurrentSearchStats = jest.fn();
  const wrapper = renderComponent(defaultProps(), setCurrentSearchStats);
  wrapper.update();
  expect(setCurrentSearchStats).toHaveBeenCalledWith({
    priceMax: 100,
    priceMin: 50,
  });
});

it('calls setCurrentSearchStats when minPrice and maxPrice are 0', () => {
  const setCurrentSearchStats = jest.fn();
  const wrapper = renderComponent(
    defaultProps({ minPrice: 0, maxPrice: 0 }),
    setCurrentSearchStats,
  );
  wrapper.update();

  expect(setCurrentSearchStats).toHaveBeenCalledWith({
    priceMax: 0,
    priceMin: 0,
  });
});

it('calls does not call setCurrentSearchStats when minPrice is null', () => {
  const setCurrentSearchStats = jest.fn();
  const wrapper = renderComponent(
    defaultProps({ minPrice: null, maxPrice: 10 }),
    setCurrentSearchStats,
  );
  wrapper.update();
  expect(setCurrentSearchStats).not.toHaveBeenCalled();
});

it('calls does not call setCurrentSearchStats when maxPrice is null', () => {
  const setCurrentSearchStats = jest.fn();
  const wrapper = renderComponent(
    defaultProps({ minPrice: 3, maxPrice: null }),
    setCurrentSearchStats,
  );
  wrapper.update();
  expect(setCurrentSearchStats).not.toHaveBeenCalled();
});
