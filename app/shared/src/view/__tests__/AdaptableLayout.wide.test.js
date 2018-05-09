// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import AdaptableLayout from '../AdaptableLayout';

jest.mock('../../Device', () => ({
  isWideLayout: () => true,
  subscribeToDimensionChanges: () => () => {},
}));

const RendersCorrectly = () => 'I am going to render without any problems...';

const ThrowsError = () => {
  throw new Error('do not render');
};

it('renders wide components', () => {
  expect(
    Renderer.create(
      <AdaptableLayout.Provider>
        <AdaptableLayout.Consumer
          renderOnWide={<RendersCorrectly />}
          renderOnNarrow={<ThrowsError />}
        />
      </AdaptableLayout.Provider>,
    ),
  ).toMatchSnapshot();
});

it('renders empty element if there is no wide layout', () => {
  expect(
    Renderer.create(
      <AdaptableLayout.Provider>
        <AdaptableLayout.Consumer renderOnNarrow={<ThrowsError />} />
      </AdaptableLayout.Provider>,
    ),
  ).toMatchSnapshot();
});
