// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import Translation from '../../Translation';
import TextInput from '../TextInput';

it('renders', () => {
  PlaygroundRenderer.render(<TextInput />);
});

it('renders with default value', () => {
  PlaygroundRenderer.render(<TextInput defaultValue="Default value" />);
});

it('renders with placeholder', () => {
  PlaygroundRenderer.render(
    <TextInput placeholder={<Translation passThrough="Placeholder" />} />,
  );
});

it('renders with label', () => {
  PlaygroundRenderer.render(
    <TextInput
      label={<Translation passThrough="label" />}
      defaultValue="Test"
    />,
  );
});
