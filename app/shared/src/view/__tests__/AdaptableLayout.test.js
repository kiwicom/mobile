// @flow

import * as React from 'react';
import Renderer from 'react-test-renderer';

import AdaptableLayout from '../AdaptableLayout';

it('renders null without props', () => {
  expect(Renderer.create(<AdaptableLayout />).toJSON()).toBeNull();
});
