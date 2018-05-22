// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import ScorePopup from './ScorePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  minScore: number | null,
  onChange: OnChangeFilterParams => void,
  isActive: boolean,
|};

type State = {|
  isPopupOpen: boolean,
|};

const ratingLabels = {
  '6': <Translation id="hotels_search.filter.score_filter.rating.6" />,
  '7': <Translation id="hotels_search.filter.score_filter.rating.7" />,
  '8': <Translation id="hotels_search.filter.score_filter.rating.8" />,
  '9': <Translation id="hotels_search.filter.score_filter.rating.9" />,
};

export default class ScoreFilter extends React.Component<Props, State> {
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

  filterButtonClicked = () => {
    if (this.props.isActive) {
      this.handleSave(null);
    } else {
      this.openPopup();
    }
  };

  handleSave = (minScore: number | null) =>
    this.closePopup(() => this.props.onChange({ minScore }));

  getTitle = (minScore: number | null) =>
    minScore ? (
      ratingLabels[minScore]
    ) : (
      <Translation id="hotels_search.filter.score_filter.rating" />
    );

  render() {
    const { minScore, isActive } = this.props;
    return (
      <View>
        <FilterButton
          title={this.getTitle(minScore)}
          icon={<Icon name="thumb-up" size={18} />}
          isActive={isActive}
          onPress={this.filterButtonClicked}
        />
        <ScorePopup
          isVisible={this.state.isPopupOpen}
          onClose={this.closePopup}
          onSave={this.handleSave}
          minScore={minScore}
        />
      </View>
    );
  }
}
