// @flow strict

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { BoardingPassMultiCity } from '../BoardingPassMultiCity';

const renderer = new ShallowRenderer();

const props = {
  trips: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
};
describe('BoardingPassMultiCity', () => {
  it('renders even with many trips', () => {
    expect(
      // $FlowExpectedError: Passing just what is needed to test that the component renders
      renderer.render(<BoardingPassMultiCity data={props} />),
    ).toMatchSnapshot();
  });
});
