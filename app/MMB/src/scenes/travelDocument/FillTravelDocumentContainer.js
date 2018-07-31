// @flow strict

import * as React from 'react';
import { PublicApiRenderer, graphql } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import FillTravelDocument from './FillTravelDocument';
import type { FillTravelDocumentQuery as RenderProps } from './__generated__/FillTravelDocumentContainerQuery.graphql';

export default class FillTravelDocumentContainer extends React.Component<{||}> {
  renderInner = (renderProps: RenderProps) => (
    <FillTravelDocument data={renderProps.singleBooking} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId, authToken }) => (
        <PublicApiRenderer
          render={this.renderInner}
          query={graphql`
            query FillTravelDocumentContainerQuery(
              $bookingId: Int!
              $authToken: String!
            ) {
              singleBooking(id: $bookingId, authToken: $authToken) {
                ... on BookingInterface {
                  ...FillTravelDocument
                }
              }
            }
          `}
          variables={{ bookingId, authToken }}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
