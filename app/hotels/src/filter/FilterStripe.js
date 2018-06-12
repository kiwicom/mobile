// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelFacilitiesFilter from './hotelFacilities/HotelFacilitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import type { CurrentSearchStats } from './CurrentSearchStatsType';
import type {
  ActiveFilters,
  FilterParams,
  OnChangeFilterParams,
} from './FilterParametersType';
import HotelsSearchContext from '../HotelsSearchContext';
import HotelsFilterContext from '../HotelsFilterContext';

const styles = StyleSheet.create({
  view: {
    width: '100%',
    backgroundColor: Color.white,
    android: {
      elevation: 1,
    },
    ios: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: Color.border,
    },
  },
  scrollView: {
    paddingVertical: 15,
    android: {
      paddingHorizontal: 14,
    },
    ios: {
      paddingHorizontal: 10,
    },
  },
});

type PropsWithContext = {|
  ...Props,
  +currentSearchStats: CurrentSearchStats,
  +activeFilters: ActiveFilters,
  +onChange: OnChangeFilterParams => void,
  +filter: FilterParams,
|};

/**
 * This filter holds all available hotel filters. Active (selected) filters are
 * rendered first.
 */
class FilterStripe extends React.Component<PropsWithContext> {
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

type Props = {|
  +currency: string,
|};

export default function FilterStripeWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ currentSearchStats }) => (
        <HotelsFilterContext.Consumer>
          {({ activeFilters, filterParams, actions: { setFilter } }) => (
            <FilterStripe
              {...props}
              onChange={setFilter}
              filter={filterParams}
              currentSearchStats={currentSearchStats}
              activeFilters={activeFilters}
            />
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsSearchContext.Consumer>
  );
}
