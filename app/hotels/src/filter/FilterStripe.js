// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from '@kiwicom/react-native-app-redux';
import { StyleSheet } from '@kiwicom/react-native-app-shared';

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

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 1, // Android
  },
  scrollView: {
    android: {
      paddingHorizontal: 13,
      paddingVertical: 5,
    },
    ios: {
      paddingHorizontal: 7,
      paddingVertical: 4,
    },
  },
});

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
class FilterStripe extends React.Component<Props> {
  scrollViewRef: React.ElementRef<typeof ScrollView>;

  onChange = (params: OnChangeFilterParams) => {
    this.props.onChange(params);
    this.scrollViewRef.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  storeScrollViewRef = ref => (this.scrollViewRef = ref);

  render = () => {
    const filters = [
      {
        isActive: this.props.activeFilters.isStarsFilterActive,
        Component: (
          <StarsFilter
            key="stars"
            stars={this.props.filter.starsRating}
            onChange={this.onChange}
            isActive={this.props.activeFilters.isStarsFilterActive}
          />
        ),
      },
      {
        isActive: this.props.activeFilters.isPriceFilterActive,
        Component: (
          <PriceFilter
            key="price"
            currency={this.props.currency}
            start={this.props.filter.minPrice}
            end={this.props.filter.maxPrice}
            onChange={this.onChange}
            isActive={this.props.activeFilters.isPriceFilterActive}
          />
        ),
      },
      {
        isActive: this.props.activeFilters.isMinScoreActive,
        Component: (
          <ScoreFilter
            key="score"
            minScore={this.props.filter.minScore}
            onChange={this.onChange}
            isActive={this.props.activeFilters.isMinScoreActive}
          />
        ),
      },
      {
        isActive: this.props.activeFilters.isHotelFacilitiesActive,
        Component: (
          <HotelFacilitiesFilter
            key="facilities"
            onChange={this.onChange}
            facilities={this.props.filter.hotelFacilities}
            isActive={this.props.activeFilters.isHotelFacilitiesActive}
          />
        ),
      },
      {
        isActive: this.props.filter.freeCancellation,
        Component: (
          <FreeCancellationFilter
            key="cancellation"
            onChange={this.onChange}
            isActive={this.props.filter.freeCancellation}
          />
        ),
      },
    ];

    const activeFilters = filters.filter(({ isActive }) => isActive);
    const inactiveFilters = filters.filter(({ isActive }) => !isActive);

    return (
      <View style={styles.view}>
        <ScrollView
          ref={this.storeScrollViewRef}
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {activeFilters.map(({ Component }) => Component)}
          {inactiveFilters.map(({ Component }) => Component)}
        </ScrollView>
      </View>
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
  currentSearchStats: hotels.currentSearchStats,
  activeFilters: filters.activeFilters,
});

export default connect(select)(FilterStripe);
