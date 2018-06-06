// @flow

import * as React from 'react';
import { GeneralError } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import PdfViewer from '@kiwicom/mobile-pdf';

import BookingDetailContext from '../../../context/BookingDetailContext';

type PropsWithContext = {|
  ...Props,
  +setETicketPath: (path: string) => void,
|};

class ETicketPdf extends React.Component<PropsWithContext> {
  onPdfLoaded = (pages: number, path: string) => {
    this.props.setETicketPath(path);
  };

  render = () => {
    const { ticketUrl } = this.props;
    if (!ticketUrl) {
      return (
        <GeneralError
          errorMessage={<Translation id="mmb.tickets.not_available" />}
        />
      );
    }

    return <PdfViewer uri={ticketUrl} onLoad={this.onPdfLoaded} />;
  };
}

type Props = {|
  +ticketUrl: ?string,
|};

export default function ETicketPdfWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ actions: { setETicketPath } }) => (
        <ETicketPdf {...props} setETicketPath={setETicketPath} />
      )}
    </BookingDetailContext.Consumer>
  );
}
