// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';

import PartialFailure from '../PartialFailure';

it('renders failure and its children', () => {
  expect(
    renderer.create(
      <PartialFailure>
        <Translation passThrough="Some content" />
      </PartialFailure>,
    ),
  ).toMatchSnapshot();
});
