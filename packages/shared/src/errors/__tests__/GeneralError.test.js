// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Translation from '../../Translation';
import GeneralError from '../GeneralError';

it('renders without crashing', () => {
  expect(
    renderer.create(
      <GeneralError
        errorMessage={<Translation passThrough="Error Message" />}
      />,
    ),
  ).toBeTruthy();
});
