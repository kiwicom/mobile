// @flow

import * as React from 'react';
import { FlatList } from 'react-native';
import {
  GeneralError,
  Modal,
  StyleSheet,
  type OnLayout,
  type DimensionType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import GalleryGridTile from './GalleryGridTile';
import PhotosStripe from './PhotosStripe';

const tileGap = 2;
const tilesInRow = 3;

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
});

export type Image = {
  key: string,
  lowRes: string,
  highRes: string,
};

type Props = {|
  hotelName: string,
  dimensions: DimensionType,
  images: Image[],
  onGoToGalleryStripe: (
    hotelName: string,
    highResImages: string[],
    imageIndex: number,
  ) => void,
|};

type State = {|
  tileWidth: number,
  stripeVisible: boolean,
  stripeImageIndex: number,
|};

export default class GalleryGrid extends React.Component<Props, State> {
  state = {
    /**
     * This assumes that the gallery is expanded over the whole screen
     * without additional paddings (this is how it's designed).
     *
     * Event `onLayout` attached to the `FlatList` is called after all
     * images are loaded which is too late (works good on iOS). But it's
     * still needed for portrait <-> layout changes.
     */
    tileWidth: this.getTileWidth(this.props.dimensions.width),
    stripeVisible: false,
    stripeImageIndex: 0,
  };

  calculateTileWidth = (event: OnLayout) => {
    const width = event.nativeEvent.layout.width;
    this.setState({
      tileWidth: this.getTileWidth(width),
    });
  };

  getTileWidth = (width: number) => {
    return width - (tileGap * (tilesInRow - 1)) / tilesInRow;
  };

  openStripe = (imageIndex: number) =>
    this.setState({
      stripeVisible: true,
      stripeImageIndex: imageIndex,
    });

  closeStripe = () =>
    this.setState({
      stripeVisible: false,
    });

  renderItem = ({ item, index }: { item: Image, index: number }) => (
    <GalleryGridTile
      imageUrl={item.lowRes}
      imageIndex={index}
      gap={tileGap}
      width={this.state.tileWidth}
      lastInRow={(index + 1) % tilesInRow === 0}
      onTilePress={this.openStripe}
    />
  );

  render = () => {
    return this.props.images ? (
      [
        <FlatList
          key="grid"
          data={this.props.images}
          extraData={this.state}
          renderItem={this.renderItem}
          numColumns={tilesInRow}
          onLayout={this.calculateTileWidth}
        />,
        <Modal
          key="stripe"
          isVisible={this.state.stripeVisible}
          backdropColor="black"
          backdropOpacity={1}
          style={styles.modal}
          onRequestClose={this.closeStripe}
        >
          <PhotosStripe
            hotelName={this.props.hotelName}
            imageUrls={this.props.images.map(image => image.highRes)}
            index={this.state.stripeImageIndex}
            onClose={this.closeStripe}
          />
        </Modal>,
      ]
    ) : (
      <GeneralError
        errorMessage={<Translation id="hotels.gallery_grid.no_images" />}
      />
    );
  };
}
