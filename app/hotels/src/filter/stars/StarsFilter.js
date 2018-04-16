// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon, Color } from '@kiwicom/mobile-shared';
import {
  Translation,
  TranslationFragment,
  type TranslationType,
} from '@kiwicom/mobile-localization';

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

  getTitle = (propsStars: number[]): TranslationType => {
    // sort() tries to modify read only props in RN, works with clone
    const stars = [...propsStars];

    if (stars.length === 0) {
      return <Translation id="hotels_search.filter.stars_filter.stars" />;
    }

    return (
      <TranslationFragment>
        {stars.includes(0) && (
          <TranslationFragment>
            <Translation id="hotels_search.filter.stars_filter.unrated" />
            {stars.length > 1 && <Translation passThrough="," />}
          </TranslationFragment>
        )}
        <Translation
          passThrough={stars
            .sort()
            .filter(star => star > 0)
            .join(',')}
        />
      </TranslationFragment>
    );
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
