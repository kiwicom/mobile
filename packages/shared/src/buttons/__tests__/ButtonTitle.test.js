// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

import Translation from '../../Translation';
import ButtonTitle from '../ButtonTitle';

let originalPlatform;
let renderer;

beforeEach(() => {
  originalPlatform = Platform.OS;
  renderer = new ShallowRenderer();
});

afterEach(() => (Platform.OS = originalPlatform));

describe('ButtonText', () => {
  it('should uppercase text on android', () => {
    Platform.OS = 'android';
    renderer.render(
      <ButtonTitle text={<Translation passThrough="Button text" />} />,
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it('should not be uppercased on ios', () => {
    Platform.OS = 'ios';
    renderer.render(
      <ButtonTitle text={<Translation passThrough="Button text" />} />,
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
