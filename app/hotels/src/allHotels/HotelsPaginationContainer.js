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
import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import RenderSearchResults from './RenderSearchResults';
import FilterStripe from '../filter/FilterStripe';

type Props = {|
  +relay: RelayPaginationProp,
  +data: ?HotelsPaginationContainerType,
|};

export function HotelsPaginationContainer(props: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    actions: { setCurrentSearchStats },
    closeHotels,
  }: HotelsContextState = React.useContext(HotelsContext);

  React.useEffect(() => {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_RESULTS,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  }, []);

  React.useEffect(() => {
    const priceMax = props.data?.allAvailableBookingComHotels?.stats?.maxPrice;
    const priceMin = props.data?.allAvailableBookingComHotels?.stats?.minPrice;

    if (priceMax != null && priceMin != null) {
      setCurrentSearchStats({
        priceMax,
        priceMin,
      });
    }
  }, [props.data, setCurrentSearchStats]);

  function loadMore() {
    if (props.relay.hasMore() && !props.relay.isLoading()) {
      setIsLoading(true);
      props.relay.loadMore(50, () => {
        setIsLoading(false);
      });
    }
  }

  const edges = props.data?.allAvailableBookingComHotels?.edges ?? [];
  const data = edges.map(hotel => hotel?.node);

  return (
    <>
      <View style={styles.filterContainer}>
        <FilterStripe />
      </View>
      <RenderSearchResults
        onLoadMore={loadMore}
        hasMore={props.relay.hasMore()}
        isLoading={isLoading}
        // $FlowExpectedError: Relay flow types does not work for plural: true
        data={data}
        closeHotels={closeHotels}
      />
    </>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    zIndex: parseInt(defaultTokens.zIndexSticky, 10),
  },
});

export default createPaginationContainer(
  HotelsPaginationContainer,
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
