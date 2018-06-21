// @flow strict

import * as React from 'react';
import { LayoutSingleColumn } from '@kiwicom/mobile-shared';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import DestinationImage from './DestinationImage';
import TripInfo from '../../../components/header/TripInfo';
import BookingDetailContext from '../../../context/BookingDetailContext';
import type { InsuranceOverviewQueryResponse } from './__generated__/InsuranceOverviewQuery.graphql';

function InsuranceOverview(response: InsuranceOverviewQueryResponse) {
  return (
    <LayoutSingleColumn>
      <DestinationImage data={response.node} />
      <TripInfo data={response.node} />
    </LayoutSingleColumn>
  );
}

export default function InsuranceOverviewContainer() {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          render={InsuranceOverview}
          query={graphql`
            query InsuranceOverviewQuery($bookingId: ID!) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  ...DestinationImage
                  ...TripInfo
                }
              }
            }
          `}
          variables={{
            bookingId: bookingId,
          }}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
