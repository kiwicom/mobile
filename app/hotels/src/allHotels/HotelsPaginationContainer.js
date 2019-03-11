// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import { Logger, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import type { HotelsPaginationContainer_data as HotelsPaginationContainerType } from './__generated__/HotelsPaginationContainer_data.graphql';
import { withHotelsContext, type HotelsContextState } from '../HotelsContext';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';
import RenderSearchResults from './RenderSearchResults';
import FilterStripe from '../filter/FilterStripe';
import CloseModal from '../components/CloseModal';

type PropsWithContext = {|
  +relay: RelayPaginationProp,
  +data: ?HotelsPaginationContainerType,
  +setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) => void,
  +closeHotels: () => void,
|};

type State = {|
  isLoading: boolean,
|};

export class HotelsPaginationContainer extends React.Component<
  PropsWithContext,
  State,
> {
  constructor(props: PropsWithContext) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_RESULTS,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );

    const priceMax = this.props.data?.allAvailableBookingComHotels?.stats
      ?.maxPrice;
    const priceMin = this.props.data?.allAvailableBookingComHotels?.stats
      ?.minPrice;

    if (priceMax != null && priceMin != null) {
      this.props.setCurrentSearchStats({
        priceMax,
        priceMin,
      });
    }
  }

  loadMore = () => {
    if (this.props.relay.hasMore() && !this.props.relay.isLoading()) {
      this.setState({ isLoading: true }, () => {
        this.props.relay.loadMore(50, () => {
          this.setState({ isLoading: false });
        });
      });
    }
  };

  render() {
    const edges = this.props.data?.allAvailableBookingComHotels?.edges ?? [];
    const data = edges.map(hotel => hotel?.node);

    return (
      <React.Fragment>
        <View style={styles.filterContainer}>
          <FilterStripe />
        </View>
        <RenderSearchResults
          onLoadMore={this.loadMore}
          hasMore={this.props.relay.hasMore()}
          isLoading={this.state.isLoading}
          data={data}
          top={56}
        />
        <CloseModal onPress={this.props.closeHotels} />
      </React.Fragment>
    );
  }
}

const select = ({ actions, closeHotels }: HotelsContextState) => ({
  setCurrentSearchStats: actions.setCurrentSearchStats,
  closeHotels,
});

const styles = StyleSheet.create({
  filterContainer: {
    zIndex: parseInt(defaultTokens.zIndexSticky, 10),
  },
});

export default createPaginationContainer(
  withHotelsContext(select)(HotelsPaginationContainer),
  {
    data: graphql`
      fragment HotelsPaginationContainer_data on RootQuery {
        allAvailableBookingComHotels(
          search: $search
          filter: $filter
          options: $options
          first: $first
          after: $after
        )
          @connection(
            key: "HotelsPaginationContainer_allAvailableBookingComHotels"
          ) {
          stats {
            maxPrice
            minPrice
          }
          edges {
            node {
              ... on AllHotelAvailabilityHotel {
                ...RenderSearchResults_data
              }
            }
          }
        }
      }
    `,
  },
  {
    getVariables(props, { count, cursor }, fragmentVariables) {
      const { search, filter, options } = fragmentVariables;
      return {
        first: count,
        after: cursor,
        search,
        filter,
        options,
      };
    },
    query: graphql`
      query HotelsPaginationContainerQuery(
        $search: HotelsSearchInput!
        $filter: HotelsFilterInput!
        $options: AvailableHotelOptionsInput
        $after: String
        $first: Int
      ) {
        ...HotelsPaginationContainer_data
      }
    `,
  },
);
