// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilterButton from './FilterButton';

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

describe('Filter button', () => {
  it('render default button', async () => {
    const props = {
      title: 'title',
      filter: 'filter',
      onPress: jest.fn(),
      icon: { name: 'attach-money' },
      isActive: false,
    };
    renderer.render(<FilterButton {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('render active button', async () => {
    const props = {
      title: 'title',
      filter: 'filter',
      onPress: jest.fn(),
      icon: { name: 'attach-money' },
      isActive: true,
    };
    renderer.render(<FilterButton {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
