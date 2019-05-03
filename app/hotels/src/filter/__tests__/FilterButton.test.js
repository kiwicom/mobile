// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-shared';
import { create } from 'react-test-renderer';

import FilterButton from '../FilterButton';

const Title = <Translation passThrough="title" />;

it('renders correctly without icon', () => {
  const wrapper = create(
    <FilterButton title={Title} onPress={jest.fn()} isActive={false} />,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'testIcon' });
  }).toThrow();
});

it('renders correctly when active', () => {
  const wrapper = create(
    <FilterButton title={Title} onPress={jest.fn()} isActive={true} />,
  );
  expect(wrapper).toMatchSnapshot();
  const closeWrapper = wrapper.root.findByProps({ testID: 'closeWrapper' });
  expect(closeWrapper).not.toBeNull();
});

it('renders correctly when not active', () => {
  const wrapper = create(
    <FilterButton title={Title} onPress={jest.fn()} isActive={false} />,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'closeWrapper' });
  }).toThrow();
});
