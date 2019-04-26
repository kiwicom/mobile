// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

import type { OnLayout } from '../../types/Events';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import Price from '../Price';
import type { TranslationType } from '../../types/Translation';
import useCalculateSliderPositions from './useCalculateSliderPositions';

type Props = {|
  +startLabel: TranslationType | React.Element<typeof Price>,
  +startValue: number,
  +endLabel?: TranslationType | React.Element<typeof Price>,
  +endValue?: number,
  +max: number,
  +min: number,
|};

export default function SliderLabels(props: Props) {
  const [width, setWidth] = React.useState(0);
  const [labelStartWidth, setLabelStartWidth] = React.useState(0);
  const [labelStartAtMax, setLabelStartAtMax] = React.useState(false);
  const [labelEndWidth, setLabelEndWidth] = React.useState(0);
  const [paddingLeft, setPaddingLeft] = React.useState(0);
  const [paddingRight, setPaddingRight] = React.useState(0);

  useCalculateSliderPositions({
    labelEndWidth,
    labelStartAtMax,
    labelStartWidth,
    paddingLeft,
    paddingRight,
    props,
    width,
    setPaddingLeft,
    setLabelStartAtMax,
    setPaddingRight,
    min: props.min,
    max: props.max,
    endValue: props.endValue,
    startValue: props.startValue,
  });

  function saveFullWidth(e: OnLayout) {
    setWidth(Math.floor(e.nativeEvent.layout.width));
  }

  function saveLabelStartWidth(e: OnLayout) {
    setLabelStartWidth(Math.floor(e.nativeEvent.layout.width));
  }

  function saveLabelEndWidth(e: OnLayout) {
    setLabelEndWidth(Math.floor(e.nativeEvent.layout.width));
  }

  return (
    <View
      style={[styles.sliderLabels, labelStartAtMax && styles.sliderLabelsEnd]}
      onLayout={saveFullWidth}
      testID="sliderLabelsContainer"
    >
      <View
        onLayout={saveLabelStartWidth}
        style={{
          transform: [{ translateX: labelStartAtMax ? 0 : paddingLeft }],
        }}
        testID="startLabelContainer"
      >
        <Text style={styles.label}>{props.startLabel}</Text>
      </View>
      {props.endLabel && (
        <View
          onLayout={saveLabelEndWidth}
          style={{
            transform: [{ translateX: -paddingRight }],
          }}
          testID="endLabelContainer"
        >
          <Text style={styles.label}>{props.endLabel}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sliderLabels: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  sliderLabelsEnd: {
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 14,
    color: defaultTokens.paletteBlueNormal,
  },
});
