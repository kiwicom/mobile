// @flow strict

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import PdfViewer from '@kiwicom/mobile-pdf';

import BookingDetailContext, {
  type State as BoookingDetailState,
} from '../context/BookingDetailContext';
import type { InvoiceQueryResponse } from './__generated__/InvoiceQuery.graphql';

export default class Invoice extends React.Component<{||}> {
  renderInnerComponent = (renderProps: InvoiceQueryResponse) => {
    const uri = renderProps.singleBooking?.assets?.invoiceUrl;

    if (uri == null) {
      return (
        <GeneralError
          errorMessage={<Translation id="mmb.invoices.not_available" />}
        />
      );
    }

    return <PdfViewer uri={uri} />;
  };

  renderContext = ({ bookingId, authToken }: BoookingDetailState) => (
    <PublicApiRenderer
      render={this.renderInnerComponent}
      query={graphql`
        query InvoiceQuery($bookingId: Int!, $authToken: String!) {
          singleBooking(id: $bookingId, authToken: $authToken) {
            ... on BookingInterface {
              assets {
                invoiceUrl
              }
            }
          }
        }
      `}
      variables={{
        bookingId,
        authToken,
      }}
    />
  );

  render() {
    return (
      <BookingDetailContext.Consumer>
        {this.renderContext}
      </BookingDetailContext.Consumer>
    );
  }
}
