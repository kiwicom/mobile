// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Dimensions from '../Dimensions';
import AdaptableLayout from '../AdaptableLayout';

jest.mock('../../Device', () => ({
  isWideLayout: () => true,
}));

let width = 700;

jest.doMock('Dimensions', () => ({
  get: () => ({ width, height: 500 }),
}));

afterEach(() => {
  width = 700;
});

const RendersCorrectly = () => 'I am going to render without any problems...';
const ThrowsError = () => {
  throw new Error('do not render');
};

it('renders wide components', () => {
  expect(
    Renderer.create(
      <Dimensions.Provider>
        <AdaptableLayout
          renderOnNarrow={<ThrowsError />}
          renderOnWide={<RendersCorrectly />}
        />
      </Dimensions.Provider>,
    ),
  ).toMatchSnapshot();
});

it('renders empty element if there is no wide layout', () => {
  width = 200;
  expect(
    Renderer.create(
      <Dimensions.Provider>
        <AdaptableLayout renderOnNarrow={<ThrowsError />} />
      </Dimensions.Provider>,
    ),
  ).toMatchSnapshot();
});
