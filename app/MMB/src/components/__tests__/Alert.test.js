// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';
import { Translation } from '@kiwicom/mobile-localization';

import Alert from '../Alert';

describe('Alert', () => {
  it('renders danger type', () => {
    PlaygroundRenderer.render(
      <Alert type="danger" title={<Translation passThrough="Alert danger" />}>
        <Translation passThrough="Alert body" />
      </Alert>,
    );
  });

  it('renders success type', () => {
    PlaygroundRenderer.render(
      <Alert type="success" title={<Translation passThrough="Alert success" />}>
        <Translation passThrough="Alert body" />
      </Alert>,
    );
  });

  it('renders warning type', () => {
    PlaygroundRenderer.render(
      <Alert type="warning" title={<Translation passThrough="Alert warning" />}>
        <Translation passThrough="Alert body" />
      </Alert>,
    );
  });
});
