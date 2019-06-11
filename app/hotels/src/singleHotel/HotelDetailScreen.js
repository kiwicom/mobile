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
  Color,
  StatusbarBackground,
  Translation,
} from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Header from './header/Header';
import HotelInformation from './hotelInformation/HotelInformation';
import RoomList from './roomList/RoomList';
import BrandLabel from './brandLabel/BrandLabel';
import type { RoomsConfiguration } from './AvailableHotelSearchInput';
import type { HotelDetailScreen_availableHotel as HotelType } from './__generated__/HotelDetailScreen_availableHotel.graphql';
import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import BookingSummary from './summary/BookingSummary';
import CloseModal from '../components/CloseModal';

type Props = {|
  +availableHotel: ?HotelType,
  +roomsConfiguration: RoomsConfiguration,
  +goBack: () => void,
  +paymentLink?: ?string,
  +width: number,
|};

type NativeEvent = {|
  +nativeEvent: {|
    +contentOffset: {|
      +y: number,
    |},
  |},
|};

export function HotelDetailScreen(props: Props) {
  const isNarrowLayout = props.width < Device.DEVICE_THRESHOLD;
  const [barStyle, setBarStyle] = React.useState(
    Platform.select({
      android: 'default',
      ios: isNarrowLayout ? 'light-content' : 'dark-content',
    }),
  );

  const {
    actions: { setPaymentLink },
    apiProvider,
  }: HotelsContextState = React.useContext(HotelsContext);

  React.useEffect(() => {
    const provider =
      apiProvider === 'booking'
        ? Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM
        : Logger.Provider.ANCILLARY_PROVIDER_STAY22;
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_DETAILS, provider);
  }, [apiProvider]);

  React.useEffect(() => {
    setPaymentLink(props.paymentLink);
  }, [props.paymentLink, setPaymentLink]);

  function shouldSetStatusBarDark(yOffset: number) {
    return (
      Platform.OS === 'ios' &&
      isNarrowLayout &&
      yOffset > 180 &&
      barStyle !== 'dark-content'
    );
  }

  function shouldSetStatusBarLight(yOffset: number) {
    return (
      Platform.OS === 'ios' &&
      isNarrowLayout &&
      yOffset <= 180 &&
      barStyle !== 'light-content'
    );
  }

  function onScroll(e: NativeEvent) {
    const yOffset = e.nativeEvent.contentOffset.y;

    if (shouldSetStatusBarDark(yOffset)) {
      setBarStyle('dark-content');
    } else if (shouldSetStatusBarLight(yOffset)) {
      setBarStyle('light-content');
    }
  }

  const { availableHotel, goBack } = props;

  if (!availableHotel) {
    return (
      <>
        <GeneralError
          errorMessage={
            <Translation id="single_hotel.hotel_detail_screen.hotel_not_found" />
          }
        />
        <CloseModal onPress={goBack} />
      </>
    );
  }
  const statusBarBackground =
    barStyle === 'light-content' ? styles.lightContent : styles.darkContent;
  return (
    <View style={styles.safeArea}>
      <StatusbarBackground style={statusBarBackground} />

      <ScrollView
        contentContainerStyle={styles.container}
        onScroll={onScroll}
        scrollEventThrottle={100}
        testID="hotelDetailScrollView"
      >
        <LayoutSingleColumn>
          <Header hotel={availableHotel.hotel} />
          <HotelInformation hotel={availableHotel.hotel} />
          <RoomList data={availableHotel} />
          <BrandLabel />
        </LayoutSingleColumn>
      </ScrollView>
      <BookingSummary room={availableHotel} goBack={props.goBack} />
    </View>
  );
}

export default createFragmentContainer(withDimensions(HotelDetailScreen), {
  availableHotel: graphql`
    fragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {
      ...BookingSummary_room
      hotel {
        ...Header_hotel
        ...HotelInformation_hotel
      }
      ...RoomList_data
    }
  `,
});

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
