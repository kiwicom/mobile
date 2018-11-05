// @flow

import * as React from 'react';
import { ScrollView, View, Platform } from 'react-native';
import {
  GeneralError,
  LayoutSingleColumn,
  Logger,
  StyleSheet,
  CloseButton,
  AdaptableLayout,
  Dimensions,
  Device,
  type BarStyle,
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

type PropsWithContext = {|
  ...Props,
  +width: number,
|};

type State = {|
  selected: {
    [string]: number, // originalId: count
  },
  maxPersons: number,
  barStyle: BarStyle,
|};

type NativeEvent = {|
  +nativeEvent: {|
    +contentOffset: {|
      +y: number,
    |},
  |},
|};

export class HotelDetailScreen extends React.Component<
  PropsWithContext,
  State,
> {
  constructor(props: PropsWithContext) {
    super(props);

    this.state = {
      selected: {},
      maxPersons: 0,
      barStyle: Platform.select({
        android: 'default',
        ios: this.isNarrowLayout() ? 'light-content' : 'dark-content',
      }),
    };
  }

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_DETAILS);
  };

  shouldComponentUpdate = (nextProps: PropsWithContext, nextState: State) => {
    const isPropsEqual = isEqual(nextProps, this.props);
    const isStateEqual = isEqual(nextState, this.state);

    return !isPropsEqual || !isStateEqual;
  };

  isNarrowLayout = () => {
    return this.props.width < Device.DEVICE_THRESHOLD;
  };

  shouldSetStatusBarDark = (yOffset: number) =>
    Platform.OS === 'ios' &&
    this.isNarrowLayout() &&
    yOffset > 180 &&
    this.state.barStyle !== 'dark-content';

  shouldSetStatusBarLight = (yOffset: number) =>
    Platform.OS === 'ios' &&
    this.isNarrowLayout() &&
    yOffset <= 180 &&
    this.state.barStyle !== 'light-content';

  onScroll = (e: NativeEvent) => {
    const yOffset = e.nativeEvent.contentOffset.y;

    if (this.shouldSetStatusBarDark(yOffset)) {
      this.setState({ barStyle: 'dark-content' });
    } else if (this.shouldSetStatusBarLight(yOffset)) {
      this.setState({ barStyle: 'light-content' });
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

  getNumberOfGuests = () => {
    const roomsConfiguration = idx(
      this.props,
      _ => _.roomsConfiguration[0],
    ) || { adultsCount: 0, children: [] };
    return roomsConfiguration.adultsCount + roomsConfiguration.children.length;
  };

  getPersonCount = () => {
    const guestTotal = this.getNumberOfGuests();

    return this.state.maxPersons > guestTotal
      ? guestTotal
      : this.state.maxPersons;
  };

  render() {
    const { availableHotel } = this.props;
    const { selected } = this.state;

    const disabled = this.getNumberOfGuests() <= this.getNumberOfRooms();
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
            testID="hotelDetailScrollView"
          >
            <LayoutSingleColumn barStyle={this.state.barStyle}>
              <Header hotel={availableHotel.hotel} />
              <HotelInformation hotel={availableHotel.hotel} />
              <RoomList
                data={availableHotel.availableRooms}
                select={this.selectRoom}
                deselect={this.deselectRoom}
                selected={selected}
                disabled={disabled}
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
              <AdaptableLayout
                renderOnNarrow={
                  <View style={styles.closeWrapper}>
                    <CloseButton onPress={this.props.goBack} />
                  </View>
                }
              />
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

type Props = {|
  +availableHotel: HotelDetailScreen_availableHotel,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
|};

class HotelDetailScreenWithContext extends React.Component<Props> {
  renderInner = ({ width }) => (
    <HotelDetailScreen {...this.props} width={width} />
  );

  render() {
    return <Dimensions.Consumer>{this.renderInner}</Dimensions.Consumer>;
  }
}

export default createFragmentContainer(
  HotelDetailScreenWithContext,
  graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {
      hotel {
        ...Header_hotel
        ...BookNow_hotel
        ...HotelInformation_hotel
      }
      availableRooms {
        ...RoomList
        id
        incrementalPrice {
          amount
          currency
        }
      }
    }
  `,
);

const styles = StyleSheet.create({
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
