// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { AllHotelsSearchList } from '../AllHotelsSearchList';

const renderer = new ShallowRenderer();
const voidCallback = () => {};

it('renders found hotels', () => {
  const data = {
    edges: [
      {
        node: {
          id: 'hotel1',
        },
      },
      {
        node: {
          id: 'hotel2',
        },
      },
    ],
  };

  renderer.render(
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when no hotel is found', () => {
  const data = {
    edges: [],
  };

  renderer.render(
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when data is missing', () => {
  const data = {
    edges: null,
  };

  renderer.render(
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
