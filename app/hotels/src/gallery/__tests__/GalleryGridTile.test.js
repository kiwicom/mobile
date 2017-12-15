// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Tile from '../GalleryGridTile';

const renderer = new ShallowRenderer();
const voidCallback = () => {};

it('renders with marginRight if not last in the row', () => {
  renderer.render(
    <Tile
      width={10}
      lastInRow={false}
      imageUrl="http://.../"
      gap={5}
      imageIndex={1}
      onTilePress={voidCallback}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

it('renders without marginRight if last in the row', () => {
  renderer.render(
    <Tile
      width={10}
      lastInRow={true}
      imageUrl="http://.../"
      gap={5}
      imageIndex={1}
      onTilePress={voidCallback}
    />,
  );
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
