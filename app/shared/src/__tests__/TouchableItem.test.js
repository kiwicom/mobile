// @flow

import * as React from 'react';
import { View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from '../Text';
import Touchable from '../Touchable';

const renderer = new ShallowRenderer();
const VoidAction = () => {};

describe('Touchable with children', () => {
  it('throws error for multiple children', () => {
    // this is fine - only one child
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <Text>this is OK</Text>
        </Touchable>,
      ),
    ).toMatchSnapshot();

    // this is fine - only one child
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <View>
            <Text>line 1</Text>
            <Text>line 2</Text>
          </View>
        </Touchable>,
      ),
    ).toMatchSnapshot();

    // this is not fine - two children
    expect(() =>
      renderer.render(
        <Touchable onPress={VoidAction}>
          <Text>line 1</Text>
          <Text>line 2</Text>
        </Touchable>,
      ),
    ).toThrowErrorMatchingSnapshot();
  });
});
