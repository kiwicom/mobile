// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import AdaptableLayout from '../AdaptableLayout';

jest.mock('../../Device', () => ({
  isWideLayout: () => false,
  subscribeToDimensionChanges: () => () => {},
}));

const RendersCorrectly = () => 'I am going to render without any problems...';

const ThrowsError = () => {
  throw new Error('do not render');
};

it('renders narrow components', () => {
  expect(
    Renderer.create(
      <AdaptableLayout.Provider>
        <AdaptableLayout.Consumer
          renderOnWide={<ThrowsError />}
          renderOnNarrow={<RendersCorrectly />}
        />
      </AdaptableLayout.Provider>,
    ),
  ).toMatchSnapshot();
});

it('renders empty element if there is no narrow layout', () => {
  expect(
    Renderer.create(
      <AdaptableLayout.Provider>
        <AdaptableLayout.Consumer renderOnWide={<ThrowsError />} />
      </AdaptableLayout.Provider>,
    ),
  ).toMatchSnapshot();
});
