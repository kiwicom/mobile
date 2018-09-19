// @flow

import * as React from 'react';
import { ScrollView, View, StatusBar, Platform } from 'react-native';
import {
  GeneralError,
  LayoutSingleColumn,
  Logger,
  AdaptableLayout,
  StyleSheet,
  CloseButton,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';
import isEqual from 'react-fast-compare';
import { SafeAreaView } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import RoomSummary from './RoomSummary';
import Header from './header/Header';
import HotelInformation from './hotelInformation/HotelInformation';
import RoomList from './roomList/RoomList';
import BookNow from './bookNow/BookNow';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from '../singleHotel/AvailableHotelSearchInput';
import type { HotelDetailScreen_availableHotel } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import countBookingPrice from './bookNow/countBookingPrice';

type Props = {|
  +availableHotel: HotelDetailScreen_availableHotel,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
|};

type State = {|
  selected: {
    [string]: number, // originalId: count
  },
  maxPersons: number,
|};

type NativeEvent = {|
  +nativeEvent: {|
    +contentOffset: {|
      +y: number,
    |},
  |},
|};

export class HotelDetailScreen extends React.Component<Props, State> {
  state = {
    selected: {},
    maxPersons: 0,
  };

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_DETAILS);
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    }
  };

  shouldComponentUpdate = (nextProps: Props, nextState: State) => {
    const isPropsEqual = isEqual(nextProps, this.props);
    const isStateEqual = isEqual(nextState, this.state);

    return !isPropsEqual || !isStateEqual;
  };

  componentWillUnmount = () => {
    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('dark-content');
    }
  };

  onScroll = (e: NativeEvent) => {
    if (Platform.OS === 'ios' && e.nativeEvent.contentOffset.y > 180) {
      StatusBar.setBarStyle('dark-content');
    } else {
      StatusBar.setBarStyle('light-content');
    }
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
    const { availableHotel } = this.props;
    const { selected } = this.state;
    const price = countBookingPrice(
      idx(this.props, _ => _.availableHotel.availableRooms),
      selected,
    );
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
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'never' }}>
        <View style={styles.safeArea}>
          <ScrollView
            contentContainerStyle={styles.container}
            onScroll={this.onScroll}
            scrollEventThrottle={500}
          >
            <LayoutSingleColumn>
              <AdaptableLayout
                renderOnWide={<View style={styles.marginView} />}
              />
              <Header hotel={availableHotel.hotel} />
              <HotelInformation hotel={availableHotel.hotel} />
              <RoomList
                data={availableHotel.availableRooms}
                select={this.selectRoom}
                deselect={this.deselectRoom}
                selected={selected}
              />
              <BrandLabel />
            </LayoutSingleColumn>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <RoomSummary
              guestCount={this.getPersonCount()}
              roomCount={this.getNumberOfRooms()}
              price={price}
            />
            <View style={styles.row}>
              <View style={styles.closeWrapper}>
                <CloseButton onPress={this.props.goBack} />
              </View>
              {this.state.maxPersons > 0 && (
                <View style={styles.bookNowWrapper}>
                  <BookNow selected={selected} hotel={availableHotel.hotel} />
                </View>
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
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
        originalId
        incrementalPrice {
          amount
          currency
        }
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
  buttonContainer: {
    position: 'absolute',
    end: 0,
    start: 0,
    bottom: 0,
    backgroundColor: defaultTokens.paletteWhite,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  safeArea: {
    flex: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
  closeWrapper: {
    flex: 1,
    marginEnd: 8,
  },
  bookNowWrapper: {
    flex: 1,
  },
});
