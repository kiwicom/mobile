// @flow
import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Header } from '../Header';

const renderer = new ShallowRenderer();
const VoidAction = () => {};

it('renders without crashing', () => {
  expect(
    renderer.render(
      <Header
        openGallery={VoidAction}
        // $FlowExpectedError: we are intentionally passing broken hotel object (invalid Props)
        hotel={{
          hotel: 'asdf',
        }}
      />,
    ),
  ).toBeTruthy();
});

it('renders without crashing with missing data', () => {
  expect(
    renderer.render(<Header openGallery={VoidAction} hotel={undefined} />),
  ).toBeTruthy();
});
