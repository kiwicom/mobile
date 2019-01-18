// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import Checkbox from '../Checkbox';

const noop = () => {};

it('renders', () => {
  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={false}>
      <Translation passThrough="Unchecked" />
    </Checkbox>,
  );
});

let originalPlatform;

const setUpTest = () => (originalPlatform = Platform.OS);
const cleanUpTest = () => (Platform.OS = originalPlatform);

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
