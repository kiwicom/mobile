// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/mobile-relay';
import { MapLocaleToLanguageQuery } from '@kiwicom/mobile-localization';

import HotelDetailScreen from './HotelDetailScreen';
import type { Image } from '../gallery/GalleryGrid';
import type { singleHotelQueryResponse } from './__generated__/singleHotelQuery.graphql';
import type { SearchParams } from '../allHotels/searchForm/SearchParametersType';
import type { AvailableHotelSearchInput } from './AvailableHotelSearchInput';
import { sanitizeDate } from '../GraphQLSanitizers';

type ContainerProps = {|
  currency: string,
  language: string,
  search: AvailableHotelSearchInput,
  onGoToHotelGallery: (hotelName: string, images: Image[]) => void,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
  onGoToMap: () => void,
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
      onGoToMap={this.props.onGoToMap}
      availableHotel={availableHotel}
      roomsConfiguration={this.props.search.roomsConfiguration}
    />
  );

  render() {
    const { search, currency, language } = this.props;
    return (
      <PublicApiRenderer
        query={graphql`
          query singleHotelQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              ...HotelDetailScreen_availableHotel
            }
          }
        `}
        variables={{
          search: {
            ...search,
            checkin: sanitizeDate(search.checkin),
            checkout: sanitizeDate(search.checkout),
            language: MapLocaleToLanguageQuery(language),
          },
          options: { currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
