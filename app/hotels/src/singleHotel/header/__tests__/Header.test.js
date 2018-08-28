// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Header } from '../Header';

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
};

it('renders without crashing', () => {
  expect(
    renderer.render(
      <Header
        // $FlowExpectedError: we are intentionally passing broken hotel object (invalid Props)
        hotel={{
          hotel: 'asdf',
        }}
        navigation={navigation}
      />,
    ),
  ).toBeTruthy();
});

it('renders without crashing with missing data', () => {
  expect(
    renderer.render(<Header navigation={navigation} hotel={undefined} />),
  ).toBeTruthy();
});
