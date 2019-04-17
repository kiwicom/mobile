// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Location } from '../Location';

const renderer = new ShallowRenderer();
const navigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
  goBack: jest.fn(),
  state: {
    params: {},
  },
  addListener: jest.fn(() => ({
    remove: jest.fn(),
  })),
  getParam: jest.fn(),
};

it('renders without crashing', () => {
  const props = {
    hotel: ({
      hotel: 'asdf',
    }: Object),
    navigation,
  };

  renderer.render(<Location {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    hotel: undefined,
    navigation,
  };

  renderer.render(<Location {...props} />);
});
