// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { Translation } from '@kiwicom/mobile-localization';

import GeneralError from '../GeneralError';

it('renders as expected', () => {
  expect(
    renderer.create(
      <GeneralError
        errorMessage={<Translation passThrough="Error Message" />}
      />,
    ),
  ).toMatchSnapshot();
});
