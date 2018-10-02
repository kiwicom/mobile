// @flow

import { Logger } from '@kiwicom/mobile-shared';
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

it('it initiales correctly when it should show list', () => {
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults({ show: 'map' });
  expect(Component.mapAnimation).toEqual(new Animated.Value(0));
  expect(Component.listAnimation).toEqual(new Animated.Value(lowValue));
});

it('calls Logger when mounted', () => {
  const spy = jest.spyOn(Logger, 'ancillaryDisplayed');
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(defaultProps());
  Component.componentDidMount();
  expect(spy).toHaveBeenCalled();
});

it('calls setCurrentSearchStats when minPrice and maxPrice are defined', () => {
  const props = defaultProps();
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).toHaveBeenCalled();
});

it('calls setCurrentSearchStats when minPrice and maxPrice are 0', () => {
  const props = defaultProps({ minPrice: 0, maxPrice: 0 });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).toHaveBeenCalled();
});

it('calls does not call setCurrentSearchStats when minPrice is null', () => {
  const props = defaultProps({ minPrice: null, maxPrice: 10 });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).not.toHaveBeenCalled();
});

it('calls does not call setCurrentSearchStats when maxPrice is null', () => {
  const props = defaultProps({ minPrice: 3, maxPrice: null });
  // $FlowExpectedError: Passing only props needed for this test
  const Component = new RenderSearchResults(props);
  Component.componentDidMount();
  expect(props.setCurrentSearchStats).not.toHaveBeenCalled();
});
