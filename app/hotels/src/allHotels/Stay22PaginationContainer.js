// @flow strict

import * as React from 'react';
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import { Logger } from '@kiwicom/mobile-shared';
import { Decimal } from 'decimal.js-light';

import type { Stay22PaginationContainer_data as Stay22PaginationContainerType } from './__generated__/Stay22PaginationContainer_data.graphql';
import { HotelsContext, type HotelsContextState } from '../HotelsContext';
import RenderSearchResults from './RenderSearchResults';

type Props = {|
  +data: Stay22PaginationContainerType,
  +relay: RelayPaginationProp,
|};

export function Stay22PaginationContainer(props: Props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    closeHotels,
    actions: { setCurrentSearchStats },
  }: HotelsContextState = React.useContext(HotelsContext);

  const priceMax =
    props.data.allAvailableStay22Hotels?.stats?.minPrice?.amount ?? 0;
  const priceMin =
    props.data.allAvailableStay22Hotels?.stats?.maxPrice?.amount ?? 0;

  React.useEffect(() => {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_RESULTS,
      Logger.Provider.ANCILLARY_PROVIDER_STAY22,
    );
  }, []);

  React.useEffect(() => {
    setCurrentSearchStats({
      priceMax: new Decimal(priceMax).toNumber(),
      priceMin: new Decimal(priceMin).toNumber(),
    });
  }, [priceMax, priceMin, setCurrentSearchStats]);

  function loadMore() {
    if (props.relay.hasMore() && !props.relay.isLoading()) {
      setIsLoading(true);
      props.relay.loadMore(50, () => {
        setIsLoading(false);
      });
    }
  }

  const edges = props.data.allAvailableStay22Hotels?.edges ?? [];
  const data = edges.map(hotel => hotel?.node);

  return (
    <RenderSearchResults
      // $FlowExpectedError: Relay flow types does not work for plural: true
      data={data}
      onLoadMore={loadMore}
      isLoading={isLoading}
      hasMore={props.relay.hasMore()}
      top={0}
      closeHotels={closeHotels}
    />
  );
}

export default createPaginationContainer(
  Stay22PaginationContainer,
  {
    data: graphql`
      fragment Stay22PaginationContainer_data on RootQuery {
        allAvailableStay22Hotels(search: $search, first: $first, after: $after)
          @connection(
            key: "Stay22PaginationContainer_allAvailableStay22Hotels"
          ) {
          stats {
            minPrice {
              amount
            }
            maxPrice {
              amount
            }
          }
          edges {
            node {
              ... on AllAvailableStay22Hotel {
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
        ...Stay22PaginationContainer_data
      }
    `,
  },
);
