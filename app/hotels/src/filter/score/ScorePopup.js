// @flow

import * as React from 'react';
import { Text, ButtonPopup, Slider } from '@kiwicom/react-native-app-shared';
import { Translation } from '@kiwicom/react-native-app-localization';

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
const convertScoreToSliderValue = (minScore: number | null) =>
  minScore ? minScore - SLIDER_SHIFT : 0;

export default class ScorePopup extends React.Component<Props, State> {
  state = {
    sliderValue: 0,
  };

  static getDerivedStateFromProps = ({ minScore }: Props) => ({
    sliderValue: convertScoreToSliderValue(minScore),
  });

  handleScoreChanged = ([minScore]: number[]) =>
    this.setState({ sliderValue: minScore });

  onSave = () =>
    this.props.onSave(this.convertSliderValueToScore(this.state.sliderValue));

  renderLabel = (sliderValue: number) => {
    const labels = [
      <Translation
        key="any"
        id="hotels_search.filter.score_filter.rating.any"
      />,
      <Translation key="6" id="hotels_search.filter.score_filter.rating.6" />,
      <Translation key="7" id="hotels_search.filter.score_filter.rating.7" />,
      <Translation key="8" id="hotels_search.filter.score_filter.rating.8" />,
      <Translation key="9" id="hotels_search.filter.score_filter.rating.9" />,
    ];
    return (
      <Text>
        <Translation id="hotels_search.filter.score_popup.title" />
        <Translation passThrough=" " />
        {labels[sliderValue]}
      </Text>
    );
  };

  convertSliderValueToScore = (value: number) =>
    value ? value + SLIDER_SHIFT : null;

  render = () => (
    <ButtonPopup
      buttonTitle={<Translation id="hotels_search.filter.score_popup.save" />}
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
        snapped={true}
      />
    </ButtonPopup>
  );
}
