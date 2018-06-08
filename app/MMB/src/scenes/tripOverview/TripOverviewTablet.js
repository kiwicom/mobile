// @flow strict

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';

import TripOverview from './TripOverview';
import BookingDetailContext from '../../context/BookingDetailContext';
import type { TripOverviewTabletQueryResponse } from './__generated__/TripOverviewTabletQuery.graphql';

function TripOverviewTablet(rendererProps: TripOverviewTabletQueryResponse) {
  return <TripOverview data={rendererProps.node} />;
}

export default function TripOverviewTabletContainer() {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          query={graphql`
            query TripOverviewTabletQuery($id: ID!) {
              node(id: $id) {
                ... on BookingInterface {
                  ...TripOverview
                }
              }
            }
          `}
          variables={{ id: bookingId }}
          render={TripOverviewTablet}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
