// @flow

import * as React from 'react';
import { View, Platform, TouchableNativeFeedback } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import testRenderer from 'react-test-renderer';

import Text from '../Text';
import TouchableItem from '../TouchableItem';

jest.mock('TouchableNativeFeedback');
jest.mock('Platform');

const renderer = new ShallowRenderer();
let originalPlatform;
let originalVersion;

beforeEach(() => {
  originalPlatform = Platform.OS;
  originalVersion = Platform.Version;
});
afterEach(() => {
  Platform.OS = originalPlatform;
  Platform.Version = originalVersion;
});

describe('TouchableItem', () => {
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

  it('calls TouchableNativeFeedback.canUseNativeForeground if useForground prop is not passed', () => {
    TouchableNativeFeedback.canUseNativeForeground = jest.fn();
    TouchableNativeFeedback.Ripple = jest.fn();
    Platform.OS = 'android';
    Platform.Version = 22;
    testRenderer.create(
      <TouchableItem>
        <Text>line 1</Text>
      </TouchableItem>,
    );
    expect(TouchableNativeFeedback.canUseNativeForeground).toHaveBeenCalled();
  });

  it('calls TouchableNativeFeedback.canUseNativeForeground if useForground prop is null', () => {
    TouchableNativeFeedback.canUseNativeForeground = jest.fn();
    TouchableNativeFeedback.Ripple = jest.fn();
    Platform.OS = 'android';
    Platform.Version = 22;
    testRenderer.create(
      // $FlowExpectedError: Intentionally testing what will happen if null value is passed
      <TouchableItem useForeground={null}>
        <Text>line 1</Text>
      </TouchableItem>,
    );
    expect(TouchableNativeFeedback.canUseNativeForeground).toHaveBeenCalled();
  });

  it('calls TouchableNativeFeedback.canUseNativeForeground if useForground prop is undefined', () => {
    TouchableNativeFeedback.canUseNativeForeground = jest.fn();
    TouchableNativeFeedback.Ripple = jest.fn();
    Platform.OS = 'android';
    Platform.Version = 22;
    testRenderer.create(
      <TouchableItem useForeground={undefined}>
        <Text>line 1</Text>
      </TouchableItem>,
    );
    expect(TouchableNativeFeedback.canUseNativeForeground).toHaveBeenCalled();
  });

  it('does not call TouchableNativeFeedback.canUseNativeForeground if useForground prop is passed', () => {
    TouchableNativeFeedback.canUseNativeForeground = jest.fn();
    TouchableNativeFeedback.Ripple = jest.fn();
    Platform.OS = 'android';
    Platform.Version = 22;
    testRenderer.create(
      <TouchableItem useForeground={false}>
        <Text>line 1</Text>
      </TouchableItem>,
    );
    expect(
      TouchableNativeFeedback.canUseNativeForeground,
    ).not.toHaveBeenCalled();
  });
});
