// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import PartialFailure from '../PartialFailure';

it('renders failure and its children', () => {
  expect(
    renderer.create(
      <PartialFailure>
        <div>Some content</div>
      </PartialFailure>,
    ),
  ).toMatchSnapshot();
});
