// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { ScrollView, Text } from 'react-native';
import { CenteredView, Logger } from '@kiwicom/react-native-app-common';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';

type Props = {|
  openSingleHotel: (id: string) => void,
  data: AllHotelsSearchListProps,
|};

export class AllHotelsSearchList extends React.Component<Props> {
  componentDidMount = () => {
    Logger.LogEvent(Logger.Event.Displayed, Logger.Category.Ancillary, {
      type: 'Hotels',
      step: 'results',
    });
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
        <ScrollView>
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

export default createFragmentContainer(
  AllHotelsSearchList,
  graphql`
    fragment AllHotelsSearchList on HotelAvailabilityConnection {
      edges {
        node {
          id
          ...AllHotelsSearchRow
        }
      }
    }
  `,
);
