// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import type { AllHotelsSearchList_data as AllHotelsSearchListType } from '../__generated__/AllHotelsSearchList_data.graphql';
import { AllHotelsSearchList } from '../AllHotelsSearchList';

const renderer = new ShallowRenderer();

const $fragmentRefs: any = null;
const $refType: any = null;
const Footer = () => null;

it('renders found hotels', () => {
  const data: AllHotelsSearchListType = [
    {
      id: 'hotel1',
      hotelId: 'lol1',
      $fragmentRefs,
      $refType,
    },
    {
      id: 'hotel2',
      hotelId: 'lol2',
      $fragmentRefs,
      $refType,
    },
  ];

  renderer.render(
    <AllHotelsSearchList
      data={data}
      setHotelId={jest.fn()}
      ListFooterComponent={<Footer />}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when no hotel is found', () => {
  const data: Array<empty> = [];

  renderer.render(
    <AllHotelsSearchList
      data={data}
      setHotelId={jest.fn()}
      ListFooterComponent={<Footer />}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders a "not found" message when data is missing', () => {
  const data = null;

  renderer.render(
    // $FlowExpectedError: Testing bad input
    <AllHotelsSearchList data={data} />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
