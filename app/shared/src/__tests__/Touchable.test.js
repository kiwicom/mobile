// @flow

import * as React from 'react';
import { View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Translation } from '@kiwicom/mobile-localization';

import Touchable from '../Touchable';

const renderer = new ShallowRenderer();
const VoidAction = () => {};

describe('Touchable with children', () => {
  it('throws error for multiple children', () => {
    // this is fine - only one child
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <Translation passThrough="this is OK" />
        </Touchable>,
      ),
    ).toMatchSnapshot();

    // this is fine - only one child
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <View>
            <Translation passThrough="line 1" />
            <Translation passThrough="line 2" />
          </View>
        </Touchable>,
      ),
    ).toMatchSnapshot();

    // this is not fine - two children
    expect(() =>
      renderer.render(
        <Touchable onPress={VoidAction}>
          <Translation passThrough="line 1" />
          <Translation passThrough="line 2" />
        </Touchable>,
      ),
    ).toThrowErrorMatchingSnapshot();
  });
});
