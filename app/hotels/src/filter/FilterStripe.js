// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import HotelsContext from '../HotelsContext';
import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelFacilitiesFilter from './hotelFacilities/HotelFacilitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import type {
  ActiveFilters,
  FilterParams,
  OnChangeFilterParams,
} from './FilterParametersType';
import HotelsFilterContext from '../HotelsFilterContext';
import Filters from './Filters';

type PropsWithContext = {|
  +currency: string,
  +activeFilters: ActiveFilters,
  +onChange: OnChangeFilterParams => void,
  +filter: FilterParams,
|};

/**
 * This filter holds all available hotel filters. Active (selected) filters are
 * rendered first.
 * The Filters component will handle this ordering.
 */
class FilterStripe extends React.Component<PropsWithContext> {
  scrollViewRef: React.ElementRef<typeof ScrollView>;

  onChange = (params: OnChangeFilterParams) => {
    this.props.onChange(params);
    // setTimeout will make it run after the re-render and it scrolls to correct position
    setTimeout(() => {
      this.scrollViewRef.scrollTo({
        x: 0,
        y: 0,
        animated: true,
      });
    });
  };

  storeScrollViewRef = ref => (this.scrollViewRef = ref);

  render = () => {
    return (
      <View style={styles.view}>
        <ScrollView
          ref={this.storeScrollViewRef}
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Filters>
            <StarsFilter
              stars={this.props.filter.starsRating}
              onChange={this.onChange}
              isActive={this.props.activeFilters.isStarsFilterActive}
            />
            <PriceFilter
              currency={this.props.currency}
              start={this.props.filter.minPrice}
              end={this.props.filter.maxPrice}
              onChange={this.onChange}
              isActive={this.props.activeFilters.isPriceFilterActive}
            />
            <ScoreFilter
              minScore={this.props.filter.minScore}
              onChange={this.onChange}
              isActive={this.props.activeFilters.isMinScoreActive}
            />
            <HotelFacilitiesFilter
              onChange={this.onChange}
              facilities={this.props.filter.hotelFacilities}
              isActive={this.props.activeFilters.isHotelFacilitiesActive}
            />
            <FreeCancellationFilter
              onChange={this.onChange}
              isActive={this.props.filter.freeCancellation}
            />
          </Filters>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
  },
  scrollView: {
    paddingVertical: 10,
    android: {
      paddingHorizontal: 14,
    },
    ios: {
      paddingHorizontal: 10,
    },
  },
});

export default function FilterStripeWithContext() {
  return (
    <HotelsContext.Consumer>
      {({ currency }) => (
        <HotelsFilterContext.Consumer>
          {({ activeFilters, filterParams, actions: { setFilter } }) => (
            <FilterStripe
              currency={currency}
              onChange={setFilter}
              filter={filterParams}
              activeFilters={activeFilters}
            />
          )}
        </HotelsFilterContext.Consumer>
      )}
    </HotelsContext.Consumer>
  );
}
