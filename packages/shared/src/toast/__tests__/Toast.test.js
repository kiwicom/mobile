// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';
import { Animated } from 'react-native';

import Toast from '../Toast';
import Translation from '../../Translation';

let originalTiming;

beforeEach(() => (originalTiming = Animated.timing));
afterEach(() => {
  Animated.timing = originalTiming;
});

jest.mock('Animated', () => {
  // $FlowExpectedError: this is available
  const ActualAnimated = require.requireActual('Animated');
  return {
    ...ActualAnimated,
    timing: (value, config) => {
      return {
        start: callback => {
          value.setValue(config.toValue);
          if (callback) {
            callback();
          }
        },
      };
    },
  };
});

const getWrapper = () =>
  create(<Toast text={<Translation passThrough="My toast" />} />);

it('renders', () => {
  expect(getWrapper()).toMatchSnapshot();
});

it('shows toast when show is called', () => {
  Animated.timing = jest.fn(() => ({
    start: jest.fn(),
  }));
  const wrapper = getWrapper();
  const instance = wrapper.getInstance();
  const view = wrapper.root.findByProps({ testID: 'toast' });
  // Asserting that it is hidden at first
  expect(view.props.style[1]).toEqual({
    display: 'none',
  });

  instance.show();

  expect(instance.state.isVisible).toBe(true);
  expect(Animated.timing).toHaveBeenCalledWith(expect.any(Animated.Value), {
    toValue: 1,
    duration: 500,
    useNativeDriver: true,
  });
  // No longer hidden
  expect(view.props.style[1]).toBe(false);
});

it('hides toast when hide is called', () => {
  Animated.timing = jest.fn(() => ({
    start: cb => cb(),
  }));
  const wrapper = getWrapper();
  const instance = wrapper.getInstance();
  const view = wrapper.root.findByProps({ testID: 'toast' });
  // Asserting that it is hidden at first
  expect(view.props.style[1]).toEqual({
    display: 'none',
  });

  instance.show();
  // No longer hidden
  expect(view.props.style[1]).toBe(false);

  instance.hide();

  // Hidden again
  expect(view.props.style[1]).toEqual({
    display: 'none',
  });
});
