// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment';

import HotelDetailScreen from './HotelDetailScreen';
import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';

export type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: Date,
  checkout: Date,
  roomsConfiguration: Array<{|
    adultsCount: number,
    children: Array<{|
      age: number,
    |}>,
  |}>,
|};

type ContainerProps = {|
  search: AvailableHotelSearchInput,
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
|};

export const handleOpenSingleHotel = (
  hotelId: string,
  searchParams: SearchParams,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
) => {
  if (searchParams.checkin && searchParams.checkout) {
    openSingleHotel({
      hotelId,
      checkin: searchParams.checkin,
      checkout: searchParams.checkout,
      roomsConfiguration: [
        {
          adultsCount: searchParams.roomsConfiguration.adultsCount,
          children: searchParams.roomsConfiguration.children.map(childAge => ({
            age: childAge.age,
          })),
        },
      ],
    });
  }
};

export default class SingleHotelContainer extends React.Component<
  ContainerProps,
> {
  renderInnerComponent = ({ availableHotel }: singleHotelQueryResponse) => (
    <HotelDetailScreen
      openGallery={this.props.onGoToHotelGallery}
      onGoToPayment={this.props.onGoToPayment}
      availableHotel={availableHotel}
    />
  );

  render() {
    const { search } = this.props;
    return (
      <PublicApiRenderer
        query={graphql`
          query singleHotelQuery($search: AvailableHotelSearchInput!) {
            availableHotel(search: $search) {
              ...HotelDetailScreen_availableHotel
            }
          }
        `}
        variables={{
          search: {
            ...search,
            checkin: moment(search.checkin).format('YYYY-MM-DD'),
            checkout: moment(search.checkout).format('YYYY-MM-DD'),
          },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
