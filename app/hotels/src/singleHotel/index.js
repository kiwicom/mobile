// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';

import HotelDetailScreen from './HotelDetailScreen';

import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';

type ContainerProps = {|
  hotelId: string,
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
|};

export default class SingleHotelContainer extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({ hotel }: { hotel: singleHotelQueryResponse }) => (
    <HotelDetailScreen
      openGallery={this.props.onGoToHotelGallery}
      hotel={hotel}
    />
  );

  render() {
    return (
      <PublicApiRenderer
        query={graphql`
          query singleHotelQuery($hotelId: ID!) {
            hotel(id: $hotelId) {
              ...HeaderContainer_hotel
              ...LocationContainer_hotel
              ...DescriptionContainer_hotel
            }
          }
        `}
        variables={{
          hotelId: this.props.hotelId,
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
