// @flow strict

import * as React from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  graphql,
  createPaginationContainer,
  type RelayPaginationProp,
} from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  AdaptableLayout,
  Logger,
  Device,
} from '@kiwicom/mobile-shared';
import idx from 'idx';

import MapScreen from '../map/allHotels/MapScreen';
import AllHotelsSearchList from './AllHotelsSearchList';
import type { RenderSearchResults as RenderResultsType } from './__generated__/RenderSearchResults.graphql';
import SearchResultsContext, {
  type ResultType,
} from '../navigation/allHotels/SearchResultsContext';
import HotelsSearchContext from '../HotelsSearchContext';
import LoadMoreButton from './LoadMoreButton';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';

type PropsWithContext = {|
  ...Props,
  +show: ResultType,
  +setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) => void,
|};

type State = {|
  isLoading: boolean,
|};

export const topValue = 1000;
export const lowValue = -100;
const transitionDuration = 250;

export class RenderSearchResults extends React.Component<
  PropsWithContext,
  State,
> {
  mapAnimation: Animated.Value;
  listAnimation: Animated.Value;

  constructor(props: PropsWithContext) {
    super(props);

    const showList = props.show === 'list';
    this.mapAnimation = new Animated.Value(showList ? topValue : 0);
    this.listAnimation = new Animated.Value(showList ? 0 : lowValue);

    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_RESULTS);

    const priceMax = idx(
      this.props,
      _ => _.data.allAvailableBookingComHotels.stats.maxPrice,
    );
    const priceMin = idx(
      this.props,
      _ => _.data.allAvailableBookingComHotels.stats.minPrice,
    );

    if (priceMax != null && priceMin != null) {
      this.props.setCurrentSearchStats({
        priceMax,
        priceMin,
      });
    }
  };

  componentDidUpdate = (prevProps: PropsWithContext) => {
    if (prevProps.show === 'list' && this.props.show === 'map') {
      this.animateToMap();
    }
    if (prevProps.show === 'map' && this.props.show === 'list') {
      this.animateToList();
    }
  };

  animateToMap = () => {
    Animated.parallel([
      Animated.timing(this.mapAnimation, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(this.listAnimation, {
        toValue: lowValue,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  animateToList = () => {
    Animated.parallel([
      Animated.timing(this.mapAnimation, {
        toValue: topValue,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
      Animated.timing(this.listAnimation, {
        toValue: 0,
        duration: transitionDuration,
        useNativeDriver: true,
      }),
    ]).start();
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
      idx(this.props.data, _ => _.allAvailableBookingComHotels.edges) || [];
    const data = edges.map(hotel => idx(hotel, _ => _.node));

    return (
      <React.Fragment>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            top: 56,
            transform: [{ translateY: this.listAnimation }],
          }}
        >
          {/*  Note: it's not possible to use FlatList here because it's wrapped with ScrollView and it causes performance issues.*/}
          <ScrollView contentContainerStyle={styles.content}>
            <AllHotelsSearchList
              data={data}
              openSingleHotel={this.props.openSingleHotel}
            />
            {this.props.relay.hasMore() && (
              <LoadMoreButton
                isLoading={this.state.isLoading}
                onPress={this.loadMore}
              />
            )}
          </ScrollView>
        </Animated.View>
        <AdaptableLayout
          renderOnNarrow={
            <Animated.View
              style={{
                ...StyleSheet.absoluteFillObject,
                top: 56,
                transform: [{ translateY: this.mapAnimation }],
              }}
            >
              <MapScreen
                data={data}
                onOpenSingleHotel={this.props.openSingleHotel}
              />
            </Animated.View>
          }
        />
      </React.Fragment>
    );
  };
}

type Props = {|
  +data: RenderResultsType,
  +openSingleHotel: () => void,
  +relay: RelayPaginationProp,
|};

const RenderSearchResultsWithContext = (props: Props) => (
  <HotelsSearchContext.Consumer>
    {({ actions }) => (
      <SearchResultsContext.Consumer>
        {({ show }) => {
          return (
            <RenderSearchResults
              {...props}
              show={show}
              setCurrentSearchStats={actions.setCurrentSearchStats}
            />
          );
        }}
      </SearchResultsContext.Consumer>
    )}
  </HotelsSearchContext.Consumer>
);

const styles = StyleSheet.create({
  content: {
    paddingBottom: Device.isIPhoneX ? 80 : 44,
  },
});

export default createPaginationContainer(
  RenderSearchResultsWithContext,
  graphql`
    fragment RenderSearchResults on RootQuery {
      allAvailableBookingComHotels(
        search: $search
        filter: $filter
        options: $options
        first: $first
        after: $after
      ) @connection(key: "RenderSearchResults_allAvailableBookingComHotels") {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        stats {
          maxPrice
          minPrice
        }
        edges {
          node {
            ... on AllHotelAvailabilityHotel {
              ...AllHotelsSearchList
              ...MapScreen
            }
          }
        }
      }
    }
  `,
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
      query RenderSearchResultsQuery(
        $search: HotelsSearchInput!
        $filter: HotelsFilterInput!
        $options: AvailableHotelOptionsInput
        $after: String
        $first: Int
      ) {
        ...RenderSearchResults
      }
    `,
  },
);
