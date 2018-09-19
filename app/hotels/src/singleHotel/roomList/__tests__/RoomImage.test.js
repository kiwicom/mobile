// @flow strict

import * as React from 'react';
import { PlaygroundRenderer } from '@kiwicom/mobile-playground';

import RoomImage from '../RoomImage';

describe('RoomImage', () => {
  it('renders', () => {
    PlaygroundRenderer.render(
      <RoomImage
        openGallery={jest.fn()}
        thumbnailUrl="https://e3.365dm.com/18/05/1600x1200/lionel-messi-barcelona_4322799.jpg?bypass-service-worker&20180528123616"
      />,
    );
  });
});
