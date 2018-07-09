// @flow strict

import * as React from 'react';
import { PrivateApiRenderer, graphql } from '@kiwicom/mobile-relay';

import BookingDetailContext from '../../context/BookingDetailContext';
import FillTravelDocument from './FillTravelDocument';
import type { FillTravelDocumentQuery as RenderProps } from './__generated__/FillTravelDocumentContainerQuery.graphql';

export default class FillTravelDocumentContainer extends React.Component<{||}> {
  renderInner = (renderProps: RenderProps) => (
    <FillTravelDocument data={renderProps.node} />
  );

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          render={this.renderInner}
          query={graphql`
            query FillTravelDocumentContainerQuery($bookingId: ID!) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  ...FillTravelDocument
                }
              }
            }
          `}
          variables={{ bookingId }}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}
