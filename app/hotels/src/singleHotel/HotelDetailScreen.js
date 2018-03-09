// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralError, Layout, Logger } from '@kiwicom/react-native-app-shared';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import Header from './header/Header';
import Location from './location/Location';
import Description from './description/Description';
import RoomList from './roomList/RoomList';
import type { Image } from '../gallery/GalleryGrid';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import BookNow from './bookNow/BookNow';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';

type Props = {|
  openGallery: (hotelName: string, images: Image[]) => void,
  availableHotel: HotelDetailScreen_availableHotel,
  onGoToPayment: ({
    hotelId: number,
    rooms: Array<{| id: string, count: number |}>,
  }) => void,
  onGoToMap: () => void,
  roomsConfiguration: RoomsConfiguration,
|};

type State = {|
  selected: {
    [string]: number, // originalId: count
  },
  maxPersons: number,
|};

export class HotelDetailScreen extends React.Component<Props, State> {
  state = {
    selected: {},
    maxPersons: 0,
  };

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_DETAILS);
  };

  updateSelectedCount = (
    availabilityOriginalId: string,
    amount: number,
    maxPersons: number,
  ) => {
    this.setState(state => {
      const previousCount =
        idx(state, _ => _.selected[availabilityOriginalId]) || 0;

      return {
        ...state,
        selected: {
          ...state.selected,
          [availabilityOriginalId]: previousCount + amount,
        },
        maxPersons: state.maxPersons + maxPersons,
      };
    });
  };

  selectRoom = (availabilityOriginalId: string, maxPersons: number) => {
    this.updateSelectedCount(availabilityOriginalId, 1, maxPersons);
  };

  deselectRoom = (availabilityOriginalId: string, maxPersons: number) => {
    this.updateSelectedCount(availabilityOriginalId, -1, -maxPersons);
  };

  getNumberOfRooms = () =>
    Object.keys(this.state.selected).reduce((sum, currentItem) => {
      return this.state.selected[currentItem] + sum;
    }, 0);

  getPersonCount = () => {
    const roomsConfiguration = idx(
      this.props,
      _ => _.roomsConfiguration[0],
    ) || { adultsCount: 0, children: [] };
    const guestTotal =
      roomsConfiguration.adultsCount + roomsConfiguration.children.length;

    return this.state.maxPersons > guestTotal
      ? guestTotal
      : this.state.maxPersons;
  };

  render() {
    const {
      openGallery,
      availableHotel,
      onGoToPayment,
      onGoToMap,
    } = this.props;
    const { selected } = this.state;
    if (!availableHotel) {
      return <GeneralError errorMessage="Hotel not found" />;
    }

    return [
      <Layout key="detailLayout">
        <ScrollView>
          <Header openGallery={openGallery} hotel={availableHotel.hotel} />
          <Location hotel={availableHotel.hotel} onGoToMap={onGoToMap} />
          <Description hotel={availableHotel.hotel} />
          <RoomList
            data={availableHotel.availableRooms}
            select={this.selectRoom}
            deselect={this.deselectRoom}
            selected={selected}
          />
          <BrandLabel />
        </ScrollView>
      </Layout>,
      <BookNow
        key="floatingBookNow"
        onGoToPayment={onGoToPayment}
        selected={selected}
        availableRooms={availableHotel.availableRooms}
        hotel={availableHotel.hotel}
        personCount={this.getPersonCount()}
        numberOfRooms={this.getNumberOfRooms()}
      />,
    ];
  }
}

export default createFragmentContainer(
  HotelDetailScreen,
  graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailability {
      hotel {
        ...Header_hotel
        ...Location_hotel
        ...Description_hotel
        ...BookNow_hotel
      }
      availableRooms {
        ...RoomList
        ...BookNow_availableRooms
      }
    }
  `,
);
