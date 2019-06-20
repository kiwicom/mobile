// @flow

import * as React from 'react';
import { DateUtils } from '@kiwicom/mobile-localization';
import { noop } from '@kiwicom/mobile-utils';

type Props = {|
  +children: React.Node,
|};

type ChildrenType = $ReadOnlyArray<{|
  +age: number,
|}>;

type State = {|
  +cityName: string,
  +cityId: string,
  +checkin: Date,
  +checkout: Date,
  +coordinates: {|
    +lat: number,
    +lng: number,
  |},
  +adultsCount: number,
  +children: ChildrenType,
  +actions: {|
    +setCity: SaveCity => void,
    +onCheckinChange: Date => void,
    +onCheckoutChange: Date => void,
    +setAdults: number => void,
    +setChildren: ChildrenType => void,
  |},
|};

export type SaveCity = {|
  +cityName: string,
  +cityId: string,
  +coordinates: {|
    +lat: number,
    +lng: number,
  |},
|};

const defaultState = {
  cityName: 'Barcelona',
  cityId: 'aG90ZWxDaXR5Oi0zNzI0OTA=',
  checkin: DateUtils().addDays(30),
  checkout: DateUtils().addDays(36),
  adultsCount: 1,
  children: [],
  coordinates: {
    lat: 41.3851,
    lng: 2.1734,
  },
  actions: {
    setCity: noop,
    onCheckinChange: noop,
    onCheckoutChange: noop,
    setAdults: noop,
    setChildren: noop,
  },
};

export const HotelsFormContext = React.createContext<State>(defaultState);

const { Provider: ContextProvider } = HotelsFormContext;

export default function Provider(props: Props) {
  const [cityData, setCity] = React.useState({
    cityName: defaultState.cityName,
    cityId: defaultState.cityId,
    coordinates: defaultState.coordinates,
  });
  const [checkin, setCheckin] = React.useState(defaultState.checkin);
  const [checkout, setCheckout] = React.useState(defaultState.checkout);
  const [adultsCount, setAdults] = React.useState(defaultState.adultsCount);
  const [children, setChildren] = React.useState(defaultState.children);

  const state = {
    ...cityData,
    checkin,
    checkout,
    adultsCount,
    children,
    actions: {
      setCity,
      onCheckinChange: setCheckin,
      onCheckoutChange: setCheckout,
      setAdults,
      setChildren,
    },
  };

  return <ContextProvider value={state}>{props.children}</ContextProvider>;
}

export type HotelsFormContextType = State;
