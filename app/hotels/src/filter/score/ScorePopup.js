// @flow

import * as React from 'react';
import { Text, ButtonPopup, Slider } from '@kiwicom/react-native-app-shared';

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
      'any',
      'pleasant 6+',
      'good 7+',
      'very good 8+',
      'superb 9+',
    ];
    return <Text>Rating: {labels[sliderValue]}</Text>;
  };

  convertScoreToSliderValue = (minScore: number | null) =>
    minScore ? minScore - SLIDER_SHIFT : 0;

  convertSliderValueToScore = (value: number) =>
    value ? value + SLIDER_SHIFT : null;

  render = () => (
    <ButtonPopup
      buttonTitle="Save"
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
