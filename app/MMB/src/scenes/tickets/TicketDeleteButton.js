// @flow strict

import * as React from 'react';
import { TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import RNFetchBlob from 'react-native-fetch-blob';
import { Alert } from '@kiwicom/mobile-localization';
import { withNavigationFocus } from 'react-navigation';

import BookingDetailContext from '../../context/BookingDetailContext';
import { getEticketPath } from './eTicketPdf/ETicketPdf';

type PropsWithContext = {|
  ...Props,
  +bookingId: number,
|};

type State = {|
  hasLocalFiles: boolean,
|};

export class TicketDeleteButton extends React.Component<
  PropsWithContext,
  State,
> {
  state = {
    hasLocalFiles: false,
  };

  componentDidMount = () => {
    this.hasLocalFiles();
  };

  componentDidUpdate = (prevProps: PropsWithContext) => {
    if (prevProps.isFocused === false && this.props.isFocused === true) {
      this.hasLocalFiles();
    }
  };

  onPress = () => {
    Alert.translatedAlert(
      null,
      {
        id: 'mmb.tickets.ticket_delete_button.confirm_delete',
      },
      [
        {
          text: { id: 'shared.button.delete' },
          onPress: this.deleteFiles,
          style: 'destructive',
        },
        {
          text: { id: 'shared.button.cancel' },
          style: 'cancel',
        },
      ],
    );
  };

  deleteFiles = () => {
    this.deleteFilesPromise();
  };

  deleteFilesPromise = async () => {
    // TODO: Delete boarding passes
    try {
      await RNFetchBlob.fs.unlink(this.getEticketPath());
      this.setState({ hasLocalFiles: false });
    } catch (error) {
      Alert.translatedAlert(null, {
        id: 'mmb.tickets.ticket_delete_button.delete_failed',
      });
      console.warn(error);
    }
  };

  hasLocalFiles = async () => {
    // TODO: Check for boardingPasses
    const existsEticket = await RNFetchBlob.fs.exists(this.getEticketPath());

    this.setState({ hasLocalFiles: existsEticket });
  };

  getEticketPath = () => {
    const { DocumentDir } = RNFetchBlob.fs.dirs;

    const eTicketPath = getEticketPath(this.props.bookingId);
    return `${DocumentDir}/${eTicketPath}`;
  };

  render = () => {
    if (this.state.hasLocalFiles === false) {
      return null;
    }
    return (
      <HeaderButton.Right onPress={this.onPress}>
        <TextIcon code="O" style={styles.icon} />
      </HeaderButton.Right>
    );
  };
}
type Props = {|
  +isFocused: boolean,
|};

function TicketDeleteButtonWithContext(props: Props) {
  return (
    <BookingDetailContext.Consumer>
      {({ bookingId }) => (
        <TicketDeleteButton {...props} bookingId={bookingId} />
      )}
    </BookingDetailContext.Consumer>
  );
}

export default withNavigationFocus(TicketDeleteButtonWithContext);

const styles = StyleSheet.create({
  icon: {
    fontSize: 21,
    color: defaultTokens.paletteProductNormal,
    alignSelf: 'flex-start',
  },
});
