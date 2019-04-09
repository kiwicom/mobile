// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import Translation from '../../Translation';
import LinkButton from '../LinkButton';

const noop = () => {};

describe('Button', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <LinkButton
        onPress={noop}
        title={<Translation passThrough="Link button" />}
      />,
    );
  });
});
