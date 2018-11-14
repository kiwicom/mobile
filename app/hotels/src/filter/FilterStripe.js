// @flow strict

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { withHotelsContext } from '../HotelsContext';
import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelFacilitiesFilter from './hotelFacilities/HotelFacilitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import OrderFilter from './order/OrderFilter';
import type {
  ActiveFilters,
  FilterParams,
  OnChangeFilterParams,
  OrderByEnum,
} from './FilterParametersType';
import { withHotelsFilterContext } from '../HotelsFilterContext';
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
class FilterStripe extends React.Component<Props> {
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

  render() {
    return (
      <View style={styles.view}>
        <ScrollView
          ref={this.storeScrollViewRef}
          contentContainerStyle={[styles.scrollView, styles.backgroundNew]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Filters>
            <OrderFilter
              orderBy={this.props.orderBy}
              isActive={this.props.activeFilters.isOrderFilterActive}
              onChange={this.onChange}
            />
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
  }
}

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
}) => ({
  onChange: setFilter,
  filter: filterParams,
  activeFilters,
  orderBy,
});

export default withHotelsContext(selectHotelsProps)(
  withHotelsFilterContext(selectFilterProps)(FilterStripe),
);
