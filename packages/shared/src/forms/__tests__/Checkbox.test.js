// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import StyleSheet from '@kiwicom/mobile-shared/src/PlatformStyleSheet';

import Checkbox from '../Checkbox';

const noop = () => {};

it('not checked', () => {
  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={false}>
      <Translation passThrough="Unchecked" />
    </Checkbox>,
  );
});

let originalPlatform;
const setUpTest = () => (originalPlatform = Platform.OS);
const cleanUpTest = () => (Platform.OS = originalPlatform);

const createStyle = () =>
  StyleSheet.create({
    iconStyle: {
      color: defaultTokens.paletteProductNormal,
      ios: {
        width: 26,
        height: 26,
        fontSize: 28,
      },
      android: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: defaultTokens.paletteProductNormal,
        borderRadius: 100,
        fontSize: 24,
      },
    },
  });

it('works with iOS', () => {
  setUpTest();
  Platform.OS = 'ios';
  expect(createStyle()).toEqual({
    iconStyle: {
      color: defaultTokens.paletteProductNormal,
      width: 26,
      height: 26,
      fontSize: 28,
    },
  });
  cleanUpTest();
});

it('works with Android', () => {
  setUpTest();
  Platform.OS = 'android';
  expect(createStyle()).toEqual({
    iconStyle: {
      color: defaultTokens.paletteProductNormal,
      width: 24,
      height: 24,
      borderWidth: 1,
      borderColor: defaultTokens.paletteProductNormal,
      borderRadius: 100,
      fontSize: 24,
    },
  });
  cleanUpTest();
});

it('checked on ios', () => {
  setUpTest();
  Platform.OS = 'ios';

  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={true}>
      <Translation passThrough="Checked" />
    </Checkbox>,
  );
  cleanUpTest();
});

it('checked on android', () => {
  setUpTest();
  Platform.OS = 'android';

  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={true}>
      <Translation passThrough="Checked" />
    </Checkbox>,
  );
  cleanUpTest();
});
