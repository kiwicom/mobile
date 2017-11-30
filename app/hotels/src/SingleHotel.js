// @flow

import * as React from 'react';
import idx from 'idx';
import { graphql } from 'react-relay';
import { Text } from 'react-native';
import { Button, CenteredView } from '@kiwicom/react-native-app-common';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';

import type { Image } from './gallery/GalleryGrid';
import type { SingleHotelScreenQueryResponse } from './__generated__/SingleHotelScreenQuery.graphql';

class SingleHotel extends React.Component<{
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
  data: SingleHotelScreenQueryResponse,
}> {
  handleGoToHotelGallery = images =>
    this.props.onGoToHotelGallery('Hotel Hilton', images);

  handleButtonPress = () => {
    const edges = idx(this.props, _ => _.data.hotel.photos.edges) || [];
    return this.handleGoToHotelGallery(
      edges.map((edge, index) => {
        let missingImage = {
          key: 'missing' + index,
          lowRes: '', // FIXME: 404 image
          highRes: '', // FIXME: 404 image
        };
        if (edge) {
          const { node: photo } = edge;
          if (photo) {
            missingImage = {
              ...missingImage,
              key: photo.id,
              lowRes: photo.lowResUrl || '', // FIXME: 404 image
              highRes: photo.highResUrl || '', // FIXME: 404 image
            };
          }
        }
        return missingImage;
      }),
    );
  };

  render = () => (
    <CenteredView>
      <Text>This is SingleHotel component</Text>
      <Button title="Single hotel gallery" onPress={this.handleButtonPress} />
    </CenteredView>
  );
}

type Props = {
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
};

export default class SingleHotelScreen extends React.Component<Props> {
  renderInnerComponent = (
    propsFromRenderer: SingleHotelScreenQueryResponse,
  ) => (
    <SingleHotel
      data={propsFromRenderer}
      onGoToHotelGallery={this.props.onGoToHotelGallery}
    />
  );

  render = () => (
    // TODO: replace with real ID of the hotel
    <PublicApiRenderer
      query={graphql`
        query SingleHotelScreenQuery {
          hotel(id: "aG90ZWw6MjQ4NTM5") {
            photos {
              edges {
                node {
                  id
                  lowResUrl
                  highResUrl
                }
              }
            }
          }
        }
      `}
      render={this.renderInnerComponent}
      cacheConfig={{
        force: true,
      }}
    />
  );
}
