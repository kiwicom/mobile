// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { View, StyleSheet } from 'react-native';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment';

import SearchForm from './SearchForm';
import FilterStripe from '../filter/FilterStripe';
import AllHotelsSearchList from './AllHotelsSearchList';

import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type { SearchParametersType } from './SearchParametersType';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

type Props = {|
  openSingleHotel: (id: string) => void,
|};

type State = {|
  search: SearchParametersType,
|};

export default class AllHotelsSearch extends React.Component<Props, State> {
  state = {
    search: {
      latitude: 50.08,
      longitude: 14.44,
      checkin: null,
      checkout: null,
      roomsConfiguration: {
        adultsCount: 1,
      },
    },
  };

  handleSearchChange = (search: SearchParametersType) => {
    this.setState({
      search: {
        latitude: search.latitude,
        longitude: search.longitude,
        checkin: search.checkin,
        checkout: search.checkout,
        roomsConfiguration: search.roomsConfiguration,
      },
    });
  };

  isReadyToSearch = () => {
    const { search } = this.state;
    return (
      search.latitude && search.longitude && search.checkin && search.checkout
    );
  };

  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => (
    <View>
      <FilterStripe />
      <AllHotelsSearchList
        data={propsFromRenderer.allHotels}
        openSingleHotel={this.props.openSingleHotel}
      />
    </View>
  );

  render = () => {
    const { search } = this.state;
    return (
      <View style={styles.wrapper}>
        <SearchForm onChange={this.handleSearchChange} />
        {this.isReadyToSearch() && (
          <PublicApiRenderer
            query={graphql`
              query AllHotelsSearchQuery($search: HotelsSearchInput!) {
                allHotels(search: $search) {
                  ...AllHotelsSearchList
                }
              }
            `}
            variables={{
              search: {
                ...search,
                checkin: moment(search.checkin).format('YYYY-MM-DD'),
                checkout: moment(search.checkout).format('YYYY-MM-DD'),
              },
            }}
            render={this.renderInnerComponent}
            cacheConfig={{
              force: true,
            }}
          />
        )}
      </View>
    );
  };
}
