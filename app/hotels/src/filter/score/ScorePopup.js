// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  ButtonPopup,
  Slider,
  StyleSheet,
  Translation,
  AdaptableBadge,
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

const labels = {
  '0': <Translation id="hotels_search.filter.score_filter.rating.any" />,
  '1': <Translation id="hotels_search.filter.score_filter.rating.6" />,
  '2': <Translation id="hotels_search.filter.score_filter.rating.7" />,
  '3': <Translation id="hotels_search.filter.score_filter.rating.8" />,
  '4': <Translation id="hotels_search.filter.score_filter.rating.9" />,
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
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              <Translation id="hotels_search.filter.score_filter.rating" />
            </Text>
            <AdaptableBadge
              translation={labels[this.state.sliderValue]}
              type="info"
              circled={true}
              style={styles.badge}
            />
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              startValue={this.state.sliderValue}
              min={0}
              max={4}
              onChange={this.handleScoreChanged}
              snapped={true}
              startLabel={labels[0]}
              endLabel={labels[4]}
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
    paddingBottom: 10,
    marginEnd: 8,
  },
  sliderContainer: {
    paddingHorizontal: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 7,
  },
});
