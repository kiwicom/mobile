// @flow

import * as React from 'react';
import { graphql } from 'react-relay';
import { PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import PdfViewer from '@kiwicom/mobile-pdf';
import idx from 'idx';

import type { InvoiceQueryResponse } from './__generated__/InvoiceQuery.graphql';

type Props = {|
  bookingID: string,
|};

export default class Invoice extends React.Component<Props> {
  renderInnerComponent = (renderProps: InvoiceQueryResponse) => {
    const uri = idx(renderProps, _ => _.booking.assets.invoiceUrl);

    if (!uri) {
      return (
        <GeneralError
          errorMessage={<Translation id="mmb.invoices.not_available" />}
        />
      );
    }

    return (
      <PdfViewer
        source={{
          uri,
          cache: true, // no expiration - store as long as possible
        }}
      />
    );
  };

  render = () => (
    <PrivateApiRenderer
      render={this.renderInnerComponent}
      query={graphql`
        query InvoiceQuery($bookingId: ID!) {
          booking(id: $bookingId) {
            assets {
              invoiceUrl
            }
          }
        }
      `}
      variables={{
        bookingId: this.props.bookingID,
      }}
    />
  );
}
