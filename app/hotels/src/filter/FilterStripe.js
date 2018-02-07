// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from '@kiwicom/react-native-app-redux';

import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelFacilitiesFilter from './hotelFacilities/HotelFacilitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import type { FilterReducerState } from './FiltersReducer.js';
import type { CurrentSearchStats } from './CurrentSearchStatsType';
import type {
  ActiveFilters,
  FilterParams,
  OnChangeFilterParams,
} from './FilterParametersType';
import type { HotelsReducerState } from '../HotelsReducer';

const styles = {
  view: {
    width: '100%',
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
};

type Props = {|
  onChange: OnChangeFilterParams => void,
  filter: FilterParams,
  currency: string,
  currentSearchStats: CurrentSearchStats,
  activeFilters: ActiveFilters,
|};

/**
 * This filter holds all available hotel filters. Active (selected) filters are
 * rendered first.
 */
function FilterStripe(props: Props) {
  const {
    starsRating,
    minPrice,
    maxPrice,
    freeCancellation,
    hotelFacilities,
    minScore,
  } = props.filter;

  const filters = [
    {
      isActive: props.activeFilters.isStarsFilterActive,
      Component: (
        <StarsFilter
          key="stars"
          stars={starsRating}
          onChange={props.onChange}
          isActive={props.activeFilters.isStarsFilterActive}
        />
      ),
    },
    {
      isActive: props.activeFilters.isPriceFilterActive,
      Component: (
        <PriceFilter
          key="price"
          currency={props.currency}
          start={minPrice}
          end={maxPrice}
          onChange={props.onChange}
          isActive={props.activeFilters.isPriceFilterActive}
        />
      ),
    },
    {
      isActive: props.activeFilters.isMinScoreActive,
      Component: (
        <ScoreFilter
          key="score"
          minScore={minScore}
          onChange={props.onChange}
          isActive={props.activeFilters.isMinScoreActive}
        />
      ),
    },
    {
      isActive: props.activeFilters.isHotelFacilitiesActive,
      Component: (
        <HotelFacilitiesFilter
          key="facilities"
          onChange={props.onChange}
          facilities={hotelFacilities}
          isActive={props.activeFilters.isHotelFacilitiesActive}
        />
      ),
    },
    {
      isActive: freeCancellation,
      Component: (
        <FreeCancellationFilter
          key="cancellation"
          onChange={props.onChange}
          isActive={freeCancellation}
        />
      ),
    },
  ];

  return (
    <View style={styles.view}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {filters
          .filter(({ isActive }) => isActive)
          .map(({ Component }) => Component)}
        {filters
          .filter(({ isActive }) => !isActive)
          .map(({ Component }) => Component)}
      </ScrollView>
    </View>
  );
}

const select = ({
  hotels,
  filters,
}: {
  hotels: HotelsReducerState,
  filters: FilterReducerState,
}) => ({
  currentSearchStats: hotels.currentSearchStats,
  activeFilters: filters.activeFilters,
});

export default connect(select)(FilterStripe);
