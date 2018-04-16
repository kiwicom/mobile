// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import AdaptableBadge from '../AdaptableBadge';

it('renders text', () => {
  PlaygroundRenderer.render(<AdaptableBadge text="default badge" />);
});

it('renders text with color', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      text="badge with color"
      style={{
        backgroundColor: 'red',
      }}
    />,
  );
});

it('renders very long texts', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge text="very very very very very long badge (adaptable width)" />,
  );
});
