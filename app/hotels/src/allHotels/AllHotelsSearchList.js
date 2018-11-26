// @flow strict

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';
import { withHotelsContext, type HotelsContextState } from '../HotelsContext';

type Props = {|
  +data: AllHotelsSearchListProps | Array<?empty>,
  setHotelId: (id: string) => void,
|};

export class AllHotelsSearchList extends React.Component<Props> {
  componentDidMount() {
    const hotelId = this.props.data[0]?.hotelId;

    if (hotelId != null) {
      this.props.setHotelId(hotelId);
    }
  }

  render() {
    const hotels = this.props.data || [];

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
        {hotels.map((hotel, index) => (
          <AllHotelsSearchRow
            key={hotel?.id}
            data={hotel}
            testID={index === 0 ? 'firstHotelResult' : ''}
          />
        ))}
      </React.Fragment>
    );
  }
}

const select = ({ setHotelId }: HotelsContextState) => ({ setHotelId });

export default createFragmentContainer(
  withHotelsContext(select)(AllHotelsSearchList),
  graphql`
    fragment AllHotelsSearchList on AllHotelsInterface @relay(plural: true) {
      id
      ...AllHotelsSearchRow
      hotelId
    }
  `,
);
