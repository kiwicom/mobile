// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import TextButton from '../TextButton';

const VoidAction = () => console.warn('It Works!');

it('renders button with custom title', () => {
  PlaygroundRenderer.render(
    <TextButton
      title={<Translation passThrough="My Button!" />}
      onPress={VoidAction}
    />,
  );
});
