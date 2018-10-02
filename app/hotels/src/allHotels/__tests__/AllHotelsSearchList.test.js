// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { AllHotelsSearchList } from '../AllHotelsSearchList';

const renderer = new ShallowRenderer();
const voidCallback = () => {};

const $fragmentRefs: any = null;
const $refType: any = null;
it('renders found hotels', () => {
  const data = [
    {
      node: {
        id: 'hotel1',
        $fragmentRefs,
      },
      $refType,
    },
    {
      node: {
        id: 'hotel2',
        $fragmentRefs,
      },
      $refType,
    },
  ];

  renderer.render(
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when no hotel is found', () => {
  const data = [];

  renderer.render(
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when data is missing', () => {
  const data = null;

  renderer.render(
    // $FlowExpectedError: Testing bad input
    <AllHotelsSearchList data={data} openSingleHotel={voidCallback} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
