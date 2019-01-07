// @flow strict

import * as React from 'react';
import Share from 'react-native-share';
import { documentDir } from '@kiwicom/mobile-assets';

import ETicketPdf, { getEticketPath } from './ETicketPdf';
import ShareButton from '../../../components/ShareButton';
import BookingDetailContext from '../../../context/BookingDetailContext';

type ShareButtonProps = {|
  +bookingId: number,
|};

class ETicketShareButton extends React.Component<ShareButtonProps> {
  onPress = () => {
    this.sharePromise();
  };

  sharePromise = async () => {
    try {
      const eTicketPath = `${documentDir}/${getEticketPath(
        this.props.bookingId,
      )}`;
      await Share.open({ url: eTicketPath });
    } catch (err) {
      // No worries, user just canceled share
    }
  };

  render() {
    return <ShareButton onPress={this.onPress} />;
  }
}

export function ShareButtonWithContext() {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => <ETicketShareButton bookingId={bookingId} />}
    </BookingDetailContext.Consumer>
  );
}

type Props = {|
  +ticketUrl: ?string,
|};

const ETicketPdfScreen = ({ ticketUrl }: Props) => (
  <ETicketPdf ticketUrl={ticketUrl} />
);

export default ETicketPdfScreen;
