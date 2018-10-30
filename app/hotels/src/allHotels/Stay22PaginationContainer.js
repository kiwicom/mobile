// @flow strict

import * as React from 'react';
import { Animated } from 'react-native';
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import { Logger } from '@kiwicom/mobile-shared';
import idx from 'idx';

import type { Stay22PaginationContainer as Stay22PaginationContainerType } from './__generated__/Stay22PaginationContainer.graphql';
import HotelsContext from '../HotelsContext';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';
import RenderSearchResults from './RenderSearchResults';

type PropsWithContext = {|
  ...Props,
  +setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) => void,
|};

type State = {|
  isLoading: boolean,
|};

export class Stay22PaginationContainer extends React.Component<
  PropsWithContext,
  State,
> {
  mapAnimation: Animated.Value;
  listAnimation: Animated.Value;

  constructor(props: PropsWithContext) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_RESULTS);
    // TODO: Set min max price here when supported by API
  };

  loadMore = () => {
    if (this.props.relay.hasMore() && !this.props.relay.isLoading()) {
      this.setState({ isLoading: true }, () => {
        this.props.relay.loadMore(50, () => {
          this.setState({ isLoading: false });
        });
      });
    }
  };

  render = () => {
    const edges =
      idx(this.props.data, _ => _.allAvailableStay22Hotels.edges) || [];
    const data = edges.map(hotel => idx(hotel, _ => _.node));

    return (
      <RenderSearchResults
        data={data}
        onLoadMore={this.loadMore}
        isLoading={this.state.isLoading}
        hasMore={this.props.relay.hasMore()}
        top={0}
      />
    );
  };
}

type Props = {|
  +data: Stay22PaginationContainerType,
  +relay: RelayPaginationProp,
|};

class Stay22PaginationContainerWithContext extends React.Component<Props> {
  renderInner = ({ actions }) => (
    <Stay22PaginationContainer
      {...this.props}
      setCurrentSearchStats={actions.setCurrentSearchStats}
    />
  );

  render() {
    return <HotelsContext.Consumer>{this.renderInner}</HotelsContext.Consumer>;
  }
}

export default createPaginationContainer(
  Stay22PaginationContainerWithContext,
  graphql`
    fragment Stay22PaginationContainer on RootQuery {
      allAvailableStay22Hotels(search: $search, first: $first, after: $after)
        @connection(key: "Stay22PaginationContainer_allAvailableStay22Hotels") {
        cityName
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
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
