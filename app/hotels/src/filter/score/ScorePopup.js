// @flow

import * as React from 'react';
import { Text, ButtonPopup, Slider } from '@kiwicom/react-native-app-shared';
import Translation from '@kiwicom/react-native-app-translations';

type Props = {|
  onClose: () => void,
  onSave: (minScore: number | null) => void,
  isVisible: boolean,
  minScore: number | null,
|};

type State = {|
  sliderValue: number,
|};

const SLIDER_SHIFT = 5;

export default class ScorePopup extends React.Component<Props, State> {
  state = {
    sliderValue: 0,
  };

  componentWillReceiveProps = ({ minScore }: Props) =>
    this.setState({ sliderValue: this.convertScoreToSliderValue(minScore) });

  handleScoreChanged = ([minScore]: number[]) =>
    this.setState({ sliderValue: minScore });

  onSave = () =>
    this.props.onSave(this.convertSliderValueToScore(this.state.sliderValue));

  renderLabel = (sliderValue: number) => {
    const labels = [
      <Translation key="any" id="HotelsSearch.Filter.ScoreFilter.Rating.Any" />,
      <Translation key="6" id="HotelsSearch.Filter.ScoreFilter.Rating.6" />,
      <Translation key="7" id="HotelsSearch.Filter.ScoreFilter.Rating.7" />,
      <Translation key="8" id="HotelsSearch.Filter.ScoreFilter.Rating.8" />,
      <Translation key="9" id="HotelsSearch.Filter.ScoreFilter.Rating.9" />,
    ];
    return <Text>Rating: {labels[sliderValue]}</Text>;
  };

  convertScoreToSliderValue = (minScore: number | null) =>
    minScore ? minScore - SLIDER_SHIFT : 0;

  convertSliderValueToScore = (value: number) =>
    value ? value + SLIDER_SHIFT : null;

  render = () => (
    <ButtonPopup
      buttonTitle={<Translation id="HotelsSearch.Filter.ScorePopup.Save" />}
      onSave={this.onSave}
      onClose={this.props.onClose}
      isVisible={this.props.isVisible}
    >
      <Text>{this.renderLabel(this.state.sliderValue)}</Text>
      <Slider
        startValue={this.state.sliderValue}
        min={0}
        max={4}
        onChange={this.handleScoreChanged}
        snapped
      />
    </ButtonPopup>
  );
}
