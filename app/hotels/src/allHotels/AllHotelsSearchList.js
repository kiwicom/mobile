// @flow strict

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';

type Props = {|
  +openSingleHotel: (id: string) => void,
  +data: AllHotelsSearchListProps,
|};

export const AllHotelsSearchList = (props: Props) => {
  const hotels = props.data || [];

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
    <React.Fragment>
      {hotels.map(hotel => (
        <AllHotelsSearchRow
          key={idx(hotel, _ => _.node.id)}
          data={hotel.node}
          openSingleHotel={props.openSingleHotel}
        />
      ))}
    </React.Fragment>
  );
};

export default createFragmentContainer(
  AllHotelsSearchList,
  graphql`
    fragment AllHotelsSearchList on HotelAvailabilityEdge @relay(plural: true) {
      node {
        id
        ...AllHotelsSearchRow
      }
      ...MapView
    }
  `,
);
