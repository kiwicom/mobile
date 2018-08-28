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
};
const checkin = new Date(0);
const checkout = new Date(1);
const roomsConfiguration = [{ adultsCount: 1, children: [] }];
const currency = 'EUR';
const hotelId = 'lol-id';

it('renders without crashing', () => {
  const props = {
    isWide: false,
    hotel: ({
      hotel: 'asdf',
    }: Object),
    navigation,
    checkin,
    checkout,
    roomsConfiguration,
    currency,
    hotelId,
  };

  renderer.render(<Location {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    isWide: false,
    hotel: undefined,
    navigation,
    checkin,
    checkout,
    roomsConfiguration,
    currency,
    hotelId,
  };

  renderer.render(<Location {...props} />);
});
