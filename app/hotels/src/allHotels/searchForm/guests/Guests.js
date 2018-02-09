// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Button, Color, StyleSheet } from '@kiwicom/react-native-app-shared';

import GuestsPopup from './GuestsPopup';
import type { RoomConfigurationType } from '../SearchParametersType';

type Props = {|
  guests: RoomConfigurationType,
  onChange: (guests: RoomConfigurationType) => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class Guests extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  handlePopupToggle = () =>
    this.setState(prevState => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));

  handleChange = (guests: RoomConfigurationType) => this.props.onChange(guests);

  render = () => {
    const { isPopupOpen } = this.state;
    const { guests } = this.props;
    const guestsCount = guests.adultsCount + guests.children.length;
    const title = `${guestsCount} Guest${guestsCount !== 1 ? 's' : ''}`;
    return (
      <View>
        <Button
          onPress={this.handlePopupToggle}
          title={title}
          styles={buttonStyles}
          icon={{
            name: 'people',
            color: Color.grey.$600,
          }}
        />
        <GuestsPopup
          guests={guests}
          onChange={this.handleChange}
          onClose={this.handlePopupToggle}
          isVisible={isPopupOpen}
        />
      </View>
    );
  };
}

const buttonStyles = StyleSheet.create({
  buttonWrapper: {
    elevation: 3, // Android only
    margin: 3, // needed in order to see elevation on Android devices
  },
  button: {
    backgroundColor: '#fff',
    android: {
      borderRadius: 2,
    },
    ios: {
      borderRadius: 0,
    },
  },
  buttonText: {
    color: Color.grey.$900,
    fontWeight: 'normal',
  },
  icon: {
    backgroundColor: '#fff',
    android: {
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
    },
    ios: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
});
