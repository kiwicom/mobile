// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import Switch from '../Switch';

it('renders with false', () => {
  PlaygroundRenderer.render(<Switch value={false} onValueChange={jest.fn()} />);
});

it('renders with true', () => {
  PlaygroundRenderer.render(<Switch value={true} onValueChange={jest.fn()} />);
});
