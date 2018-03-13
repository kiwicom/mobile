// @flow

import * as React from 'react';
import { View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from '../Text';
import TouchableItem from '../TouchableItem';

const renderer = new ShallowRenderer();
const VoidAction = () => {};

describe('TouchableItem with children', () => {
  it('throws error for multiple children', () => {
    // this is fine - only one child
    expect(
      renderer.render(
        <TouchableItem onPress={VoidAction}>
          <Text>this is OK</Text>
        </TouchableItem>,
      ),
    ).toMatchSnapshot();

    // this is fine - only one child
    expect(
      renderer.render(
        <TouchableItem onPress={VoidAction}>
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
        <TouchableItem onPress={VoidAction}>
          <Text>line 1</Text>
          <Text>line 2</Text>
        </TouchableItem>,
      ),
    ).toThrowErrorMatchingSnapshot();
  });
});
