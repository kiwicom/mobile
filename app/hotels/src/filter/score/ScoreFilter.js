// @flow

import * as React from 'react';
import { View } from 'react-native';

import ScorePopup from './ScorePopup';
import FilterButton from '../FilterButton';
import type { OnChangeFilterParams } from '../FilterParametersType';

type Props = {|
  minScore: number | null,
  onChange: OnChangeFilterParams => void,
|};

type State = {|
  isPopupOpen: boolean,
|};

const ratingLabels = {
  '6': 'pleasant 6+',
  '7': 'good 7+',
  '8': 'very good 8+',
  '9': 'superb 9+',
};

export default class ScoreFilter extends React.Component<Props, State> {
  state = {
    isPopupOpen: false,
  };

  static isActive = (minScore: number | null): boolean => minScore !== null;

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

  handleSave = (minScore: number | null) =>
    this.closePopup(() => this.props.onChange({ minScore }));

  getTitle = (minScore: number | null) =>
    minScore ? ratingLabels[minScore] : 'rating';

  render() {
    const { minScore } = this.props;
    return (
      <View>
        <FilterButton
          title={this.getTitle(minScore)}
          icon={{ name: 'thumb-up', color: '#fff' }}
          isActive={this.constructor.isActive(minScore)}
          onPress={this.openPopup}
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
