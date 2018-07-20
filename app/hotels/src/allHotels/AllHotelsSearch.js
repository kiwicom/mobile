// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import AllHotelsSearchList from './AllHotelsSearchList';
import { handleOpenSingleHotel } from '../singleHotel';
import { sanitizeHotelFacilities } from '../GraphQLSanitizers';
import { getSearchQueryParams } from '../search/SearchQueryHelpers';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';
import type { AllHotelsSearchQueryResponse } from './__generated__/AllHotelsSearchQuery.graphql';
import type { FilterParams } from '../filter/FilterParametersType';
import type { SearchParams } from './searchForm/SearchParametersType';
import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';

type PropsWithContext = {
  // external:
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void | boolean,
  cityId: ?string,
  coordinates: Coordinates | null,
  currency: string,
  // from context
  onCityIdChange: (cityId: string | null) => void,
  search: SearchParams,
  location: string,
  filter: FilterParams,
};

class AllHotelsSearch extends React.Component<PropsWithContext> {
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
    this.props.onCityIdChange(this.props.cityId || null);
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

type Props = {
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void | boolean,
  cityId: ?string,
  coordinates: Coordinates | null,
  currency: string,
};

export default function AllHotelsSearchWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ location, searchParams, actions }) => (
        <HotelsFilterContext.Consumer>
          {({ filterParams }) => (
            <AllHotelsSearch
              {...props}
              location={location}
              search={searchParams}
              filter={filterParams}
              onCityIdChange={actions.setCityId}
            />
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}
