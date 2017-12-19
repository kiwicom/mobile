// @flow
import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import HotelDetailScreen from './HotelDetailScreen';

import type { Image } from '../gallery/GalleryGrid';
import type { SingleHotelQueryResponse } from './__generated__/SingleHotelQuery.graphql';

type ContainerProps = {
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
};

export default class SingleHotelContainer extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({ hotel }: { hotel: SingleHotelQueryResponse }) => (
    <HotelDetailScreen
      openGallery={this.props.onGoToHotelGallery}
      hotel={hotel}
    />
  );

  render() {
    return (
      <PublicApiRenderer
        query={graphql`
          query SingleHotelQuery($hotelId: ID!) {
            hotel(id: $hotelId) {
              ...HeaderContainer_hotel
              ...LocationContainer_hotel
              ...DescriptionContainer_hotel
            }
          }
        `}
        variables={{
          hotelId: 'aG90ZWw6NjUwODk5',
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
