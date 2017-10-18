// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import GeneralError from '../GeneralError';

it('renders as expected', () => {
  expect(
    renderer.create(<GeneralError errorMessage="Error Message" />),
  ).toMatchSnapshot();
});
