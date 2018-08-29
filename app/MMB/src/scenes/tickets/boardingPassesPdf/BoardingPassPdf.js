// @flow

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { PdfViewAndStore } from '@kiwicom/mobile-pdf';

import BookingDetailContext from '../../../context/BookingDetailContext';

export const getPdfFilenameFromUrl = (url: string, bookingId: number) => {
  const filename = url.slice(url.lastIndexOf('/') + 1);
  const isPdf = filename.includes('.pdf');
  if (!isPdf) {
    return null;
  }
  return `${filename.slice(
    0,
    filename.indexOf('.pdf'),
  )}-bookingId:${bookingId}`;
};

type PropsWithContext = {|
  ...Props,
  +bookingId: number,
|};

export const BoardingPassPdf = ({
  boardingPassUrl,
  bookingId,
}: PropsWithContext) => {
  if (boardingPassUrl) {
    const filename = getPdfFilenameFromUrl(boardingPassUrl, bookingId);

    if (filename) {
      return (
        <PdfViewAndStore
          fileName={`boardingPasses/${filename}.pdf`}
          url={boardingPassUrl}
        />
      );
    }
  }
  return (
    <GeneralError
      errorMessage={<Translation id="mmb.boarding_passes.not_available" />}
    />
  );
};

type Props = {|
  +boardingPassUrl: ?string,
|};

export default function BoardingPassPdfWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => <BoardingPassPdf {...props} bookingId={bookingId} />}
    </BookingDetailContext.Consumer>
  );
}
