// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { ScrollView, Text } from 'react-native';
import { CenteredView, Logger } from '@kiwicom/react-native-app-shared';
import { connect } from '@kiwicom/react-native-app-redux';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';
import type { CurrentSearchStats } from '../filter/CurrentSearchStatsType';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchListProps,
  setCurrentSearchStats: (currentSearchStats: Object) => void,
|};

export class AllHotelsSearchList extends React.Component<Props> {
  componentDidMount = () => {
    Logger.LogEvent(Logger.Event.Displayed, Logger.Category.Ancillary, {
      type: 'Hotels',
      step: 'results',
    });

    const currentSearchStats = idx(this.props, _ => _.data.stats);

    if (currentSearchStats && currentSearchStats.priceMax) {
      this.props.setCurrentSearchStats(currentSearchStats);
    }
  };

  render = () => {
    const hotels = idx(this.props, _ => _.data.edges) || [];

    if (hotels.length === 0) {
      return (
        <CenteredView>
          <Text>No hotels found</Text>
        </CenteredView>
      );
    } else {
      return (
        <ScrollView style={{ paddingVertical: 3 }}>
          {hotels.map(edge => {
            if (edge) {
              const { node: hotel } = edge;
              return (
                <AllHotelsSearchRow
                  data={hotel}
                  openSingleHotel={this.props.openSingleHotel}
                  key={hotel && hotel.id}
                />
              );
            }
          })}
        </ScrollView>
      );
    }
  };
}

const mapDispatchToProps = dispatch => ({
  setCurrentSearchStats: (currentSearchStats: CurrentSearchStats) =>
    dispatch({
      type: 'setCurrentSearchStats',
      currentSearchStats,
    }),
});

export default createFragmentContainer(
  connect(null, mapDispatchToProps)(AllHotelsSearchList),
  graphql`
    fragment AllHotelsSearchList on HotelAvailabilityConnection {
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
  `,
);
