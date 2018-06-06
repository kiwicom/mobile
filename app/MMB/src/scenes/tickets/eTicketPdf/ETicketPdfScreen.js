// @flow strict

import * as React from 'react';
import Share from 'react-native-share';

import ETicketPdf from './ETicketPdf';
import ShareButton from '../../../components/ShareButton';
import BookingDetailContext from '../../../context/BookingDetailContext';

type ShareButtonProps = {|
  +eTicketPath: string | null,
|};

class ETicketShareButton extends React.Component<ShareButtonProps> {
  onPress = () => {
    if (this.props.eTicketPath !== null) {
      const eTicketPath = `file:///${this.props.eTicketPath}`;
      Share.open({ url: eTicketPath });
    }
  };

  render = () => <ShareButton onPress={this.onPress} />;
}

function ShareButtonWithContext() {
  return (
    <BookingDetailContext.Consumer>
      {({ eTicketPath }) => <ETicketShareButton eTicketPath={eTicketPath} />}
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
