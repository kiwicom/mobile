// @flow

import { Animated } from 'react-native';

import {
  RenderSearchResults,
  topValue,
  lowValue,
} from '../RenderSearchResults';

const defaultProps = (stats: Object = { maxPrice: 100, minPrice: 50 }) => ({
  show: 'list',
  setCurrentSearchStats: jest.fn(),
  data: {
    allAvailableBookingComHotels: {
      stats,
    },
  },
});

it('it initiales correctly when it should show list', () => {
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(defaultProps());
  expect(Component.mapAnimation).toEqual(new Animated.Value(topValue));
  expect(Component.listAnimation).toEqual(new Animated.Value(0));
});

it('it initiales correctly when it should show map', () => {
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults({ show: 'map' });
  expect(Component.mapAnimation).toEqual(new Animated.Value(0));
  expect(Component.listAnimation).toEqual(new Animated.Value(lowValue));
});
