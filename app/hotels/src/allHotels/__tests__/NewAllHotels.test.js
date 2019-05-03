// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import NewAllHotels from '../NewAllHotels';
import { HotelsContext } from '../../HotelsContext';
import InputErrorScreen from '../InputErrorScreen';

jest.mock('../NewAllHotelsSearch');

it('renders correctly when there are no errors', () => {
  const state = {
    cityId: '234',
    errors: {},
  };
  const wrapper = create(
    // $FlowExpectedError: Passing only state needed for tests to run
    <HotelsContext.Provider value={state}>
      <NewAllHotels />
    </HotelsContext.Provider>,
  );
  expect(
    wrapper.root.findByProps({ testID: 'NewAllHotelsSearch' }),
  ).not.toBeNull();
});

it('renders correctly when there are errors', () => {
  const state = {
    cityId: '234',
    errors: {
      interval: 0,
    },
  };
  const wrapper = create(
    // $FlowExpectedError: Passing only state needed for tests to run
    <HotelsContext.Provider value={state}>
      <NewAllHotels />
    </HotelsContext.Provider>,
  );
  expect(wrapper.root.findByType(InputErrorScreen)).not.toBeNull();
  expect(() => {
    wrapper.root.findByProps({ testID: 'NewAllHotelsSearch' });
  }).toThrow();
});
