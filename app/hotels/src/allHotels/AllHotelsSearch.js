// @flow

import * as React from 'react';
import { Text } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import {
  Layout,
  FullPageLoading,
  CenteredView,
} from '@kiwicom/react-native-app-common';
import idx from 'idx';

import SearchForm from './searchForm/SearchForm';
import FilterStripe from '../filter/FilterStripe';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { AllHotelsSearch as AllHotelsSearchData } from './__generated__/AllHotelsSearch.graphql';
import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type {
  SearchParams,
  OnChangeSearchParams,
} from './searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';

type Props = {|
  location: string,
  data: AllHotelsSearchData,
  search: SearchParams,
  filter: FilterParams,
  isLoading: boolean,
  openSingleHotel: (hotelId: string) => void,
  onSearchChange: OnChangeSearchParams => void,
  onFilterChange: OnChangeFilterParams => void,
  onLocationChange: (location: string) => void,
  onCityIdChange: (cityId: string | null) => void,
|};

const MIN_LOCATION_LENGTH = 3;

export class AllHotelsSearch extends React.Component<Props> {
  getCityIdFromData = (data: AllHotelsSearchData): string | null => {
    const cityId = idx(data, _ => _.edges[0].node.id);

    return cityId ? cityId : null;
  };

  componentWillReceiveProps = (nextProps: Props) => {
    const cityId = this.getCityIdFromData(nextProps.data);

    if (cityId !== this.getCityIdFromData(this.props.data)) {
      this.props.onCityIdChange(cityId);
    }
  };

  isReadyToSearch = (): boolean => {
    const { search: s, data } = this.props;

    return (
      Boolean(this.getCityIdFromData(data)) &&
      s.checkin !== null &&
      s.checkout !== null
    );
  };

  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => (
    <AllHotelsSearchList
      data={propsFromRenderer.allHotels}
      openSingleHotel={this.props.openSingleHotel}
    />
  );

  render() {
    const {
      search,
      filter,
      onLocationChange,
      onSearchChange,
      onFilterChange,
      location,
      data,
      isLoading,
    } = this.props;

    return (
      <Layout>
        <SearchForm
          onChange={onSearchChange}
          onLocationChange={onLocationChange}
          search={search}
          location={location}
          data={null}
        />
        <FilterStripe filter={filter} onChange={onFilterChange} />
        {isLoading && <FullPageLoading />}
        {!(isLoading || this.getCityIdFromData(data)) && (
          <CenteredView>
            <Text>
              {location.length >= MIN_LOCATION_LENGTH
                ? 'No relevant city was found.'
                : 'Enter city name of your destination.'}
            </Text>
          </CenteredView>
        )}
        {this.isReadyToSearch() && (
          <PublicApiRenderer
            query={graphql`
              query AllHotelsSearchQuery(
                $search: HotelsSearchInput!
                $filter: HotelsFilterInput!
              ) {
                allHotels: allAvailableHotels(
                  search: $search
                  filter: $filter
                ) {
                  ...AllHotelsSearchList
                }
              }
            `}
            variables={{
              search: {
                ...search,
                cityId: this.getCityIdFromData(data),
              },
              filter,
            }}
            render={this.renderInnerComponent}
            cacheConfig={{
              force: true,
            }}
          />
        )}
      </Layout>
    );
  }
}

export default createFragmentContainer(
  AllHotelsSearch,
  graphql`
    fragment AllHotelsSearch on HotelCityConnection {
      edges {
        node {
          id
        }
      }
    }
  `,
);
