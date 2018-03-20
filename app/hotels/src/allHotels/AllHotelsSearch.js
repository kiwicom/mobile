// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { connect } from '@kiwicom/react-native-app-redux';

import AllHotelsSearchList from './AllHotelsSearchList';
import { handleOpenSingleHotel } from '../singleHotel';
import { sanitizeHotelFacilities } from '../GraphQLSanitizers';
import { getSearchQueryParams } from '../search/SearchQueryHelpers';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';
import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type { FilterParams } from '../filter/FilterParametersType';
import type { SearchParams } from './searchForm/SearchParametersType';
import type { FilterReducerState } from '../filter/FiltersReducer';
import type { HotelsReducerState } from '../HotelsReducer';

type Props = {|
  search: SearchParams,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  onCityIdChange: (cityId: string | null) => void,
  cityId: string,
  coordinates: Coordinates | null,
  location: string,
  filter: FilterParams,
  currency: string,
|};

class AllHotelsSearch extends React.Component<Props> {
  handleOpenSingleHotel = (hotelId: string) => {
    handleOpenSingleHotel(
      hotelId,
      this.props.search,
      this.props.openSingleHotel,
    );
  };

  renderAllHotelsSearchList = (
    propsFromRenderer: AllHotelsSearchQueryResponse,
  ) => {
    return (
      <AllHotelsSearchList
        data={propsFromRenderer}
        openSingleHotel={this.handleOpenSingleHotel}
      />
    );
  };

  componentDidMount = () => {
    // new cityId needs to be propagated to the other pages (map for example)
    this.props.onCityIdChange(this.props.cityId);
  };

  render = () => {
    return (
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
            this.props.search,
            this.props.coordinates,
            this.props.cityId,
            this.props.location,
          ),
          filter: {
            ...this.props.filter,
            hotelFacilities: sanitizeHotelFacilities(
              this.props.filter.hotelFacilities,
            ),
          },
          first: 50,
          options: {
            currency: this.props.currency,
          },
        }}
        render={this.renderAllHotelsSearchList}
      />
    );
  };
}

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}) => ({
  location: hotels.location,
  search: hotels.searchParams,
  filter: filters.filterParams,
});

const actions = dispatch => ({
  onCityIdChange: (cityId: string | null) =>
    dispatch({
      type: 'setCityId',
      cityId,
    }),
});

export default connect(select, actions)(AllHotelsSearch);
