// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../../../context/BookingDetailContext';
import InsuranceSelectionScene from './InsuranceSelectionScene';
import type { InsuranceSelectionSceneQueryResponse } from './__generated__/InsuranceSelectionSceneContainerQuery.graphql';

export default class InsuranceSelectionSceneContainer extends React.Component<{}> {
  renderInnerComponent = (response: InsuranceSelectionSceneQueryResponse) => {
    return <InsuranceSelectionScene data={response.singleBooking} />;
  };

  render() {
    return (
      <BookingDetailContext.Consumer>
        {({ bookingId, authToken }) => (
          <PublicApiRenderer
            render={this.renderInnerComponent}
            query={graphql`
              query InsuranceSelectionSceneContainerQuery(
                $bookingId: Int!
                $authToken: String!
              ) {
                singleBooking(id: $bookingId, authToken: $authToken) {
                  ... on BookingInterface {
                    ...VariantButtons
                  }
                }
              }
            `}
            variables={{
              bookingId,
              authToken,
            }}
          />
        )}
      </BookingDetailContext.Consumer>
    );
  }
}
