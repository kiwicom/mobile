// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { ScrollView } from 'react-native';

import AllHotelsSearchRow from './AllHotelsSearchRow';

import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';

type Props = {|
  onGoToSingleHotel: () => void,
  data: AllHotelsSearchListProps,
|};

function AllHotelsSearchList(combinedProps: Props) {
  const hotels = idx(combinedProps, _ => _.data.edges) || []; // TODO: render 404 page instead of nothing
  return (
    <ScrollView>
      {hotels.map(edge => {
        if (edge) {
          const { node: hotel } = edge;
          return (
            <AllHotelsSearchRow
              data={hotel}
              onGoToSingleHotel={combinedProps.onGoToSingleHotel}
              key={hotel && hotel.id}
            />
          );
        }
      })}
    </ScrollView>
  );
}

export default createFragmentContainer(
  AllHotelsSearchList,
  graphql`
    fragment AllHotelsSearchList on HotelConnection {
      edges {
        node {
          id
          ...AllHotelsSearchRow
        }
      }
    }
  `,
);
