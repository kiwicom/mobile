// @flow

import * as React from 'react';
import { FlatList, Dimensions } from 'react-native';
import { GeneralError, Modal } from '@kiwicom/react-native-app-shared';

import GalleryGridTile from './GalleryGridTile';
import PhotosStripe from './PhotosStripe';

const tileGap = 2;
const tilesInRow = 3;

export type Image = {
  key: string,
  lowRes: string,
  highRes: string,
};

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
  stripeVisible: boolean,
  stripeImageIndex: number,
|};

export default class GalleryGrid extends React.Component<Props, State> {
  state = {
    tileWidth: 0,
    stripeVisible: false,
    stripeImageIndex: 0,
  };

  /**
   * This assumes that the gallery is expanded over the whole screen
   * without additional paddings (this is how it's designed).
   *
   * Event `onLayout` attached to the `FlatList` is called after all
   * images are loaded which is too late (works good on iOS).
   */
  componentDidMount = () => {
    const { width } = Dimensions.get('window');
    this.setState({
      tileWidth: (width - tileGap * (tilesInRow - 1)) / tilesInRow,
    });
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
        />,
        <Modal
          key="stripe"
          isVisible={this.state.stripeVisible}
          backdropColor="black"
          backdropOpacity={1}
          style={{ margin: 0 }}
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
      <GeneralError errorMessage="No images available." />
    );
  };
}
