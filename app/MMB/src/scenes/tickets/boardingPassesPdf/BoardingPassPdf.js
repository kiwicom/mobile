// @flow

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { PdfViewAndStore } from '@kiwicom/mobile-pdf';

export const getPdfFilenameFromUrl = (url: string) => {
  const filename = url.slice(url.lastIndexOf('/') + 1);
  const isPdf = filename.includes('.pdf');
  if (!isPdf) {
    return null;
  }
  return filename.slice(0, filename.indexOf('.pdf'));
};

type Props = {|
  +boardingPassUrl: ?string,
|};

const BoardingPassPdf = ({ boardingPassUrl }: Props) => {
  if (boardingPassUrl) {
    const filename = getPdfFilenameFromUrl(boardingPassUrl);

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

export default BoardingPassPdf;
