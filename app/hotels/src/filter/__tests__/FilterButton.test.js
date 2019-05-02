// @flow

import * as React from 'react';
import { Icon, Translation } from '@kiwicom/mobile-shared';
import { create } from 'react-test-renderer';

import FilterButton from '../FilterButton';

const FilterIcon = <Icon name="sort" testID="testIcon" />;
const Title = <Translation passThrough="title" />;

it('renders with icon', () => {
  const wrapper = create(
    <FilterButton
      icon={FilterIcon}
      title={Title}
      onPress={jest.fn()}
      isActive={false}
    />,
  );
  expect(wrapper).toMatchSnapshot();
  const icon = wrapper.root.findByProps({ testID: 'testIcon' });
  expect(icon).not.toBeNull();
});

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
    <FilterButton
      icon={FilterIcon}
      title={Title}
      onPress={jest.fn()}
      isActive={true}
    />,
  );
  expect(wrapper).toMatchSnapshot();
  const closeWrapper = wrapper.root.findByProps({ testID: 'closeWrapper' });
  expect(closeWrapper).not.toBeNull();
});

it('renders correctly when not active', () => {
  const wrapper = create(
    <FilterButton
      icon={FilterIcon}
      title={Title}
      onPress={jest.fn()}
      isActive={false}
    />,
  );

  expect(() => {
    wrapper.root.findByProps({ testID: 'closeWrapper' });
  }).toThrow();
});
