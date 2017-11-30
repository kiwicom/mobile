// @flow

import * as React from 'react';
import { FlatList } from 'react-native';

import type { OnLayout } from '@kiwicom/native-common';

import GalleryGridTile from './GalleryGridTile';

const tileGap = 2;
const tilesInRow = 3;

export type Image = {|
  key: string,
  lowRes: string,
  highRes: string,
|};

type Props = {|
  hotelName: string,
  images: Image[],
  onGoToGalleryStripe: (
    hotelName: string,
    highResImages: string[],
    imageIndex: number,
  ) => void,
|};

type State = {|
  tileWidth: number,
|};

export default class GalleryGrid extends React.Component<Props, State> {
  state = {
    tileWidth: 0,
  };

  calculateTileWidth = (event: OnLayout) => {
    const width = event.nativeEvent.layout.width;
    this.setState({
      tileWidth: (width - tileGap * (tilesInRow - 1)) / tilesInRow,
    });
  };

  handleTilePress = (imageIndex: number) =>
    this.props.onGoToGalleryStripe(
      this.props.hotelName,
      this.props.images.map(image => image.highRes),
      imageIndex,
    );

  renderItem = ({ item, index }: { item: Image, index: number }) => (
    <GalleryGridTile
      imageUrl={item.lowRes}
      imageIndex={index}
      gap={tileGap}
      width={this.state.tileWidth}
      lastInRow={(index + 1) % tilesInRow === 0}
      onTilePress={this.handleTilePress}
    />
  );

  render = () => (
    <FlatList
      data={this.props.images}
      extraData={this.state}
      renderItem={this.renderItem}
      numColumns={tilesInRow}
      onLayout={this.calculateTileWidth}
    />
  );
}
