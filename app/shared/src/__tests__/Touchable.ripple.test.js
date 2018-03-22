// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

import Touchable from '../Touchable';

jest.mock('TouchableNativeFeedback', () => {
  const mock = jest.genMockFromModule('TouchableNativeFeedback');
  mock.canUseNativeForeground = () => true;
  mock.Ripple = jest.fn();
  return mock;
});

jest.mock('Platform', () => {
  const mock = jest.genMockFromModule('Platform');
  mock.OS = 'android';
  mock.Version = 22;
  return mock;
});

const renderer = new ShallowRenderer();
const VoidAction = () => {};

describe('Touchable with ripple effect', () => {
  it('renders with foreground', () => {
    expect(
      renderer.render(
        <Touchable onPress={VoidAction}>
          <DummyTranslation id="line" />
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with ripple color', () => {
    expect(
      renderer.render(
        <Touchable rippleColor="red" onPress={VoidAction}>
          <DummyTranslation id="line" />
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });

  it('disables foreground in borderless mode', () => {
    expect(
      renderer.render(
        <Touchable borderlessRipple={true} onPress={VoidAction}>
          <DummyTranslation id="line" />
        </Touchable>,
      ),
    ).toMatchSnapshot();
  });
});
