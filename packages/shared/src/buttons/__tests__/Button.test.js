// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import Translation from '../../Translation';
import Button from '../Button';

const noop = () => {};

describe('Button', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <Button onPress={noop}>
        <Translation passThrough="Button" />
      </Button>,
    );
  });
});
