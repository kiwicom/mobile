// @flow

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { PdfViewAndStore } from '@kiwicom/mobile-pdf';

import BookingDetailContext from '../../../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  +bookingId: number,
|};

export const getEticketPath = (bookingId: number) =>
  `eTickets/${bookingId}.pdf`;

const ETicketPdf = ({ ticketUrl, bookingId }: PropsWithContext) => {
  if (!ticketUrl) {
    return (
      <GeneralError
        errorMessage={<Translation id="mmb.tickets.not_available" />}
      />
    );
  }

  return (
    <PdfViewAndStore fileName={getEticketPath(bookingId)} url={ticketUrl} />
  );
};

type Props = {|
  +ticketUrl: ?string,
|};

export default function ETicketPdfWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => <ETicketPdf {...props} bookingId={bookingId} />}
    </BookingDetailContext.Consumer>
  );
}
