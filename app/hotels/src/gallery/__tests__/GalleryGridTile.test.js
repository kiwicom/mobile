// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Tile from '../GalleryGridTile';

const voidCallback = () => {};

it('renders with marginRight if not last in the row', () => {
  expect(
    renderer
      .create(
        <Tile
          width={10}
          lastInRow={false}
          imageUrl="http://.../"
          gap={5}
          imageIndex={1}
          onTilePress={voidCallback}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});

it('renders without marginRight if last in the row', () => {
  expect(
    renderer
      .create(
        <Tile
          width={10}
          lastInRow={true}
          imageUrl="http://.../"
          gap={5}
          imageIndex={1}
          onTilePress={voidCallback}
        />,
      )
      .toJSON(),
  ).toMatchSnapshot();
});
