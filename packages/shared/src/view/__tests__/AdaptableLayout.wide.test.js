// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import Dimensions from '../Dimensions';
import AdaptableLayout from '../AdaptableLayout';

jest.mock('../../Device', () => ({
  isWideLayout: () => true,
}));

const RendersCorrectly = () => 'I am going to render without any problems...';

it('renders wide components', () => {
  expect(
    Renderer.create(
      <Dimensions.Provider dimensions={{ width: 700, height: 500 }}>
        <AdaptableLayout renderOnWide={<RendersCorrectly />} />
      </Dimensions.Provider>,
    ),
  ).toMatchSnapshot();
});

it('renders narrow component if there is no wide one', () => {
  expect(
    Renderer.create(
      <Dimensions.Provider dimensions={{ width: 200, height: 500 }}>
        <AdaptableLayout renderOnNarrow={<RendersCorrectly />} />
      </Dimensions.Provider>,
    ),
  ).toMatchSnapshot();
});
