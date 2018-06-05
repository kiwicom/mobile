// @flow

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import PdfViewer from '@kiwicom/mobile-pdf';

type Props = {|
  +ticketUrl: ?string,
|};

export default function EticketPdf({ ticketUrl }: Props) {
  if (!ticketUrl) {
    return (
      <GeneralError
        errorMessage={<Translation id="mmb.tickets.not_available" />}
      />
    );
  }

  return (
    <PdfViewer
      source={{
        uri: ticketUrl,
        cache: true, // no expiration - store as long as possible
      }}
    />
  );
}
