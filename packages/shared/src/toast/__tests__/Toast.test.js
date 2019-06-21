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

it('renders nothing intially', () => {
  expect(getWrapper()).toMatchSnapshot();
});

it('renders when show is called', () => {
  const wrapper = getWrapper();
  const instance = wrapper.getInstance();
  instance.show();

  expect(wrapper).toMatchSnapshot();
});

it('shows toast when show is called', () => {
  Animated.timing = jest.fn(() => ({
    start: jest.fn(),
  }));
  const wrapper = getWrapper();
  const instance = wrapper.getInstance();

  expect(() => {
    wrapper.root.findByProps({ testID: 'toast' });
  }).toThrow();

  instance.show();

  expect(instance.state.isVisible).toBe(true);
  expect(Animated.timing).toHaveBeenCalledWith(expect.any(Animated.Value), {
    toValue: 0,
    duration: 250,
    useNativeDriver: true,
  });
  // No longer hidden
  const view = wrapper.root.findByProps({ testID: 'toast' });
  expect(view).toBeDefined();
});

it('hides toast when hide is called', () => {
  Animated.timing = jest.fn(() => ({
    start: cb => cb(),
  }));
  const wrapper = getWrapper();
  const instance = wrapper.getInstance();

  // Asserting that it is hidden at first
  expect(() => {
    wrapper.root.findByProps({ testID: 'toast' });
  }).toThrow();

  instance.show();
  // No longer hidden
  expect(wrapper.root.findByProps({ testID: 'toast' })).toBeDefined();

  instance.hide();

  // Hidden again
  expect(() => {
    wrapper.root.findByProps({ testID: 'toast' });
  }).toThrow();
});
