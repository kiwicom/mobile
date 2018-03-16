// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Text from '../Text';
import Touchable from '../Touchable';

jest.mock('TouchableNativeFeedback', () => {
  const mock = jest.genMockFromModule('TouchableNativeFeedback');
  mock.canUseNativeForeground = () => true;
  mock.Ripple = jest.fn();
  return mock;
});
jest.mock('Platform', () => ({
  OS: 'android',
  Version: 22,
}));

const renderer = new ShallowRenderer();
const VoidAction = () => {};

describe('Touchable with ripple effect', () => {
  it('renders with foreground', () => {
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <Text>line</Text>
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with ripple color', () => {
    expect(
      renderer.render(
        <Touchable rippleColor="red" onPress={VoidAction}>
          <Text>line</Text>
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });

  it('disables foreground in borderless mode', () => {
    expect(
      renderer.render(
        <Touchable borderlessRipple={true} onPress={VoidAction}>
          <Text>line</Text>
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });
});
