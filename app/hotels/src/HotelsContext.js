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
  errors: null,
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
  +errors: ValidationError | null,
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

type SearchInput = {|
  +checkin: Date | null,
  +checkout: Date | null,
  +cityId: string | null,
|};

type ValidationError = {|
  interval?: number,
  beforeToday?: boolean,
  tooFarFuture?: boolean,
  invalidCityId?: boolean,
  missingDates?: boolean,
|};

const validateInput = ({ checkin, checkout, cityId }: SearchInput) => {
  const validationError = {};
  if (checkin === null || checkout === null) {
    return {
      missingDates: true,
    };
  }
  const diffInDays = DateUtils.diffInDays(checkout, checkin);
  const isBeforeToday = DateUtils.diffInDays(checkin, new Date()) < 0;
  const cityIdError = cityId == '-1'; // Intenionally checking string or number
  const tooFarFuture = DateUtils.diffInDays(checkout, new Date()) > 365;

  if (diffInDays > 30 || diffInDays <= 0) {
    validationError.interval = diffInDays;
  }
  if (isBeforeToday) {
    validationError.beforeToday = true;
  }
  if (cityIdError) {
    validationError.invalidCityId = true;
  }
  if (tooFarFuture) {
    validationError.tooFarFuture = true;
  }
  return validationError;
};

class Provider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const checkin = getAsUtcDate(props.checkin);
    const checkout = getAsUtcDate(props.checkout);
    const cityId = props.cityId ?? null;
    const errors = validateInput({ checkin, checkout, cityId });
    this.state = {
      hotelId: props.hotelId ?? '',
      apiProvider: props.apiProvider,
      version: props.version,
      cityId,
      checkin,
      checkout,
      roomsConfiguration: props.roomsConfiguration ?? null,
      currency: props.currency,
      cityName: props.cityName ?? null,
      latitude: props.latitude ?? null,
      longitude: props.longitude ?? null,
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
      errors: { ...errors },
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
      const cityId = state.cityId;
      const diffInDays = DateUtils.diffInDays(checkout, checkin);

      if (diffInDays > 30) {
        const newState = {
          checkin,
          checkout: DateUtils(checkin).addDays(30),
        };
        return {
          ...newState,
          errors: {
            ...validateInput({
              checkin: newState.checkin,
              checkout: newState.checkout,
              cityId,
            }),
          },
        };
      }
      if (diffInDays <= 0) {
        const newState = {
          checkin,
          checkout: DateUtils(checkin).addDays(1),
        };
        return {
          ...newState,
          errors: {
            ...validateInput({
              checkin: newState.checkin,
              checkout: newState.checkout,
              cityId,
            }),
          },
        };
      }
      return {
        checkin,
        errors: {
          ...validateInput({ checkin, checkout, cityId }),
        },
      };
    });
  };

  setCheckoutDate = (checkout: Date) => {
    this.setState(state => {
      const checkin = state.checkin ?? new Date();
      const cityId = state.cityId;
      const diffInDays = DateUtils.diffInDays(checkout, checkin);
      if (diffInDays > 30) {
        const newState = {
          checkout,
          checkin: DateUtils(checkout).addDays(-30),
        };
        return {
          ...newState,
          errors: {
            ...validateInput({
              checkin: newState.checkin,
              checkout: newState.checkout,
              cityId,
            }),
          },
        };
      }
      if (diffInDays <= 0) {
        const newState = {
          checkout,
          checkin: DateUtils(checkout).addDays(-1),
        };
        return {
          ...newState,
          errors: {
            ...validateInput({
              checkin: newState.checkin,
              checkout: newState.checkout,
              cityId,
            }),
          },
        };
      }
      return {
        checkout,
        errors: {
          ...validateInput({
            checkin: state.checkin,
            checkout,
            cityId,
          }),
        },
      };
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
