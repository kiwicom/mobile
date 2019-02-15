// @flow

import * as React from 'react';
import { ScrollView, View, Platform } from 'react-native';
import {
  GeneralError,
  LayoutSingleColumn,
  Logger,
  StyleSheet,
  Dimensions,
  Device,
  type BarStyle,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import isEqual from 'react-fast-compare';

import Header from './header/Header';
import HotelInformation from './hotelInformation/HotelInformation';
import RoomList from './roomList/RoomList';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from './AvailableHotelSearchInput';
import type { HotelDetailScreen_availableHotel as HotelType } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import {
  withHotelDetailScreenContext,
  type HotelDetailScreenState,
} from './HotelDetailScreenContext';
import {
  withHotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../HotelsContext';

type Price = {|
  +amount: number,
  +currency: string,
|};

type PropsWithContext = {|
  ...Props,
  +width: number,
  +availableHotel: ?HotelType,
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

  componentDidUpdate(prevProps: PropsWithContext) {
    if (!isEqual(prevProps.selected, this.props.selected)) {
      const price = this.countBookingPrice();
      if (price != null) {
        this.props.setPrice(price);
      }
    }
  }

  componentWillUnmount() {
    this.props.reset();
  }

  countBookingPrice = (): ?Price => {
    const availableRooms = this.props.availableHotel?.availableRooms;
    const selected = this.props.selected;

    if (!availableRooms) {
      return null;
    }
    const positiveSelections = Object.entries(selected).filter(
      (selection: any) => selection[1] > 0,
    );

    if (positiveSelections.length === 0) {
      return null;
    }

    const amount = positiveSelections
      .map((selection: any) => {
        const [id, count] = selection;

        const room = availableRooms.find(room => room?.id === id);
        return room?.incrementalPrice?.[count - 1]?.amount;
      })
      .reduce((a, b) => a + b, 0);

    const currency =
      availableRooms.find(room => room?.id === positiveSelections[0][0])
        ?.incrementalPrice?.[0]?.currency ?? '';

    return {
      amount,
      currency,
    };
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
            {/* $FlowExpectedError: I don't understand this error TODO: Fix */}
            <RoomList data={availableHotel.availableRooms} />
            <BrandLabel />
          </LayoutSingleColumn>
        </ScrollView>
      </View>
    );
  }
}

type Props = {|
  +availableHotel: ?HotelType,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
  +getGuestCount: () => number,
  +paymentLink?: ?string,
  +setPaymentLink: (?string) => void,
  +apiProvider: ApiProvider,
  +maxPersons: number,
  +reset: () => void,
  +setPrice: (price: $PropertyType<HotelDetailScreenState, 'price'>) => void,
  +selected: $PropertyType<HotelDetailScreenState, 'selected'>,
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
  actions: { reset, setPrice },
  selected,
}: HotelDetailScreenState) => ({
  maxPersons,
  reset,
  setPrice,
  selected,
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

const paddingBottom = 64;
const iphoneXPadding = paddingBottom + 28;

const styles = StyleSheet.create({
  container: {
    paddingBottom: Device.isIPhoneX ? iphoneXPadding : paddingBottom,
  },
  safeArea: {
    flex: 1,
  },
});
