// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelAmenitiesFilter from './hotelAmenities/HotelAmenitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import OrderFilter from './order/OrderFilter';
import {
  HotelsFilterContext,
  type HotelsFilterState,
} from '../HotelsFilterContext';
import Filters from './Filters';

/**
 * This filter holds all available hotel filters. Active (selected) filters are
 * rendered first.
 * The Filters component will handle this ordering.
 */
const FilterStripe = () => {
  const {
    activeFilters,
    filterParams,
    orderBy,
    actions: { setFilter },
  }: HotelsFilterState = React.useContext(HotelsFilterContext);
  const { currency }: HotelsContextState = React.useContext(HotelsContext);
  return (
    <View style={styles.view}>
      <ScrollView
        contentContainerStyle={[styles.scrollView, styles.backgroundNew]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Filters>
          <OrderFilter
            orderBy={orderBy}
            isActive={activeFilters.isOrderFilterActive}
            onChange={setFilter}
          />
          <StarsFilter
            stars={filterParams.starsRating}
            onChange={setFilter}
            isActive={activeFilters.isStarsFilterActive}
          />
          <PriceFilter
            currency={currency}
            start={filterParams.minPrice}
            end={filterParams.maxPrice}
            onChange={setFilter}
            isActive={activeFilters.isPriceFilterActive}
          />
          <ScoreFilter
            minScore={filterParams.minScore}
            onChange={setFilter}
            isActive={activeFilters.isMinScoreActive}
          />
          <HotelAmenitiesFilter
            onChange={setFilter}
            amenities={filterParams.hotelAmenities}
            isActive={activeFilters.isHotelAmenitiesActive}
          />
          <FreeCancellationFilter
            onChange={setFilter}
            isActive={filterParams.freeCancellation}
          />
        </Filters>
      </ScrollView>
    </View>
  );
};

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

export default FilterStripe;
