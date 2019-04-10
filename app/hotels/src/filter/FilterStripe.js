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
  HotelsFilterContext,
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
const FilterStripe = (props: Props) => {
  const {
    activeFilters,
    filterParams,
    orderBy,
    actions: { setFilter },
  }: HotelsFilterState = React.useContext(HotelsFilterContext);
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
            currency={props.currency}
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

const selectHotelsProps = ({ currency }) => ({ currency });

export default withHotelsContext(selectHotelsProps)(FilterStripe);
