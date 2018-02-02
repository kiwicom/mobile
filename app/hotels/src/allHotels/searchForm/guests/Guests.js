// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Color } from '@kiwicom/react-native-app-shared';

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
  button: {
    width: 85,
    backgroundColor: '#fff',
    borderRadius: 0,
    height: 40,
    paddingLeft: 0,
  },
  buttonText: {
    color: Color.grey.$900,
    fontWeight: 'normal',
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
