// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import PartialFailure from '../PartialFailure';

it('renders failure and its children', () => {
  expect(
    renderer.create(
      <PartialFailure>
        <DummyTranslation id="Some content" />
      </PartialFailure>,
    ),
  ).toMatchSnapshot();
});
