// @flow

import * as React from 'react';
import { withContext } from '@kiwicom/mobile-shared';

const noop = () => {};

const defaultState = {
  selected: {},
  maxPersons: 0,
  numberOfRooms: 0,
  getPersonCount: () => 0,
  price: {
    amount: 0,
    currency: '',
  },
  actions: {
    selectRoom: noop,
    deselectRoom: noop,
    reset: noop,
    setPrice: noop,
  },
};

const { Provider: ContextProvider, Consumer } = React.createContext<State>(
  defaultState,
);

type Props = {|
  +children: React.Node,
  +guestCount: number,
|};

type Money = {|
  amount: number,
  currency: string,
|};

type State = {|
  selected: {
    [string]: number, // originalId: count
  },
  price: Money,
  maxPersons: number,
  numberOfRooms: number,
  +getPersonCount: () => number,
  +actions: {|
    +selectRoom: (id: string, maxPersons: number) => void,
    +deselectRoom: (id: string, maxPersons: number) => void,
    +reset: () => void,
    +setPrice: (price: Money) => void,
  |},
|};

export class Provider extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      ...defaultState,
      getPersonCount: this.getPersonCount,
      actions: {
        selectRoom: this.selectRoom,
        deselectRoom: this.deselectRoom,
        reset: this.reset,
        setPrice: this.setPrice,
      },
    };
  }

  selectRoom = (id: string, maxPersons: number) => {
    this.updateSelectedCount(id, 1, maxPersons);
  };

  deselectRoom = (id: string, maxPersons: number) => {
    this.updateSelectedCount(id, -1, -maxPersons);
  };

  updateSelectedCount = (
    availabilityOriginalId: string,
    amount: number,
    maxPersons: number,
  ) => {
    this.setState(state => {
      const previousCount = state.selected[availabilityOriginalId] ?? 0;
      const selected = {
        ...state.selected,
        [availabilityOriginalId]: previousCount + amount,
      };
      return {
        ...state,
        selected,
        maxPersons: state.maxPersons + maxPersons,
        numberOfRooms: this.getNumberOfRooms(selected),
      };
    });
  };

  getNumberOfRooms = (selected: $PropertyType<State, 'selected'>) =>
    Object.keys(selected).reduce((sum, currentItem) => {
      return selected[currentItem] + sum;
    }, 0);

  getPersonCount = () => {
    return this.state.maxPersons > this.props.guestCount
      ? this.props.guestCount
      : this.state.maxPersons;
  };

  setPrice = (price: Money) => {
    this.setState({ price });
  };

  reset = () => {
    this.setState({
      selected: {},
      maxPersons: 0,
      numberOfRooms: 0,
      price: {
        amount: 0,
        currency: '',
      },
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

export const withHotelDetailScreenContext = (
  select: (state: State) => Object,
) => withContext(select, Consumer);

export type HotelDetailScreenState = State;

export default Provider;
