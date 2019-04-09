// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  ButtonPopup,
  Slider,
  StyleSheet,
  SliderLabels,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { SafeAreaView } from 'react-navigation';

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
const convertScoreToSliderValue = (minScore: number | null) => {
  return minScore ? minScore - SLIDER_SHIFT : 0;
};

export default class ScorePopup extends React.Component<Props, State> {
  state = {
    sliderValue: 0,
  };

  static getDerivedStateFromProps = ({ minScore, isVisible }: Props) => {
    return isVisible
      ? null
      : {
          sliderValue: convertScoreToSliderValue(minScore),
        };
  };

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
    return labels[sliderValue];
  };

  convertSliderValueToScore = (value: number) => {
    return value ? value + SLIDER_SHIFT : null;
  };

  render() {
    return (
      <SafeAreaView>
        <ButtonPopup
          buttonTitle={
            <Translation id="hotels_search.filter.score_popup.save" />
          }
          onSave={this.onSave}
          onClose={this.props.onClose}
          isVisible={this.props.isVisible}
        >
          <Text style={styles.title}>
            <Translation id="hotels_search.filter.score_filter.rating" />
          </Text>
          <SliderLabels
            max={4}
            min={0}
            startLabel={this.renderLabel(this.state.sliderValue)}
            startValue={this.state.sliderValue}
          />
          <View style={styles.sliderContainer}>
            <Slider
              startValue={this.state.sliderValue}
              min={0}
              max={4}
              onChange={this.handleScoreChanged}
              snapped={true}
            />
          </View>
        </ButtonPopup>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: defaultTokens.colorHeading,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 15,
    paddingBottom: 10,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
});
