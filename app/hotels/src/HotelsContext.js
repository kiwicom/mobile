// @flow

import * as React from 'react';
import { DateUtils } from '@kiwicom/mobile-localization';
import { Decimal } from 'decimal.js-light';
import { useApi } from '@kiwicom/mobile-shared';

import dateFactory from './factories/hotelsContext/dateFactory';

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
  guestCount: 0,
  currentSearchStats: {
    priceMax: new Decimal(10000),
    priceMin: new Decimal(0),
  },
  actions: {
    setCurrentSearchStats: () => {},
    setCheckinDate: () => {},
    setCheckoutDate: () => {},
    setHotelId: () => {},
    setPaymentLink: () => {},
  },
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

type SearchStats = {|
  +priceMax: Decimal,
  +priceMin: Decimal,
|};

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
  +currentSearchStats: SearchStats,
  +latitude: number | null,
  +longitude: number | null,
  paymentLink: ?string,
  +guestCount: number,
  +closeHotels: () => void,
  +errors: ValidationError | null,
  +actions: {|
    +setPaymentLink: (?string) => void,
    +setHotelId: (hotelId: string) => void,
    +setCurrentSearchStats: SearchStats => void,
    +setCheckinDate: Date => void,
    +setCheckoutDate: Date => void,
  |},
|};

type SearchInput = {|
  +checkin: ?Date,
  +checkout: ?Date,
  +cityId: string | null,
|};

type ValidationError = {|
  interval?: number,
  beforeToday?: boolean,
  tooFarFuture?: boolean,
  invalidCityId?: boolean,
  missingDates?: boolean,
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

export const validateInput = ({ checkin, checkout, cityId }: SearchInput) => {
  const validationError = {};
  if (checkin == null || checkout == null) {
    return {
      missingDates: true,
    };
  }
  const diffInDays = DateUtils.diffInDays(checkout, checkin);
  const isBeforeToday = DateUtils.diffInDays(checkin, new Date()) < 0;
  const cityIdError = cityId === '-1' || cityId === -1;
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

function Provider(props: Props) {
  const cityId = props.cityId ?? null;

  const [hotelId, setHotelId] = React.useState(props.hotelId ?? '');
  const [paymentLink, setPaymentLink] = React.useState(null);
  const [currentSearchStats, setCurrentSearchStats] = React.useState(
    defaultState.currentSearchStats,
  );

  const { checkin, checkout, setCheckin, setCheckout } = useApi(dateFactory, {
    checkin: getAsUtcDate(props.checkin),
    checkout: getAsUtcDate(props.checkout),
  });

  const [errors, setErrors] = React.useState(
    validateInput({ checkin, checkout, cityId }),
  );

  React.useEffect(() => {
    setErrors(validateInput({ checkin, checkout, cityId }));
  }, [checkin, checkout, cityId]);

  const state: State = {
    hotelId,
    apiProvider: props.apiProvider,
    version: props.version,
    cityId,
    checkin: checkin ?? null,
    checkout: checkout ?? null,
    roomsConfiguration: props.roomsConfiguration ?? null,
    currency: props.currency,
    cityName: props.cityName ?? null,
    latitude: props.latitude ?? null,
    longitude: props.longitude ?? null,
    paymentLink,
    currentSearchStats,
    guestCount: props.guestCount,
    closeHotels: props.closeHotels,
    actions: {
      setPaymentLink,
      setHotelId,
      setCurrentSearchStats,
      setCheckinDate: setCheckin,
      setCheckoutDate: setCheckout,
    },
    errors: { ...errors },
  };

  return <ContextProvider value={state}>{props.children}</ContextProvider>;
}

export type HotelsContextState = State;

export default { Provider };
