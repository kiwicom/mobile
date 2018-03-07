// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon, Color } from '@kiwicom/react-native-app-shared';

import StarsPopup from './StarsPopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Stars = number[];

type Props = {|
  stars: Stars,
  onChange: OnChangeFilterParams => void,
  isActive: boolean,
|};

type State = {|
  isPopupOpen: boolean,
|};

export default class StarsFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

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

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.handleSave([]);
    } else {
      this.openPopup();
    }
  };

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
          icon={<Icon name="star" size={18} color={Color.white} />}
          isActive={this.props.isActive}
          onPress={this.filterButtonClicked}
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
