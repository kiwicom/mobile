// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Header } from '../Header';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const props = {
    openGallery() {},
    hotel: ({
      hotel: 'asdf',
    }: Object),
  };

  renderer.render(<Header {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders without crashing with missing data', () => {
  const props = {
    openGallery() {},
    hotel: undefined,
  };

  renderer.render(<Header {...props} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
