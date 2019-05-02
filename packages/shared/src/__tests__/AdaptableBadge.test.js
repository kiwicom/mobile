// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import AdaptableBadge from '../AdaptableBadge';
import Translation from '../Translation';

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

it('renders correctly with type info', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      translation={<Translation passThrough="type info" />}
      type="info"
    />,
  );
});

it('renders correctly with circled true', () => {
  PlaygroundRenderer.render(
    <AdaptableBadge
      translation={<Translation passThrough="circled" />}
      circled={true}
    />,
  );
});
