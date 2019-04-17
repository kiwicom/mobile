// @flow

import * as React from 'react';
import { DateUtils } from '@kiwicom/mobile-localization';

import type { CurrentSearchStats } from './filter/CurrentSearchStatsType';

const defaultState = {
  hotelId: '',
  apiProvider: 'booking',
  version: '',
  cityId: null,
  checkin: null,
  checkout: null,
  roomsConfiguration: null,
  currency: '',
  cityName: null,
  latitude: null,
  longitude: null,
  paymentLink: null,
  currentSearchStats: {
    priceMax: 10000,
    priceMin: 0,
  },
  actions: {
    setCurrentSearchStats: () => {},
    setCheckinDate: () => {},
    setCheckoutDate: () => {},
  },
  getGuestCount: () => 0,
  setHotelId: () => {},
  setPaymentLink: () => {},
  closeHotels: () => {},
};

export const HotelsContext = React.createContext<State>({
  ...defaultState,
});

const { Provider: ContextProvider } = HotelsContext;

export type ApiProvider = 'booking' | 'stay22';

export type RoomConfigurationType = $ReadOnlyArray<{|
  +adultsCount: number,
  +children?: $ReadOnlyArray<{|
    +age: number,
  |}>,
|}>;

type Props = {|
  +children: React.Node,
  +version: string,
  +cityName: ?string,
  +cityId: ?string,
  +checkin: ?string,
  +checkout: ?string,
  +roomsConfiguration: ?RoomConfigurationType,
  +currency: string,
  +latitude: ?number,
  +longitude: ?number,
  +hotelId: ?string,
  +apiProvider: ApiProvider,
  +closeHotels: () => void,
  +guestCount: number,
|};

type State = {|
  hotelId: string,
  +apiProvider: ApiProvider,
  +version: string,
  +cityName: string | null,
  +cityId: string | null,
  +checkin: Date | null,
  +checkout: Date | null,
  +roomsConfiguration: RoomConfigurationType | null,
  +currency: string,
  currentSearchStats: CurrentSearchStats,
  +latitude: number | null,
  +longitude: number | null,
  paymentLink: ?string,
  +setPaymentLink: (?string) => void,
  +getGuestCount: () => number,
  +setHotelId: (hotelId: string) => void,
  +closeHotels: () => void,
  +actions: {|
    +setCurrentSearchStats: ({|
      priceMax: number,
      priceMin: number,
    |}) => void,
    +setCheckinDate: Date => void,
    +setCheckoutDate: Date => void,
  |},
|};

const validateDate = (input: string): boolean => {
  const reg = /^\d{4}-\d{2}-\d{2}$/;
  return reg.test(input);
};

export const getAsUtcDate = (input: ?string): Date | null => {
  if (input == null || !validateDate(input)) {
    return null;
  }
  const [year, month, date] = input.split('-').map(item => parseInt(item, 10));
  return new Date(Date.UTC(year, month - 1, date));
};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hotelId: props.hotelId ?? '',
      apiProvider: props.apiProvider,
      version: props.version,
      cityId: props.cityId || null,
      checkin: getAsUtcDate(props.checkin),
      checkout: getAsUtcDate(props.checkout),
      roomsConfiguration: props.roomsConfiguration || null,
      currency: props.currency,
      cityName: props.cityName || null,
      latitude: props.latitude || null,
      longitude: props.longitude || null,
      paymentLink: null,
      currentSearchStats: {
        priceMax: 10000,
        priceMin: 0,
      },
      getGuestCount: this.getGuestCount,
      setHotelId: this.setHotelId,
      setPaymentLink: this.setPaymentLink,
      closeHotels: props.closeHotels,
      actions: {
        setCurrentSearchStats: this.setCurrentSearchStats,
        setCheckinDate: this.setCheckinDate,
        setCheckoutDate: this.setCheckoutDate,
      },
    };
  }

  setCurrentSearchStats = (currentSearchStats: CurrentSearchStats) => {
    this.setState({
      currentSearchStats,
    });
  };

  setHotelId = (hotelId: string) => this.setState({ hotelId });

  getGuestCount = () => this.props.guestCount;

  setPaymentLink = (paymentLink: ?string) => this.setState({ paymentLink });

  setCheckinDate = (checkin: Date) => {
    this.setState(state => {
      const checkout = state.checkout ?? new Date();
      const diffInDays = DateUtils.diffInDays(checkout, checkin);

      if (diffInDays > 30) {
        return {
          checkin,
          checkout: DateUtils(checkin).addDays(30),
        };
      }
      if (diffInDays <= 0) {
        return {
          checkin,
          checkout: DateUtils(checkin).addDays(1),
        };
      }
      return { checkin };
    });
  };

  setCheckoutDate = (checkout: Date) => {
    this.setState(state => {
      const checkin = state.checkin ?? new Date();
      const diffInDays = DateUtils.diffInDays(checkout, checkin);
      if (diffInDays > 30) {
        return {
          checkout,
          checkin: DateUtils(checkout).addDays(-30),
        };
      }
      if (diffInDays <= 0) {
        return {
          checkout,
          checkin: DateUtils(checkout).addDays(-1),
        };
      }
      return { checkout };
    });
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export type HotelsContextState = State;

export default { Provider };
