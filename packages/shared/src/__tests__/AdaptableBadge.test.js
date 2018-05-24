// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import AdaptableBadge from '../AdaptableBadge';

it('renders text', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      translation={<Translation passThrough="default badge" />}
    />,
  );
});

it('renders text with color', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      translation={<Translation passThrough="badge with color" />}
      style={{
        backgroundColor: 'red',
      }}
    />,
  );
});

it('renders very long texts', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      translation={
        <Translation passThrough="very very very very very long badge (adaptable width)" />
      }
    />,
  );
});
