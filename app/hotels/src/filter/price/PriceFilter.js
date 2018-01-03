// @flow

import * as React from 'react';
import { View } from 'react-native';

import PricePopup from './PricePopup';
import FilterButton from '../FilterButton';

type Props = {|
  min: number,
  max: number,
  start: number,
  end: number,
  currency: string,
  onChange: () => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class PriceFilter extends React.Component<Props, State> {
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
    const { min, max, start, end, currency } = this.props;
    return (
      <View>
        <FilterButton
          title="price"
          icon={{ name: 'attach-money' }}
          isActive={false}
          onPress={this.handlePopupToggle}
        />
        <PricePopup
          isVisible={this.state.isPopupOpen}
          onClose={this.handlePopupToggle}
          onSave={this.handleSave}
          min={min}
          max={max}
          start={start}
          end={end}
          currency={currency}
        />
      </View>
    );
  }
}
