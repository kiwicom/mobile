// @flow

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import LoadMoreButton from '../LoadMoreButton';

const VoidAction = () => {};

it('renders the buttons in the playground', () => {
  PlaygroundRenderer.render(
    <LoadMoreButton isLoading={true} onPress={VoidAction} />,
  );
  PlaygroundRenderer.render(
    <LoadMoreButton isLoading={false} onPress={VoidAction} />,
  );
});
