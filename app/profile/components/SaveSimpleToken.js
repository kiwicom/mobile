// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextButton, TextInput } from '@kiwicom/mobile-shared';

type Props = {|
  +onSave: (simpleToken: string, bookingId: string) => void,
|};

type State = {|
  bookingId: string,
  simpleToken: string,
|};

export default class SaveSimpleToken extends React.Component<Props, State> {
  state = {
    bookingId: '',
    simpleToken: '',
  };

  onBookingIdChange = (bookingId: string) => {
    this.setState({ bookingId });
  };

  onSimpleTokenChange = (simpleToken: string) => {
    this.setState({ simpleToken });
  };

  onSave = () =>
    this.props.onSave(this.state.simpleToken, this.state.bookingId);

  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.onBookingIdChange}
          placeholder={<Translation passThrough="Booking id" />}
        />
        <TextInput
          onChangeText={this.onSimpleTokenChange}
          placeholder={<Translation passThrough="simple token" />}
        />

        <TextButton
          onPress={this.onSave}
          title={<Translation passThrough="Use simple login" />}
        />
      </View>
    );
  }
}
