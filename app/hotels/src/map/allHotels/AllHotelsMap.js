// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { graphql } from 'react-relay';
import { PublicApiRenderer } from '@kiwicom/react-native-app-relay';
import { Device } from '@kiwicom/react-native-app-shared';

import MapScreen from './MapScreen';
import FilterStripe from '../../filter/FilterStripe';
import type { AllHotelsMapQueryResponse } from './__generated__/AllHotelsMapQuery.graphql';
import type { SearchParams } from '../../allHotels/searchForm/SearchParametersType';
import type {
  FilterParams,
  OnChangeFilterParams,
} from '../../filter/FilterParametersType';
import { handleOpenSingleHotel } from '../../singleHotel';
import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import { sanitizeHotelFacilities, sanitizeDate } from '../../GraphQLSanitizers';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

type Props = {|
  currency: string,
  cityId: string | null,
  search: SearchParams,
  filter: FilterParams,
  onFilterChange: OnChangeFilterParams => void,
  onGoToSingleHotel: (searchParams: AvailableHotelSearchInput) => void,
|};

class AllHotelsMap extends React.Component<Props> {
  handleOpenSingleHotel = (hotelId: string) => {
    const { search, onGoToSingleHotel } = this.props;

    handleOpenSingleHotel(hotelId, search, onGoToSingleHotel);
  };

  renderInnerComponent = (props: AllHotelsMapQueryResponse) => (
    <MapScreen
      data={props.allAvailableHotels}
      filter={this.props.filter}
      onFilterChange={this.props.onFilterChange}
      onOpenSingleHotel={this.handleOpenSingleHotel}
    />
  );

  render = () => {
    const { cityId, search, filter, onFilterChange, currency } = this.props;

    return (
      <View style={styles.container}>
        {!Device.isTablet() && (
          <FilterStripe
            filter={filter}
            onChange={onFilterChange}
            currency={currency}
          />
        )}
        <PublicApiRenderer
          query={graphql`
            query AllHotelsMapQuery(
              $search: HotelsSearchInput!
              $filter: HotelsFilterInput
              $options: AvailableHotelOptionsInput
            ) {
              allAvailableHotels(
                search: $search
                filter: $filter
                options: $options
              ) {
                ...MapScreen
              }
            }
          `}
          variables={{
            search: {
              cityId,
              ...search,
              checkin: sanitizeDate(search.checkin),
              checkout: sanitizeDate(search.checkout),
            },
            filter: {
              ...filter,
              hotelFacilities: sanitizeHotelFacilities(filter.hotelFacilities),
            },
            options: { currency },
          }}
          render={this.renderInnerComponent}
          cacheConfig={{ force: true }}
        />
      </View>
    );
  };
}

export default AllHotelsMap;
