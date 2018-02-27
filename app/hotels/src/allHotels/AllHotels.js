// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { SimpleQueryRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment/moment';
import idx from 'idx';

import AllHotelsSearch from './AllHotelsSearch';
import type {
  SearchParams,
  OnChangeSearchParams,
} from './searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../filter/FilterParametersType';
import { handleOpenSingleHotel } from '../singleHotel';
import type { AvailableHotelSearchInput } from '../singleHotel/AvailableHotelSearchInput';
import type { Coordinates } from '../CoordinatesType';

type Props = {|
  location: string,
  search: SearchParams,
  filter: FilterParams,
  currency: string,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  onSearchChange: OnChangeSearchParams => void,
  onFilterChange: OnChangeFilterParams => void,
  onLocationChange: (location: string) => void,
  onCityIdChange: (cityId: string | null) => void,
  coordinates: Coordinates | null,
|};

export default class AllHotels extends React.Component<Props> {
  /**
   * Submit form with the initial date interval parameters.
   */
  componentDidMount = () => {
    this.props.onSearchChange({
      checkin: moment()
        .add(1, 'week')
        .startOf('isoWeek')
        .toDate(),
      checkout: moment()
        .add(1, 'week')
        .endOf('isoWeek')
        .toDate(),
    });
  };

  handleOpenSingleHotel = (hotelId: string) => {
    const { search, openSingleHotel } = this.props;

    handleOpenSingleHotel(hotelId, search, openSingleHotel);
  };

  renderInnerComponent = (rendererProps: { error: Object, props: Object }) => {
    const {
      onSearchChange,
      onFilterChange,
      search,
      filter,
      location,
      onLocationChange,
      onCityIdChange,
      currency,
    } = this.props;
    const data = idx(rendererProps, _ => _.props.city) || null;
    const isLoading =
      rendererProps.error === null && rendererProps.props === null;

    return (
      <AllHotelsSearch
        data={data}
        search={search}
        filter={filter}
        location={location}
        currency={currency}
        isLoading={isLoading}
        onSearchChange={onSearchChange}
        onFilterChange={onFilterChange}
        onLocationChange={onLocationChange}
        onCityIdChange={onCityIdChange}
        openSingleHotel={this.handleOpenSingleHotel}
        coordinates={this.props.coordinates}
      />
    );
  };

  render = () => {
    const { location } = this.props;

    return (
      <SimpleQueryRenderer
        query={graphql`
          query AllHotelsQuery($prefix: String!) {
            city: hotelCities(prefix: $prefix, first: 1) {
              ...AllHotelsSearch
            }
          }
        `}
        render={this.renderInnerComponent}
        variables={{
          prefix: location,
        }}
      />
    );
  };
}
