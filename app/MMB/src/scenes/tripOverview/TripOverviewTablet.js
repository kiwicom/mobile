// @flow strict

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import TripOverview from './TripOverview';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripOverviewTabletQueryResponse } from './__generated__/TripOverviewTabletQuery.graphql';

function TripOverviewTablet(rendererProps: TripOverviewTabletQueryResponse) {
  return <TripOverview data={rendererProps.singleBooking} />;
}

export default function TripOverviewTabletContainer() {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          query={graphql`
            query TripOverviewTabletQuery($id: Int!, $authToken: String!) {
              singleBooking(id: $id, authToken: $authToken) {
                ... on BookingInterface {
                  ...TripOverview
                }
              }
            }
          `}
          variables={{ id: bookingId, authToken }}
          render={TripOverviewTablet}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
