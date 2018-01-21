// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import {
  Layout,
  FullPageLoading,
  GeneralError,
  ErrorMessage,
} from '@kiwicom/react-native-app-common';
import idx from 'idx';
import moment from 'moment';

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
  currency: string,
  openSingleHotel: (hotelId: string) => void,
  onSearchChange: OnChangeSearchParams => void,
  onFilterChange: OnChangeFilterParams => void,
  onLocationChange: (location: string) => void,
  onCityIdChange: (cityId: string | null) => void,
|};

type State = {|
  errorMessage: string | null,
|};

export class AllHotelsSearch extends React.Component<Props, State> {
  state = {
    errorMessage: null,
  };

  getCityIdFromData = (data: AllHotelsSearchData): string | null => {
    const cityId = idx(data, _ => _.edges[0].node.id);

    return cityId ? cityId : null;
  };

  componentWillReceiveProps = (nextProps: Props) => {
    const cityId = this.getCityIdFromData(nextProps.data);

    if (cityId !== this.getCityIdFromData(this.props.data)) {
      this.props.onCityIdChange(cityId);
    }

    this.validateDates(nextProps.search.checkin, nextProps.search.checkout);
  };

  isReadyToSearch = (): boolean => {
    const { search: s, data } = this.props;

    return (
      Boolean(this.getCityIdFromData(data)) &&
      s.checkin !== null &&
      s.checkout !== null &&
      this.state.errorMessage === null
    );
  };

  validateDates = (checkin: Date | null, checkout: Date | null) => {
    if (checkin === null || checkout === null) {
      return;
    }
    const diff = moment(checkout).diff(checkin, 'days');
    // Check-out should not be before check-in
    if (diff < 0) {
      this.setState({
        errorMessage:
          'Pick check-out date after check-in date to get any result',
      });
    } else if (1 > diff || diff > 30) {
      // Check-out has to be 1 up to 30 days after check-in
      this.setState({
        errorMessage: 'Pick check-out that is 1 up to 30 days after check-in',
      });
    } else {
      this.setState({
        errorMessage: null,
      });
    }
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
      currency,
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
        <FilterStripe
          filter={filter}
          onChange={onFilterChange}
          currency={currency}
        />
        {this.state.errorMessage && (
          <ErrorMessage content={this.state.errorMessage} />
        )}
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
              ) {
                allHotels: allAvailableHotels(
                  search: $search
                  filter: $filter
                  options: $options
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
              filter: {
                ...filter,
                hotelFacilities: filter.hotelFacilities.length
                  ? filter.hotelFacilities.reduce((facilities, facility) => {
                      facilities[facility] = true;
                      return facilities;
                    }, {})
                  : null,
              },
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
