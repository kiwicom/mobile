// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Translation } from '@kiwicom/mobile-localization';

import ButtonText from '../ButtonText';

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
      <ButtonText text={<Translation passThrough="Button text" />} />,
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
  it('should not be uppercased on ios', () => {
    Platform.OS = 'ios';
    renderer.render(
      <ButtonText text={<Translation passThrough="Button text" />} />,
    );
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});
