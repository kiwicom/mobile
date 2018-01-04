// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { OnLayout } from '@kiwicom/react-native-app-common';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import { POPUP_PADDING } from '../popup/Popup';
import Color from '../Color';

type Props = {|
  onChange: (number[]) => void,
  min: number,
  max: number,
  startValue: number,
  endValue?: number,
  step?: number,
  // snapped?: boolean, FIXME https://github.com/ptomasroos/react-native-multi-slider/issues/49
  style?: Object,
|};

type State = {|
  width: number,
|};

export default class Slider extends React.Component<Props, State> {
  state = {
    width: 0,
  };

  onLayout = ({ nativeEvent }: OnLayout) => {
    this.setState({ width: nativeEvent.layout.width });
  };

  render() {
    const values = [this.props.startValue];
    if (this.props.endValue) {
      values.push(this.props.endValue);
    }

    return (
      <View onLayout={this.onLayout} style={styles.sliderWrapper}>
        <MultiSlider
          values={values}
          min={this.props.min}
          max={this.props.max}
          allowOverlap
          selectedStyle={styles.selected}
          sliderLength={this.state.width - 2 * POPUP_PADDING}
          touchDimensions={{
            height: 30,
            width: 30,
            borderRadius: 0,
            slipDisplacement: 500,
          }}
          unselectedStyle={styles.unselected}
          trackStyle={styles.track}
          markerStyle={styles.marker}
          containerStyle={[styles.container, this.props.style]}
          onValuesChange={this.props.onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selected: { backgroundColor: Color.sun },
  unselected: { backgroundColor: Color.grey.$400 },
  track: { borderRadius: 5, height: 2 },
  marker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: Color.grey.$400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  container: {
    justifyContent: 'center',
  },
  sliderWrapper: {
    paddingHorizontal: POPUP_PADDING,
  },
});
