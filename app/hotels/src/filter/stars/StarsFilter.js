// @flow

import * as React from 'react';
import { View } from 'react-native';

import StarsPopup from './StarsPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Stars = number[];

type Props = {
  stars: Stars,
  onChange: OnChangeFilterParams => void,
};

type State = {|
  isPopupOpen: boolean,
|};

export default class StarsFilter extends React.Component<Props, State> {
  static isActive = (stars: Stars): boolean => stars.length > 0;

  mounted = true;
  state = {
    isPopupOpen: false,
  };

  componentWillUnmount = () => {
    this.mounted = false;
  };

  handlePopupToggle = () => {
    if (!this.mounted) {
      return;
    }

    this.setState(state => ({
      isPopupOpen: !state.isPopupOpen,
    }));
  };

  handleSave = (stars: number[]) => this.props.onChange({ starsRating: stars });

  getTitle = (propsStars: number[]) => {
    // sort() tries to modify read only props in RN, work with clone.
    const stars = [...propsStars];
    return stars.length
      ? stars
          .sort()
          .map(star => (star === 0 ? 'unrated' : star))
          .join(',')
      : 'stars';
  };

  render() {
    return (
      <View>
        <FilterButton
          title={this.getTitle(this.props.stars)}
          icon={{ name: 'star', color: '#fff' }}
          isActive={this.constructor.isActive(this.props.stars)}
          onPress={this.handlePopupToggle}
        />
        <StarsPopup
          stars={this.props.stars}
          isVisible={this.state.isPopupOpen}
          onClose={this.handlePopupToggle}
          onSave={this.handleSave}
        />
      </View>
    );
  }
}
