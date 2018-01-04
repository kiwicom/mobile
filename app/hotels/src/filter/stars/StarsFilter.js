// @flow

import * as React from 'react';
import { View } from 'react-native';

import StarsPopup from './StarsPopup';
import FilterButton from '../FilterButton';

type Props = {|
  onChange: () => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class StarsFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  handlePopupToggle = () =>
    this.setState(state => ({
      isPopupOpen: !state.isPopupOpen,
    }));

  handleSave = () => {
    // TODO call onChange
  };

  render() {
    return (
      <View>
        <FilterButton
          title="stars"
          icon={{ name: 'star' }}
          isActive={false}
          onPress={this.handlePopupToggle}
        />
        <StarsPopup
          isVisible={this.state.isPopupOpen}
          onClose={this.handlePopupToggle}
          onSave={this.handleSave}
        />
      </View>
    );
  }
}
