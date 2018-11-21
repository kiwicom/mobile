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
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from './HotelDetailScreenContext';
import {
  withHotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../HotelsContext';

type PropsWithContext = {|
  ...Props,
  +width: number,
|};

type State = {|
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
      barStyle: Platform.select({
        android: 'default',
        ios: this.isNarrowLayout() ? 'light-content' : 'dark-content',
      }),
    };
  }

  componentDidMount() {
    const {
      ANCILLARY_PROVIDER_BOOKINGCOM,
      ANCILLARY_PROVIDER_STAY22,
    } = Logger.Provider;

    const provider =
      this.props.apiProvider === 'booking'
        ? ANCILLARY_PROVIDER_BOOKINGCOM
        : ANCILLARY_PROVIDER_STAY22;

    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_DETAILS, provider);

    this.props.setPaymentLink(this.props.paymentLink);
  }

  componentWillUnmount() {
    this.props.reset();
  }

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

  render() {
    const { availableHotel } = this.props;

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
              <RoomList data={availableHotel.availableRooms} />
              <BrandLabel />
            </LayoutSingleColumn>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <RoomSummary availableRooms={availableHotel.availableRooms} />
            <View style={styles.row}>
              <AdaptableLayout
                renderOnNarrow={
                  <View style={styles.closeWrapper}>
                    <CloseButton onPress={this.props.goBack} />
                  </View>
                }
              />
              {this.props.maxPersons > 0 && (
                <View style={styles.bookNowWrapper}>
                  <BookNow hotel={availableHotel.hotel} />
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
  +availableHotel: ?HotelDetailScreen_availableHotel,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
  +getGuestCount: () => number,
  +paymentLink?: ?string,
  +setPaymentLink: (?string) => void,
  +apiProvider: ApiProvider,
  +maxPersons: number,
  +reset: () => void,
|};

class HotelDetailScreenWithContext extends React.Component<Props> {
  renderInner = ({ width }) => (
    <HotelDetailScreen {...this.props} width={width} />
  );

  render() {
    return <Dimensions.Consumer>{this.renderInner}</Dimensions.Consumer>;
  }
}

const select = ({
  getGuestCount,
  setPaymentLink,
  apiProvider,
}: HotelsContextState) => ({
  getGuestCount,
  setPaymentLink,
  apiProvider,
});

const selectHotelDetailScreen = ({
  maxPersons,
  actions: { reset },
}: HotelDetailScreenState) => ({
  maxPersons,
  reset,
});

export default createFragmentContainer(
  withHotelsContext(select)(
    withHotelDetailScreenContext(selectHotelDetailScreen)(
      HotelDetailScreenWithContext,
    ),
  ),
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
