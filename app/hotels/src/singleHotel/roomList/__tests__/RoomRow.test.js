// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { RoomRow } from '../RoomRow';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    select() {},
    deselect() {},
    selected: {},
    availableRoom: {
      originalId: 'bfmlpsvz',
      room: null,
      minimalPrice: null,
      incrementalPrice: [],
    },
  };

  renderer.render(<RoomRow {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders without crashing with missing data', () => {
  const props = {
    select() {},
    deselect() {},
    selected: {},
    availableRoom: undefined,
  };

  renderer.render(<RoomRow {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
