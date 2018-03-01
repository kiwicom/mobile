// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import {
  Layout,
  FullPageLoading,
  GeneralError,
} from '@kiwicom/react-native-app-shared';
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
import { sanitizeHotelFacilities } from '../GraphQLSanitizers';
import type { Coordinates } from '../CoordinatesType';
import {
  hasCoordinates,
  getSearchQueryParams,
} from '../search/SearchQueryHelpers';

export const HOTELS_PER_LOAD = 50;

type Props = {|
  location: string,
  data: AllHotelsSearchData,
  search: SearchParams,
  filter: FilterParams,
  isLoading: boolean,
  currency: string,
  openSingleHotel: (hotelId: string) => void,
  onSearchChange: OnChangeSearchParams => void,
  onFilterChange: OnChangeFilterParams => void,
  onLocationChange: (location: string) => void,
  onCityIdChange: (cityId: string | null) => void,
  coordinates: Coordinates | null, // TODO: use this in the search
|};

export class AllHotelsSearch extends React.Component<Props> {
  getCityIdFromData = (data: AllHotelsSearchData): string | null => {
    const cityId = idx(data, _ => _.edges[0].node.id);

    return cityId ? cityId : null;
  };

  componentWillReceiveProps = (nextProps: Props) => {
    const cityId = this.getCityIdFromData(nextProps.data);

    if (cityId && cityId !== this.getCityIdFromData(this.props.data)) {
      this.props.onCityIdChange(cityId);
    }
  };

  isReadyToSearch = (): boolean => {
    const { search, data, coordinates } = this.props;
    const canQueryWithCoordinats =
      this.props.location === '' && hasCoordinates(coordinates);
    return (
      (canQueryWithCoordinats || Boolean(this.getCityIdFromData(data))) &&
      search.checkin !== null &&
      search.checkout !== null
    );
  };

  renderInnerComponent = (propsFromRenderer: AllHotelsSearchQueryResponse) => {
    return (
      <AllHotelsSearchList
        data={propsFromRenderer}
        openSingleHotel={this.props.openSingleHotel}
      />
    );
  };

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
      currency,
      coordinates,
    } = this.props;
    const cityId = idx(this.props, _ => _.data.edges[0].node.id) || null;
    return (
      <Layout>
        <SearchForm
          onChange={onSearchChange}
          onLocationChange={onLocationChange}
          search={search}
          location={location}
        />
        <FilterStripe
          filter={filter}
          onChange={onFilterChange}
          currency={currency}
        />
        {isLoading && <FullPageLoading />}
        {!(isLoading || this.getCityIdFromData(data)) && (
          <GeneralError errorMessage="No relevant city was found." />
        )}
        {this.isReadyToSearch() && (
          <PublicApiRenderer
            query={graphql`
              query AllHotelsSearchQuery(
                $search: HotelsSearchInput!
                $filter: HotelsFilterInput!
                $options: AvailableHotelOptionsInput
                $first: Int
                $after: String
              ) {
                ...AllHotelsSearchList_data
              }
            `}
            variables={{
              search: getSearchQueryParams(
                search,
                coordinates,
                cityId,
                location,
              ),
              filter: {
                ...filter,
                hotelFacilities: sanitizeHotelFacilities(
                  filter.hotelFacilities,
                ),
              },
              first: HOTELS_PER_LOAD,
              options: { currency },
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
