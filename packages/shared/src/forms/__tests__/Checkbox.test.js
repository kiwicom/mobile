// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import Checkbox from '../Checkbox';

const noop = () => {};

it('not checked', () => {
  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={false}>
      <Translation passThrough="Unchecked" />
    </Checkbox>,
  );
});

it('checked', () => {
  PlaygroundRenderer.render(
    <Checkbox onPress={noop} isChecked={true}>
      <Translation passThrough="Checked" />
    </Checkbox>,
  );
});
