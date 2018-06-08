// @flow

import * as React from 'react';
import { graphql, PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import PdfViewer from '@kiwicom/mobile-pdf';
import idx from 'idx';

import BookingDetailContext from '../context/BookingDetailContext';
import type { InvoiceQueryResponse } from './__generated__/InvoiceQuery.graphql';

export default class Invoice extends React.Component<{||}> {
  renderInnerComponent = (renderProps: InvoiceQueryResponse) => {
    const uri = idx(renderProps, _ => _.node.assets.invoiceUrl);

    if (!uri) {
      return (
        <GeneralError
          errorMessage={<Translation id="mmb.invoices.not_available" />}
        />
      );
    }

    return <PdfViewer uri={uri} />;
  };

  render = () => (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <PrivateApiRenderer
          render={this.renderInnerComponent}
          query={graphql`
            query InvoiceQuery($bookingId: ID!) {
              node(id: $bookingId) {
                ... on BookingInterface {
                  assets {
                    invoiceUrl
                  }
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
