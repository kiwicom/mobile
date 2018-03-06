// @flow

import * as React from 'react';
import idx from 'idx';
import { createPaginationContainer, graphql } from 'react-relay';
import { View } from 'react-native';
import {
  Logger,
  IconLoading,
  LinkButton,
  GeneralError,
} from '@kiwicom/react-native-app-shared';
import { connect } from '@kiwicom/react-native-app-redux';
import type { RelayPaginationProp } from '@kiwicom/react-native-app-relay';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList_data.graphql';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchListProps,
  setCurrentSearchStats: (currentSearchStats: Object) => void,
  relay: RelayPaginationProp,
|};

type State = {|
  isLoading: boolean,
|};

export class AllHotelsSearchList extends React.Component<Props, State> {
  state = {
    isLoading: false,
  };

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_RESULTS);

    const currentSearchStats = idx(
      this.props,
      _ => _.data.allAvailableHotels.stats,
    );

    if (currentSearchStats && currentSearchStats.priceMax) {
      this.props.setCurrentSearchStats(currentSearchStats);
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
      return <GeneralError errorMessage="No hotels found." />;
    }

    return (
      <View>
        {hotels.map(hotel => (
          <AllHotelsSearchRow
            key={hotel.node.id}
            data={hotel.node}
            openSingleHotel={this.props.openSingleHotel}
          />
        ))}
        {this.state.isLoading ? (
          <IconLoading />
        ) : (
          <LinkButton title="Load more..." onPress={this.loadMore} />
        )}
      </View>
    );
  };
}

const actions = dispatch => ({
  setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) =>
    dispatch({
      type: 'setCurrentSearchStats',
      currentSearchStats,
    }),
});

export default createPaginationContainer(
  connect(null, actions)(AllHotelsSearchList),
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
          }
          stats {
            priceMax
            priceMin
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
