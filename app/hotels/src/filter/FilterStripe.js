// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { withHotelsContext } from '../HotelsContext';
import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelAmenitiesFilter from './hotelAmenities/HotelAmenitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import OrderFilter from './order/OrderFilter';
import type {
  ActiveFilters,
  FilterParams,
  OnChangeFilterParams,
  OrderByEnum,
} from './FilterParametersType';
import {
  withHotelsFilterContext,
  type HotelsFilterState,
} from '../HotelsFilterContext';
import Filters from './Filters';

type Props = {|
  +currency: string,
  +activeFilters: ActiveFilters,
  +onChange: OnChangeFilterParams => void,
  +filter: FilterParams,
  +orderBy: OrderByEnum | null,
|};

/**
 * This filter holds all available hotel filters. Active (selected) filters are
 * rendered first.
 * The Filters component will handle this ordering.
 */
const FilterStripe = (props: Props) => (
  <View style={styles.view}>
    <ScrollView
      contentContainerStyle={[styles.scrollView, styles.backgroundNew]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Filters>
        <OrderFilter
          orderBy={props.orderBy}
          isActive={props.activeFilters.isOrderFilterActive}
          onChange={props.onChange}
        />
        <StarsFilter
          stars={props.filter.starsRating}
          onChange={props.onChange}
          isActive={props.activeFilters.isStarsFilterActive}
        />
        <PriceFilter
          currency={props.currency}
          start={props.filter.minPrice}
          end={props.filter.maxPrice}
          onChange={props.onChange}
          isActive={props.activeFilters.isPriceFilterActive}
        />
        <ScoreFilter
          minScore={props.filter.minScore}
          onChange={props.onChange}
          isActive={props.activeFilters.isMinScoreActive}
        />
        <HotelAmenitiesFilter
          onChange={props.onChange}
          amenities={props.filter.hotelAmenities}
          isActive={props.activeFilters.isHotelAmenitiesActive}
        />
        <FreeCancellationFilter
          onChange={props.onChange}
          isActive={props.filter.freeCancellation}
        />
      </Filters>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: defaultTokens.paletteWhite,
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  backgroundNew: {
    backgroundColor: defaultTokens.paletteWhite,
  },
});

const selectHotelsProps = ({ currency }) => ({ currency });
const selectFilterProps = ({
  activeFilters,
  filterParams,
  orderBy,
  actions: { setFilter },
}: HotelsFilterState) => ({
  onChange: setFilter,
  filter: filterParams,
  activeFilters,
  orderBy,
});

export default withHotelsContext(selectHotelsProps)(
  withHotelsFilterContext(selectFilterProps)(FilterStripe),
);
