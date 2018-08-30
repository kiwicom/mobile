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

export const BoardingPassPdf = ({
  boardingPassUrl,
  bookingId,
  flightNumber,
}: PropsWithContext) => {
  if (bookingId && flightNumber && boardingPassUrl) {
    return (
      <PdfViewAndStore
        fileName={`boardingPasses/${bookingId}/${flightNumber}.pdf`}
        url={boardingPassUrl}
      />
    );
  }

  return (
    <GeneralError
      errorMessage={<Translation id="mmb.boarding_passes.not_available" />}
    />
  );
};

type Props = {|
  +boardingPassUrl: ?string,
  +flightNumber: string,
|};

export default function BoardingPassPdfWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => <BoardingPassPdf {...props} bookingId={bookingId} />}
    </BookingDetailContext.Consumer>
  );
}
