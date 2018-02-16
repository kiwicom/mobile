// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

import TouchableItem from '../TouchableItem';

const renderer = new ShallowRenderer();

it('throws error for multiple children', () => {
  // this is fine - only one child
  expect(
    renderer.render(
      <TouchableItem>
        <Text>this is OK</Text>
      </TouchableItem>,
    ),
  ).toMatchSnapshot();

  // this is fine - only one child
  expect(
    renderer.render(
      <TouchableItem>
        <View>
          <Text>line 1</Text>
          <Text>line 2</Text>
        </View>
      </TouchableItem>,
    ),
  ).toMatchSnapshot();

  // this is not fine - two children
  expect(() =>
    renderer.render(
      <TouchableItem>
        <Text>line 1</Text>
        <Text>line 2</Text>
      </TouchableItem>,
    ),
  ).toThrowErrorMatchingSnapshot();
});
