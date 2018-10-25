// @flow strict

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation } from '@kiwicom/mobile-localization';
import idx from 'idx';

import AllHotelsSearchRow from './AllHotelsSearchRow';
import type { AllHotelsSearchList as AllHotelsSearchListProps } from './__generated__/AllHotelsSearchList.graphql';
import SingleHotelContext from '../navigation/singleHotel/SingleHotelContext';

type PropsWithContext = {|
  ...Props,
  setHotelId: (id: string) => void,
|};

export class AllHotelsSearchList extends React.Component<PropsWithContext> {
  componentDidMount = () => {
    const hotelId = idx(this.props.data, _ => _[0].hotelId);
    if (hotelId != null) {
      this.props.setHotelId(hotelId);
    }
  };
  render = () => {
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
            key={idx(hotel, _ => _.id)}
            data={hotel}
            testID={index === 0 ? 'firstHotelResult' : ''}
          />
        ))}
      </React.Fragment>
    );
  };
}

type Props = {|
  +data: AllHotelsSearchListProps,
|};

const AllHotelsSearchListWithContext = (props: Props) => (
  <SingleHotelContext.Consumer>
    {({ setHotelId }) => (
      <AllHotelsSearchList {...props} setHotelId={setHotelId} />
    )}
  </SingleHotelContext.Consumer>
);

export default createFragmentContainer(
  AllHotelsSearchListWithContext,
  graphql`
    fragment AllHotelsSearchList on AllHotelsInterface @relay(plural: true) {
      id
      ...AllHotelsSearchRow
      hotelId
    }
  `,
);
