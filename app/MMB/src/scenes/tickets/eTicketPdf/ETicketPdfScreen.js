// @flow strict

import * as React from 'react';
import Share from 'react-native-share';
import { documentDir } from '@kiwicom/mobile-assets';

import ETicketPdf from './ETicketPdf';
import ShareButton from '../../../components/ShareButton';
import BookingDetailContext from '../../../context/BookingDetailContext';

type ShareButtonProps = {|
  +bookingId: string,
|};

class ETicketShareButton extends React.Component<ShareButtonProps> {
  onPress = () => {
    const eTicketPath = `${documentDir}/eTickets/${this.props.bookingId}.pdf`;
    Share.open({ url: eTicketPath });
  };

  render = () => <ShareButton onPress={this.onPress} />;
}

function ShareButtonWithContext() {
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

ETicketPdfScreen.navigationOptions = () => ({
  headerRight: <ShareButtonWithContext />,
});

export default ETicketPdfScreen;
