// @flow

import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from '@kiwicom/react-native-app-redux';

import StarsFilter from './stars/StarsFilter';
import PriceFilter from './price/PriceFilter';
import FreeCancellationFilter from './freeCancellation/FreeCancellationFilter';
import HotelFacilitiesFilter from './hotelFacilities/HotelFacilitiesFilter';
import ScoreFilter from './score/ScoreFilter';
import type {
  FilterParams,
  OnChangeFilterParams,
} from './FilterParametersType';
import type { CurrentSearchStats } from './CurrentSearchStatsType';

const styles = {
  view: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 3, // Android
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
      isActive: StarsFilter.isActive(starsRating),
      Component: (
        <StarsFilter
          key="stars"
          stars={starsRating}
          onChange={props.onChange}
        />
      ),
    },
    {
      isActive: PriceFilter.isActive(
        minPrice,
        maxPrice,
        props.currentSearchStats.priceMin,
        props.currentSearchStats.priceMax,
      ),
      Component: (
        <PriceFilter
          key="price"
          currency={props.currency}
          start={minPrice}
          end={maxPrice}
          onChange={props.onChange}
        />
      ),
    },
    {
      isActive: ScoreFilter.isActive(minScore),
      Component: (
        <ScoreFilter
          key="score"
          minScore={minScore}
          onChange={props.onChange}
        />
      ),
    },
    {
      isActive: HotelFacilitiesFilter.isActive(hotelFacilities),
      Component: (
        <HotelFacilitiesFilter
          key="facilities"
          onChange={props.onChange}
          facilities={hotelFacilities}
        />
      ),
    },
    {
      isActive: FreeCancellationFilter.isActive(freeCancellation),
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

const mapStateToProps = state => ({
  currentSearchStats: state.hotels.currentSearchStats,
});

export default connect(mapStateToProps)(FilterStripe);
