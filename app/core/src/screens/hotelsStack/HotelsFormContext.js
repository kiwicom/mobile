// @flow

import * as React from 'react';
import { DateUtils } from '@kiwicom/mobile-localization';
import { withContext } from '@kiwicom/mobile-shared';

type Props = {|
  +children: React.Node,
|};

type State = {|
  cityName: string,
  cityId: string,
  checkin: Date,
  checkout: Date,
  coordinates: {|
    lat: number,
    lng: number,
  |},
  adultsCount: number,
  children: Array<{| +age: number |}>,
  +actions: {|
    +setCity: SaveCity => void,
    +onCheckinChange: Date => void,
    +onCheckoutChange: Date => void,
    +setAdults: number => void,
    +setChildren: boolean => void,
  |},
|};

export type SaveCity = {|
  cityName: string,
  cityId: string,
  coordinates: {|
    lat: number,
    lng: number,
  |},
|};

const noop = () => {};

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

const { Consumer, Provider: ContextProvider } = React.createContext<State>(
  defaultState,
);

export default class Provider extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      ...defaultState,
      actions: {
        setCity: this.setCity,
        onCheckinChange: this.onCheckinChange,
        onCheckoutChange: this.onCheckoutChange,
        setAdults: this.setAdults,
        setChildren: this.setChildren,
      },
    };
  }

  setCity = (input: SaveCity) => {
    this.setState(input);
  };

  onCheckinChange = (checkin: Date) => {
    this.setState({ checkin });
  };

  onCheckoutChange = (checkout: Date) => {
    this.setState({ checkout });
  };

  setAdults = (change: number) => {
    this.setState(state => ({
      adultsCount: state.adultsCount + change,
    }));
  };

  setChildren = (add: boolean) => {
    if (add) {
      this.setState(state => ({
        children: [...state.children, { age: 1 }],
      }));
    } else {
      this.setState(state => ({
        children: state.children.slice(1, state.children.length),
      }));
    }
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}

export const withHotelsFormContext = (select: (state: State) => Object) =>
  withContext(select, Consumer);

export type HotelsFormContextType = State;
