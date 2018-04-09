// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Icon } from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';

import FilterButton from '../FilterButton';

let renderer;
beforeEach(() => {
  renderer = new ShallowRenderer();
});

describe('Filter button', () => {
  it('render default button', async () => {
    const props = {
      title: <Translation passThrough="title" />,
      filter: 'filter',
      onPress: jest.fn(),
      icon: <Icon name="attach-money" size={20} />,
      isActive: false,
    };
    renderer.render(<FilterButton {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('render active button', async () => {
    const props = {
      title: <Translation passThrough="title" />,
      filter: 'filter',
      onPress: jest.fn(),
      icon: <Icon name="attach-money" size={20} />,
      isActive: true,
    };
    renderer.render(<FilterButton {...props} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
