// @flow

import * as React from 'react';
import idx from 'idx';
import { ScrollView } from 'react-native';
import {
  Logger,
  GeneralError,
  StyleSheet,
  Device,
} from '@kiwicom/mobile-shared';
import {
  createPaginationContainer,
  graphql,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import HotelsSearchContext from '../HotelsSearchContext';
import AllHotelsSearchRow from './AllHotelsSearchRow';
import LoadMoreButton from './LoadMoreButton';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList_data.graphql';

type PropsWithContext = {
  ...Props,
  +setCurrentSearchStats: (currentSearchStats: Object) => void,
};

type State = {|
  isLoading: boolean,
|};

export class AllHotelsSearchList extends React.Component<
  PropsWithContext,
  State,
> {
  state = {
    isLoading: false,
  };

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_RESULTS);

    const priceMax = idx(
      this.props,
      _ => _.data.allAvailableHotels.stats.maxPrice,
    );
    const priceMin = idx(
      this.props,
      _ => _.data.allAvailableHotels.stats.minPrice,
    );

    if (priceMax != null && priceMin != null) {
      this.props.setCurrentSearchStats({
        priceMax,
        priceMin,
      });
    }
  };

  loadMore = () => {
    if (this.props.relay.hasMore() && !this.props.relay.isLoading()) {
      this.setState(
        {
          isLoading: true,
        },
        () => {
          this.props.relay.loadMore(50, () => {
            this.setState({
              isLoading: false,
            });
          });
        },
      );
    }
  };

  render = () => {
    // Note: it's not possible to use FlatList here because it's wrapped
    // with ScrollView and it causes performance issues.

    const hotels = idx(this.props, _ => _.data.allAvailableHotels.edges) || [];

    if (hotels.length === 0) {
      return (
        <GeneralError
          errorMessage={
            <Translation id="hotels_search.all_hotels_search_list.no_hotels_found" />
          }
        />
      );
    }

    return (
      <ScrollView contentContainerStyle={styles.content}>
        {hotels.map(hotel => (
          <AllHotelsSearchRow
            key={hotel.node.id}
            data={hotel.node}
            openSingleHotel={this.props.openSingleHotel}
          />
        ))}
        {this.props.relay.hasMore() && (
          <LoadMoreButton
            isLoading={this.state.isLoading}
            onPress={this.loadMore}
          />
        )}
      </ScrollView>
    );
  };
}

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchListProps,
  relay: RelayPaginationProp,
|};

function AllHotelsSearchListWithContext(props: Props) {
  return (
    <HotelsSearchContext.Consumer>
      {({ actions }) => (
        <AllHotelsSearchList
          {...props}
          setCurrentSearchStats={actions.setCurrentSearchStats}
        />
      )}
    </HotelsSearchContext.Consumer>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: Device.isIPhoneX ? 80 : 44,
  },
});

export default createPaginationContainer(
  AllHotelsSearchListWithContext,
  {
    data: graphql`
      fragment AllHotelsSearchList_data on RootQuery {
        allAvailableHotels(
          search: $search
          filter: $filter
          options: $options
          first: $first
          after: $after
        ) @connection(key: "AllHotels_allAvailableHotels") {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              id
              ...AllHotelsSearchRow
            }
            ...MapView
          }
          stats {
            maxPrice
            minPrice
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
      query AllHotelsSearchListQuery(
        $search: HotelsSearchInput!
        $filter: HotelsFilterInput!
        $options: AvailableHotelOptionsInput
        $after: String
        $first: Int
      ) {
        ...AllHotelsSearchList_data
      }
    `,
  },
);
