// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import { DateFormatter } from '@kiwicom/mobile-localization';

import { withHotelsContext } from '../HotelsContext';
import type { Stay22HotelsSearchQueryResponse } from './__generated__/Stay22HotelsSearchQuery.graphql';
import Stay22PaginationContainer from './Stay22PaginationContainer';
import HotelsSearch from './HotelsSearch';

type Props = {|
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +getGuestCount: () => number,
  +longitude: number | null,
  +latitude: number | null,
  +onClose: () => void,
|};

const query = graphql`
  query Stay22HotelsSearchQuery(
    $search: Stay22HotelsSearchInput!
    $first: Int
    $after: String
  ) {
    ...Stay22PaginationContainer
  }
`;

export class Stay22HotelsSearch extends React.Component<Props> {
  renderAllHotelsSearchList = (
    propsFromRenderer: Stay22HotelsSearchQueryResponse,
  ) => {
    return <Stay22PaginationContainer data={propsFromRenderer} />;
  };

  render() {
    const { checkin, checkout, latitude, longitude, currency } = this.props;
    const shouldRenderDateError =
      checkin === null ||
      checkout === null ||
      latitude === null ||
      longitude === null;

    return (
      <HotelsSearch
        onClose={this.props.onClose}
        shouldRenderDateError={shouldRenderDateError}
        query={query}
        variables={{
          first: 50,
          search: {
            latitude,
            longitude,
            checkin: DateFormatter(checkin ?? new Date()).formatForMachine(),
            checkout: DateFormatter(checkout ?? new Date()).formatForMachine(),
            guests: this.props.getGuestCount(),
            currency,
          },
        }}
        render={this.renderAllHotelsSearchList}
      />
    );
  }
}

export default withHotelsContext(state => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  getGuestCount: state.getGuestCount,
  latitude: state.latitude,
  longitude: state.longitude,
  onClose: state.closeHotels,
}))(Stay22HotelsSearch);
