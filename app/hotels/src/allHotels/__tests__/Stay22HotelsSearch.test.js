// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import { Stay22HotelsSearch } from '../Stay22HotelsSearch';

const getProps = (props: Object = {}) => ({
  checkin: new Date(1),
  checkout: new Date(2),
  currency: 'EUR',
  roomsConfiguration: [{ adultsCount: 2, children: [] }],
  longitude: 0,
  latitude: 0,
  ...props,
});

it('calculates guests correctly', () => {
  const Component = new Stay22HotelsSearch(getProps());
  expect(Component.getGuests()).toEqual(2);
});

it('calculates guests correctly with children', () => {
  const Component = new Stay22HotelsSearch(
    getProps({
      roomsConfiguration: [
        { adultsCount: 2, children: [{ age: 5 }, { age: 17 }] },
      ],
    }),
  );
  expect(Component.getGuests()).toEqual(4);
});

it('calculates guests correctly with missing input', () => {
  const Component = new Stay22HotelsSearch(
    getProps({
      roomsConfiguration: [{ adultsCount: 2 }],
    }),
  );
  expect(Component.getGuests()).toEqual(2);
});

it('renders error with missing checkin', () => {
  const props = getProps({ checkin: null });
  const instance = renderer.create(<Stay22HotelsSearch {...props} />).root;

  expect(instance.findByProps({ testID: 'render-error' })).toBeDefined();
});

it('renders error with missing checkout', () => {
  const props = getProps({ checkout: null });
  const instance = renderer.create(<Stay22HotelsSearch {...props} />).root;

  expect(instance.findByProps({ testID: 'render-error' })).toBeDefined();
});

it('renders error with missing latitude', () => {
  const props = getProps({ latitude: null });
  const instance = renderer.create(<Stay22HotelsSearch {...props} />).root;

  expect(instance.findByProps({ testID: 'render-error' })).toBeDefined();
});

it('renders error with missing longitude', () => {
  const props = getProps({ longitude: null });
  const instance = renderer.create(<Stay22HotelsSearch {...props} />).root;

  expect(instance.findByProps({ testID: 'render-error' })).toBeDefined();
});
