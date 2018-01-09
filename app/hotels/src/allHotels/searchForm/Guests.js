// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Popup,
  Button,
  Color,
  NumberControl,
} from '@kiwicom/react-native-app-common';

import type { RoomConfigurationType } from './SearchParametersType';

type Props = {|
  guests: RoomConfigurationType,
  onSave: (guests: RoomConfigurationType) => void,
|};

type State = {|
  guests: RoomConfigurationType,
  popupGuests: RoomConfigurationType,
  isPopupOpen: boolean,
|};

export default class Guests extends React.Component<Props, State> {
  state = {
    guests: this.props.guests,
    popupGuests: this.props.guests,
    isPopupOpen: false,
  };

  componentWillReceiveProps = ({ guests }: Props) =>
    this.setState({ guests, popupGuests: guests });

  handlePopupToggle = () =>
    this.setState(prevState => ({
      isPopupOpen: !prevState.isPopupOpen,
      popupGuests: prevState.guests,
    }));

  handleSave = () => this.props.onSave(this.state.popupGuests);

  handleAdultChange = (adultsCount: number) =>
    this.setState(prevState => ({
      popupGuests: {
        adultsCount,
        children: prevState.popupGuests.children,
      },
    }));

  handleChildrenChange = () => {
    // TODO!
  };

  render = () => {
    const { isPopupOpen, popupGuests, guests } = this.state;
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
          }}
        />
        <Popup
          onSave={this.handleSave}
          onClose={this.handlePopupToggle}
          isVisible={isPopupOpen}
        >
          <NumberControl
            label="Adult"
            number={popupGuests.adultsCount}
            min={1}
            max={30}
            style={{ marginBottom: 20 }}
            icon="person"
            onChange={this.handleAdultChange}
          />
          <NumberControl
            label="Infant"
            number={popupGuests.children.length}
            min={0}
            max={10}
            icon="child-friendly"
            onChange={this.handleChildrenChange}
          />
        </Popup>
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
