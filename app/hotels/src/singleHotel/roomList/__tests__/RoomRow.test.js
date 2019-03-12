// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RoomRow } from '../RoomRow';

const renderer = new ShallowRenderer();
const environment: any = null;
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
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    availableRoom: {
      originalId: 'bfmlpsvz',
      room: null,
      minimalPrice: null,
      incrementalPrice: [],
    },
    navigation,
    getGuestCount: () => 2,
    numberOfRooms: 2,
    relay: { environment },
  };

  renderer.render(<RoomRow {...props} />);
});

it('renders without crashing with missing data', () => {
  const props = {
    availableRoom: undefined,
    navigation,
    getGuestCount: () => 2,
    numberOfRooms: 2,
    relay: { environment },
  };

  renderer.render(<RoomRow {...props} />);
});
