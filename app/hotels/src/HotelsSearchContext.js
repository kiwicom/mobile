// @flow

import * as React from 'react';
import { DateFormatter } from '@kiwicom/mobile-localization';

import type {
  SearchParams,
  OnChangeSearchParams,
} from './allHotels/searchForm/SearchParametersType';
import type { CurrentSearchStats } from './filter/CurrentSearchStatsType';

const InitialContextState = {
  cityId: null,
  location: '',
  searchParams: {
    checkin: DateFormatter()
      .add(1, 'week')
      .startOf('isoWeek')
      .toDate(),
    checkout: DateFormatter()
      .add(1, 'week')
      .endOf('isoWeek')
      .toDate(),
    roomsConfiguration: {
      adultsCount: 1,
      children: [],
    },
  },
  currentSearchStats: {
    priceMax: 10000,
    priceMin: 0,
  },
  actions: {
    setSearch: () => {},
    setLocation: () => {},
    setCityId: () => {},
    setCurrentSearchStats: () => {},
    setCityIdAndLocation: () => {},
  },
};

const { Consumer, Provider: ContextProvider } = React.createContext(
  InitialContextState,
);

type Props = {|
  children: React.Node,
|};

type State = {|
  cityId: string | null,
  location: string,
  searchParams: SearchParams,
  currentSearchStats: CurrentSearchStats,
  actions: {|
    setSearch: OnChangeSearchParams => void,
    setLocation: string => void,
    setCityId: (string | null) => void,
    setCurrentSearchStats: ({|
      priceMax: number,
      priceMin: number,
    |}) => void,
    setCityIdAndLocation: (string | null, string) => void,
  |},
|};

class Provider extends React.Component<Props, State> {
  setSearch = (search: OnChangeSearchParams) => {
    this.setState(prevState => ({
      searchParams: {
        ...prevState.searchParams,
        ...search,
      },
    }));
  };

  setLocation = (location: string) => {
    this.setState({
      location,
    });
  };

  setCityId = (cityId: string | null) => {
    this.setState({
      cityId,
    });
  };

  setCurrentSearchStats = (currentSearchStats: CurrentSearchStats) => {
    this.setState({
      currentSearchStats,
    });
  };

  setCityIdAndLocation = (cityId: string | null, location: string) => {
    this.setState({
      cityId,
      location,
    });
  };

  state = {
    ...InitialContextState,
    actions: {
      setSearch: this.setSearch,
      setLocation: this.setLocation,
      setCityId: this.setCityId,
      setCurrentSearchStats: this.setCurrentSearchStats,
      setCityIdAndLocation: this.setCityIdAndLocation,
    },
  };

  render = () => (
    <ContextProvider value={this.state}>{this.props.children}</ContextProvider>
  );
}

export default { Consumer, Provider };
