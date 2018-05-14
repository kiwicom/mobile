// @flow

import * as React from 'react';
import { View } from 'react-native';
import Renderer from 'react-test-renderer';

import MenuGroup from '../MenuGroup';

it('works with 0 children', () => {
  // $FlowExpectedError: Flow doesn't allow empty children property
  expect(Renderer.create(<MenuGroup />)).toBeTruthy();
});

it('works with one child', () => {
  expect(
    Renderer.create(
      <MenuGroup>
        <View />
      </MenuGroup>,
    ),
  ).toBeTruthy();
});

it('works with multiple children', () => {
  expect(
    Renderer.create(
      <MenuGroup>
        <View />
        <View />
        <View />
      </MenuGroup>,
    ),
  ).toBeTruthy();
});
