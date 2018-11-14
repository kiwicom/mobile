// @flow strict

import * as React from 'react';
import Share from 'react-native-share';
import { documentDir } from '@kiwicom/mobile-assets';
import type { NavigationType } from '@kiwicom/mobile-navigation';

import BoardingPassesPdf from './BoardingPassPdf';
import ShareButton from '../../../components/ShareButton';
import BookingDetailContext from '../../../context/BookingDetailContext';

type ShareButtonPropsWithContext = {|
  +boardingPassUrl: string,
  +bookingId: number,
  +flightNumber: string,
|};

class BoardingPassShareButton extends React.Component<ShareButtonPropsWithContext> {
  onPress = () => {
    this.sharePromise();
  };

  sharePromise = async () => {
    try {
      const boardingPassUrl = `${documentDir}/boardingPasses/${
        this.props.bookingId
      }/${this.props.flightNumber}.pdf`;

      await Share.open({ url: boardingPassUrl });
    } catch (err) {
      // No worries, user just canceled share
      return;
    }
  };

  render() {
    return <ShareButton onPress={this.onPress} />;
  }
}

type ShareButtonProps = {|
  +navigation?: NavigationType,
|};

export function BoardingPassShareButtonWithContext(props: ShareButtonProps) {
  const boardingPassUrl = props.navigation?.state.params.boardingPassUrl;
  const flightNumber = props.navigation?.state.params.flightNumber;

  if (boardingPassUrl == null || flightNumber == null) {
    return null;
  }

  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <BoardingPassShareButton
          boardingPassUrl={boardingPassUrl}
          bookingId={bookingId}
          flightNumber={flightNumber}
        />
      )}
    </BookingDetailContext.Consumer>
  );
}

type Props = {|
  +boardingPassUrl: ?string,
  +flightNumber: string,
|};

const BoardingPassesPdfScreen = ({ boardingPassUrl, flightNumber }: Props) => (
  <BoardingPassesPdf
    boardingPassUrl={boardingPassUrl}
    flightNumber={flightNumber}
  />
);

export default BoardingPassesPdfScreen;
