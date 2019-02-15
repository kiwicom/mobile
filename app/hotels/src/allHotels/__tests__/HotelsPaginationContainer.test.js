// @flow

import { Logger } from '@kiwicom/mobile-shared';

import { HotelsPaginationContainer } from '../HotelsPaginationContainer';

const defaultProps = (stats: Object = { maxPrice: 100, minPrice: 50 }) => ({
  setCurrentSearchStats: jest.fn(),
  data: {
    allAvailableBookingComHotels: {
      stats,
    },
  },
});

it('calls Logger when mounted', () => {
  const spy = jest.spyOn(Logger, 'ancillaryDisplayed');
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new HotelsPaginationContainer(defaultProps());
  Component.componentDidMount();
  expect(spy).toHaveBeenCalledWith(
    'ANCILLARY_STEP_RESULTS',
    'ANCILLARY_PROVIDER_BOOKINGCOM',
  );
});

it('calls setCurrentSearchStats when minPrice and maxPrice are defined', () => {
  const props = defaultProps();
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new HotelsPaginationContainer(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).toHaveBeenCalledWith({
    priceMax: 100,
    priceMin: 50,
  });
});

it('calls setCurrentSearchStats when minPrice and maxPrice are 0', () => {
  const props = defaultProps({ minPrice: 0, maxPrice: 0 });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new HotelsPaginationContainer(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).toHaveBeenCalledWith({
    priceMax: 0,
    priceMin: 0,
  });
});

it('calls does not call setCurrentSearchStats when minPrice is null', () => {
  const props = defaultProps({ minPrice: null, maxPrice: 10 });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new HotelsPaginationContainer(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).not.toHaveBeenCalled();
});

it('calls does not call setCurrentSearchStats when maxPrice is null', () => {
  const props = defaultProps({ minPrice: 3, maxPrice: null });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new HotelsPaginationContainer(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).not.toHaveBeenCalled();
});
