// @flow

import * as React from 'react';
import { View } from 'react-native';

import StarsPopup from './StarsPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Stars = number[];

type Props = {|
  stars: Stars,
  onChange: OnChangeFilterParams => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class StarsFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  static isActive = (stars: Stars): boolean => stars.length > 0;

  openPopup = () =>
    this.setState({
      isPopupOpen: true,
    });

  closePopup = (callback?: Function) =>
    this.setState(
      {
        isPopupOpen: false,
      },
      callback,
    );

  handleSave = (stars: number[]) =>
    this.closePopup(() =>
      this.props.onChange({
        starsRating: stars,
      }),
    );

  getTitle = (propsStars: number[]) => {
    // sort() tries to modify read only props in RN, works with clone
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
          onPress={this.openPopup}
        />
        <StarsPopup
          stars={this.props.stars}
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
        />
      </View>
    );
  }
}
