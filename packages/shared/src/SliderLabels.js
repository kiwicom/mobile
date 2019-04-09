// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

import type { OnLayout } from '../types/Events';
import Text from './Text';
import StyleSheet from './PlatformStyleSheet';
import Price from './Price';
import type { TranslationType } from '../types/Translation';

type Props = {|
  +startLabel: TranslationType | React.Element<typeof Price>,
  +startValue: number,
  +endLabel?: TranslationType | React.Element<typeof Price>,
  +endValue?: number,
  +max: number,
  +min: number,
|};

type State = {|
  width: number,
  labelStartWidth: number,
  labelStartAtMax: boolean,
  labelEndWidth: number,
  paddingLeft: number,
  paddingRight: number,
|};

export default class SliderLabels extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: 0,
      labelStartWidth: 0,
      labelStartAtMax: false,
      labelEndWidth: 0,
      paddingLeft: 0,
      paddingRight: 0,
    };
  }

  componentDidMount() {
    if (this.props.endValue) {
      requestAnimationFrame(this.setPaddingForTwoLabels);
    } else {
      requestAnimationFrame(this.setPaddingForOneLabel);
    }
  }

  getMaxPadding = (gap: number): number => {
    return Math.floor(
      this.state.width -
        this.state.labelStartWidth -
        this.state.labelEndWidth -
        gap,
    );
  };

  calculateMarkerStartOffset = (): number => {
    const { min, max, startValue } = this.props;

    let val;
    if (startValue > max) {
      val = max;
    } else if (startValue < min) {
      val = min;
    } else {
      val = startValue;
    }

    return Math.round((val / (max - min)) * this.state.width);
  };

  calculateMarkerEndOffset = (): number => {
    const { min, max, endValue } = this.props;

    if (!endValue) {
      return 0;
    }

    let val;
    if (endValue > max) {
      val = max;
    } else if (endValue < min) {
      val = min;
    } else {
      val = endValue;
    }

    const w = (val / (max - min)) * this.state.width;
    return Math.round(this.state.width - w);
  };

  getStartLabelOffset = (): number => {
    const startMarkerOffset = this.calculateMarkerStartOffset();
    const startLabelHalf = this.state.labelStartWidth / 2;

    return startMarkerOffset < startLabelHalf
      ? 0
      : startMarkerOffset - startLabelHalf;
  };

  isBelowMaxPadding = (value: number, gap: number = 0): boolean => {
    const maxPadding = this.getMaxPadding(gap);
    return value + gap < maxPadding;
  };

  setPaddingForTwoLabels = (): void => {
    const startLabelOffset = this.getStartLabelOffset();
    const endMarkerOffset = this.calculateMarkerEndOffset();
    const endLabelHalf = this.state.labelEndWidth / 2;
    const endLabelOffset =
      endMarkerOffset < endLabelHalf ? 0 : endMarkerOffset - endLabelHalf;

    const isBelowMaxPadding = this.isBelowMaxPadding(
      startLabelOffset + endLabelOffset,
      10,
    );

    const hasOffsetChanged =
      this.state.paddingLeft !== startLabelOffset ||
      this.state.paddingRight !== endLabelOffset;

    if (isBelowMaxPadding && hasOffsetChanged) {
      this.setState({
        paddingLeft: startLabelOffset,
        paddingRight: endLabelOffset,
      });
    }

    requestAnimationFrame(this.setPaddingForTwoLabels);
  };

  setPaddingForOneLabel = (): void => {
    const startLabelOffset = this.getStartLabelOffset();
    const isBelowMaxPadding = this.isBelowMaxPadding(startLabelOffset);
    const hasOffsetChanged = this.state.paddingLeft !== startLabelOffset;

    if (isBelowMaxPadding) {
      if (hasOffsetChanged) {
        this.setState({
          paddingLeft: startLabelOffset,
        });
      }

      if (this.state.labelStartAtMax) {
        this.setState({ labelStartAtMax: false });
      }
    } else if (this.state.labelStartAtMax === false) {
      this.setState({ labelStartAtMax: true });
    }

    requestAnimationFrame(this.setPaddingForOneLabel);
  };

  saveFullWidth = (e: OnLayout) => {
    this.setState({ width: Math.floor(e.nativeEvent.layout.width) });
  };

  saveLabelStartWidth = (e: OnLayout) => {
    this.setState({ labelStartWidth: Math.floor(e.nativeEvent.layout.width) });
  };

  saveLabelEndWidth = (e: OnLayout) => {
    this.setState({ labelEndWidth: Math.floor(e.nativeEvent.layout.width) });
  };

  render() {
    return (
      <View
        style={[
          styles.sliderLabels,
          {
            paddingLeft: this.state.paddingLeft,
            paddingRight: this.state.paddingRight,
            justifyContent: this.state.labelStartAtMax
              ? 'flex-end'
              : 'space-between',
          },
        ]}
        onLayout={this.saveFullWidth}
      >
        <View onLayout={this.saveLabelStartWidth}>
          <Text style={styles.label}>{this.props.startLabel}</Text>
        </View>
        {this.props.endLabel && (
          <View onLayout={this.saveLabelEndWidth}>
            <Text style={styles.label}>{this.props.endLabel}</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sliderLabels: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: defaultTokens.paletteBlueNormal,
  },
});
