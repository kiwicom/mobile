// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import {
  GeneralError,
  LayoutSingleColumn,
  Logger,
  AdaptableLayout,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import Header from './header/Header';
import HotelInformation from './hotelInformation/HotelInformation';
import RoomList from './roomList/RoomList';
import BookNow from './bookNow/BookNow';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';

type Props = {|
  +availableHotel: HotelDetailScreen_availableHotel,
  +onGoToPayment: ({|
    +hotelId: number,
    +rooms: $ReadOnlyArray<{| +id: string, +count: number |}>,
  |}) => void,
  +onGoToMap: () => void,
  +roomsConfiguration: RoomsConfiguration,
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
    const { availableHotel, onGoToPayment, onGoToMap } = this.props;
    const { selected } = this.state;
    if (!availableHotel) {
      return (
        <GeneralError
          errorMessage={
            <Translation id="single_hotel.hotel_detail_screen.hotel_not_found" />
          }
        />
      );
    }

    return (
      <React.Fragment>
        <ScrollView contentContainerStyle={styles.container}>
          <LayoutSingleColumn>
            <AdaptableLayout
              renderOnWide={<View style={styles.marginView} />}
            />
            <Header hotel={availableHotel.hotel} />
            <HotelInformation
              hotel={availableHotel.hotel}
              onGoToMap={onGoToMap}
            />
            <RoomList
              data={availableHotel.availableRooms}
              select={this.selectRoom}
              deselect={this.deselectRoom}
              selected={selected}
            />
            <BrandLabel />
          </LayoutSingleColumn>
        </ScrollView>
        <BookNow
          onGoToPayment={onGoToPayment}
          selected={selected}
          availableRooms={availableHotel.availableRooms}
          hotel={availableHotel.hotel}
          personCount={this.getPersonCount()}
          numberOfRooms={this.getNumberOfRooms()}
        />
      </React.Fragment>
    );
  }
}

export default createFragmentContainer(
  HotelDetailScreen,
  graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailability {
      hotel {
        ...Header_hotel
        ...BookNow_hotel
        ...HotelInformation_hotel
      }
      availableRooms {
        ...RoomList
        ...BookNow_availableRooms
      }
    }
  `,
);

const styles = StyleSheet.create({
  marginView: {
    marginBottom: 15,
  },
  container: {
    paddingBottom: 64,
  },
});
