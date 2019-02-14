// @flow strict

import * as React from 'react';
import { Animated } from 'react-native';
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import { Logger } from '@kiwicom/mobile-shared';

import type { Stay22PaginationContainer as Stay22PaginationContainerType } from './__generated__/Stay22PaginationContainer.graphql';
import { withHotelsContext, type HotelsContextState } from '../HotelsContext';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';
import RenderSearchResults from './RenderSearchResults';

type Props = {|
  +data: Stay22PaginationContainerType,
  +relay: RelayPaginationProp,
  +setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) => void,
|};

type State = {|
  isLoading: boolean,
|};

export class Stay22PaginationContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_RESULTS,
      Logger.Provider.ANCILLARY_PROVIDER_STAY22,
    );
    // TODO: Set min max price here when supported by API
  }

  mapAnimation: Animated.Value;
  listAnimation: Animated.Value;

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
    const edges = this.props.data.allAvailableStay22Hotels?.edges ?? [];
    const data = edges.map(hotel => hotel?.node);

    return (
      <RenderSearchResults
        data={data}
        onLoadMore={this.loadMore}
        isLoading={this.state.isLoading}
        hasMore={this.props.relay.hasMore()}
        top={0}
      />
    );
  }
}

const select = ({ actions }: HotelsContextState) => ({
  setCurrentSearchStats: actions.setCurrentSearchStats,
});

export default createPaginationContainer(
  withHotelsContext(select)(Stay22PaginationContainer),
  graphql`
    fragment Stay22PaginationContainer on RootQuery {
      allAvailableStay22Hotels(search: $search, first: $first, after: $after)
        @connection(key: "Stay22PaginationContainer_allAvailableStay22Hotels") {
        edges {
          node {
            ... on AllAvailableStay22Hotel {
              ...RenderSearchResults
            }
          }
        }
      }
    }
  `,
  {
    getVariables(props, { count, cursor }, fragmentVariables) {
      const { search } = fragmentVariables;
      return {
        first: count,
        after: cursor,
        search,
      };
    },
    query: graphql`
      query Stay22PaginationContainerQuery(
        $search: Stay22HotelsSearchInput!
        $after: String
        $first: Int
      ) {
        ...Stay22PaginationContainer
      }
    `,
  },
);
