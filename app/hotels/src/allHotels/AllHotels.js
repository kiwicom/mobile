// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { SimpleQueryRenderer } from '@kiwicom/react-native-app-relay';
import moment from 'moment/moment';
import idx from 'idx';

import AllHotelsSearch from './AllHotelsSearch';
import type {
  SearchParametersType,
  OnChangeSearchParams,
} from './searchForm/SearchParametersType';
import type { AvailableHotelSearchInput } from '../singleHotel';

type Props = {|
  location: string,
  search: SearchParametersType,
  openSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
  onFilterChange: (filter: OnChangeSearchParams) => void,
  onLocationChange: (location: string) => void,
  onCityIdChange: (cityId: string | null) => void,
|};

export default class AllHotels extends React.Component<Props> {
  /**
   * Submit form with the initial date interval parameters.
   */
  componentDidMount = () => {
    this.props.onFilterChange({
      checkin: moment()
        .add(1, 'week')
        .startOf('isoWeek')
        .format('YYYY-MM-DD'),
      checkout: moment()
        .add(1, 'week')
        .endOf('isoWeek')
        .format('YYYY-MM-DD'),
    });
  };

  handleOpenSingleHotel = (hotelId: string) => {
    const searchProps = this.props.search;
    if (searchProps.checkin && searchProps.checkout) {
      this.props.openSingleHotel({
        hotelId,
        checkin: searchProps.checkin,
        checkout: searchProps.checkout,
        roomsConfiguration: [
          {
            adultsCount: searchProps.roomsConfiguration.adultsCount,
            children: searchProps.roomsConfiguration.children.map(childAge => ({
              age: childAge.age,
            })),
          },
        ],
      });
    }
  };

  renderInnerComponent = (rendererProps: { error: Object, props: Object }) => {
    const {
      onFilterChange,
      search,
      location,
      onLocationChange,
      onCityIdChange,
    } = this.props;
    const data = idx(rendererProps, _ => _.props.city) || null;
    const isLoading =
      rendererProps.error === null && rendererProps.props === null;

    return (
      <AllHotelsSearch
        data={data}
        search={search}
        location={location}
        isLoading={isLoading}
        onFilterChange={onFilterChange}
        onLocationChange={onLocationChange}
        onCityIdChange={onCityIdChange}
        openSingleHotel={this.handleOpenSingleHotel}
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
