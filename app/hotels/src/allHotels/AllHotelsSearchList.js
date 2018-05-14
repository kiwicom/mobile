// @flow

import * as React from 'react';
import idx from 'idx';
import { View } from 'react-native';
import { Logger, GeneralError } from '@kiwicom/mobile-shared';
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
  setCurrentSearchStats: (currentSearchStats: Object) => void,
  setLocation: (location: string) => void,
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

    const currentSearchStats = idx(
      this.props,
      _ => _.data.allAvailableHotels.stats,
    );
    const cityName = idx(this.props.data, _ => _.allAvailableHotels.cityName);

    if (currentSearchStats && currentSearchStats.priceMax) {
      this.props.setCurrentSearchStats(currentSearchStats);
    }

    if (cityName) {
      this.props.setLocation(cityName);
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
      <View>
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
      </View>
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
          setLocation={actions.setLocation}
        />
      )}
    </HotelsSearchContext.Consumer>
  );
}

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
          }
          stats {
            priceMax
            priceMin
          }
          cityName
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
