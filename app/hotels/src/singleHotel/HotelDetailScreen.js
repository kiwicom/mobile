// @flow

import * as React from 'react';
import { ScrollView, View, Platform } from 'react-native';
import {
  GeneralError,
  LayoutSingleColumn,
  Logger,
  StyleSheet,
  withDimensions,
  Device,
  type BarStyle,
  Color,
  StatusbarBackground,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Header from './header/Header';
import HotelInformation from './hotelInformation/HotelInformation';
import RoomList from './roomList/RoomList';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from './AvailableHotelSearchInput';
import type { HotelDetailScreen_availableHotel as HotelType } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import {
  withHotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../HotelsContext';
import BookingSummary from './summary/BookingSummary';

type Props = {|
  +availableHotel: ?HotelType,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
  +getGuestCount: () => number,
  +paymentLink?: ?string,
  +setPaymentLink: (?string) => void,
  +apiProvider: ApiProvider,
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

export class HotelDetailScreen extends React.Component<Props, State> {
  constructor(props: Props) {
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
    const statusBarBackground =
      this.state.barStyle === 'light-content'
        ? styles.lightContent
        : styles.darkContent;
    return (
      <View style={styles.safeArea}>
        <StatusbarBackground style={statusBarBackground} />

        <ScrollView
          contentContainerStyle={styles.container}
          onScroll={this.onScroll}
          scrollEventThrottle={100}
          testID="hotelDetailScrollView"
        >
          <LayoutSingleColumn>
            <Header hotel={availableHotel.hotel} />
            <HotelInformation hotel={availableHotel.hotel} />
            {/* $FlowExpectedError: I don't understand this error TODO: Fix */}
            <RoomList data={availableHotel.availableRooms} />
            <BrandLabel />
          </LayoutSingleColumn>
        </ScrollView>
        <BookingSummary room={availableHotel} goBack={this.props.goBack} />
      </View>
    );
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

export default createFragmentContainer(
  withHotelsContext(select)(withDimensions(HotelDetailScreen)),
  {
    availableHotel: graphql`
      fragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {
        ...BookingSummary_room
        hotel {
          ...Header_hotel
          ...HotelInformation_hotel
        }
        availableRooms {
          ...RoomList_data
        }
      }
    `,
  },
);

const paddingBottom = 64;
const iphoneXPadding = paddingBottom + 28;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Device.isIPhoneX ? iphoneXPadding : paddingBottom,
  },
  safeArea: {
    flex: 1,
  },
  darkContent: {
    ios: {
      backgroundColor: defaultTokens.paletteWhite,
    },
  },
  lightContent: {
    ios: {
      backgroundColor: Color.transparent.black.$30,
    },
  },
});
