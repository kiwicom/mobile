// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  TouchableItem,
  Color,
  StyleSheet,
  Icon,
  Text,
} from '@kiwicom/react-native-app-shared';

import GuestsPopup from './GuestsPopup';
import type { RoomConfigurationType } from '../SearchParametersType';

type Props = {|
  guests: RoomConfigurationType,
  onChange: (guests: RoomConfigurationType) => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export const ButtonTitle = ({
  adultsCount,
  childrenCount,
}: {
  adultsCount: number,
  childrenCount: number,
}) => {
  const childrenStyle = {
    color: Color.grey.$400,
  };
  return (
    <Text>
      <Text>{`${adultsCount} Adult${adultsCount === 1 ? '' : 's'}`}</Text>
      <Text style={childrenStyle}>
        {` ⋅ ${childrenCount} Child${childrenCount === 1 ? '' : 'ren'}`}
      </Text>
    </Text>
  );
};

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

    return (
      <View>
        <TouchableItem onPress={this.handlePopupToggle} activeOpacity={0.6}>
          <View style={buttonStyles.buttonWrapper}>
            <Icon
              name="people"
              size={20}
              color={Color.grey.$600}
              style={buttonStyles.icon}
            />
            <ButtonTitle
              adultsCount={guests.adultsCount}
              childrenCount={guests.children.length}
            />
          </View>
        </TouchableItem>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    elevation: 1, // Android only
    backgroundColor: '#fff',
    android: {
      borderRadius: 3,
      height: 48,
    },
    ios: {
      borderRadius: 0,
      height: 47,
    },
  },
  icon: {
    marginRight: 8,
  },
});
