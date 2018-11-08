// @flow strict

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { DateFormatter, Translation } from '@kiwicom/mobile-localization';
import { GeneralError } from '@kiwicom/mobile-shared';

import { withHotelsContext } from '../HotelsContext';
import type { Stay22HotelsSearchQueryResponse } from './__generated__/Stay22HotelsSearchQuery.graphql';
import Stay22PaginationContainer from './Stay22PaginationContainer';

type Props = {|
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +getGuestCount: () => number,
  +longitude: number | null,
  +latitude: number | null,
|};

export class Stay22HotelsSearch extends React.Component<Props> {
  renderAllHotelsSearchList = (
    propsFromRenderer: Stay22HotelsSearchQueryResponse,
  ) => {
    return <Stay22PaginationContainer data={propsFromRenderer} />;
  };

  render = () => {
    const { checkin, checkout, latitude, longitude, currency } = this.props;
    if (
      checkin === null ||
      checkout === null ||
      latitude === null ||
      longitude === null
    ) {
      return (
        <GeneralError
          testID="render-error"
          errorMessage={
            <Translation id="hotels_search.all_hotels_search.date_error" />
          }
        />
      );
    }
    return (
      <PublicApiRenderer
        query={graphql`
          query Stay22HotelsSearchQuery(
            $search: Stay22HotelsSearchInput!
            $first: Int
            $after: String
          ) {
            ...Stay22PaginationContainer
          }
        `}
        variables={{
          first: 50,
          search: {
            latitude,
            longitude,
            checkin: DateFormatter(checkin).formatForMachine(),
            checkout: DateFormatter(checkout).formatForMachine(),
            guests: this.props.getGuestCount(),
            currency,
          },
        }}
        render={this.renderAllHotelsSearchList}
      />
    );
  };
}

export default withHotelsContext(state => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  getGuestCount: state.getGuestCount,
  latitude: state.latitude,
  longitude: state.longitude,
}))(Stay22HotelsSearch);
