// @flow

import * as React from 'react';
import { View } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { type OnLayout } from '../../types/Events';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +onChange: (number[]) => void,
  +min: number,
  +max: number,
  +startValue: number,
  +endValue?: number,
  +step?: number,
  +snapped?: boolean,
  +style?: Object,
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

  getMaxMinAndEnabled = () => {
    const { max, min } = this.props;

    if (
      max === min &&
      max === this.props.startValue &&
      max === this.props.endValue
    ) {
      // If all values are equal, expand max and min values by one
      // to make dot appear on the center and disable sliding.
      return {
        max: max + 1,
        min: min - 1,
        enabledOne: false,
        enabledTwo: false,
      };
    }

    return {
      max,
      min,
      enabledOne: true,
      enabledTwo: true,
    };
  };

  render() {
    const { max, min, enabledOne, enabledTwo } = this.getMaxMinAndEnabled();
    const values = [this.props.startValue];

    if (this.props.endValue) {
      values.push(this.props.endValue);
    }

    return (
      <View onLayout={this.onLayout} style={styles.sliderWrapper}>
        <MultiSlider
          values={values}
          min={min}
          max={max}
          snapped={this.props.snapped}
          allowOverlap={true}
          selectedStyle={styles.selected}
          sliderLength={this.state.width}
          touchDimensions={{
            height: 30,
            width: 30,
            borderRadius: 0,
            slipDisplacement: 500,
          }}
          unselectedStyle={styles.unselected}
          trackStyle={styles.track}
          markerStyle={styles.marker}
          pressedMarkerStyle={styles.marker}
          containerStyle={[styles.container, this.props.style]}
          onValuesChange={this.props.onChange}
          enabledOne={enabledOne}
          enabledTwo={enabledTwo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
  unselected: {
    backgroundColor: defaultTokens.paletteInkLighter,
  },
  track: {
    borderRadius: 5,
    height: 4,
  },
  marker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: defaultTokens.paletteWhite,
    borderWidth: 1,
    borderColor: defaultTokens.paletteInkLighter,
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    margin: 3, // necessary to see the Android elevation properly
    android: {
      elevation: 1,
    },
  },
  container: {
    justifyContent: 'center',
  },
});
