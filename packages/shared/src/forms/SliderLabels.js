// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

import type { OnLayout } from '../../types/Events';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import Price from '../Price';
import type { TranslationType } from '../../types/Translation';

type Props = {|
  +startLabel: TranslationType | React.Element<typeof Price>,
  +startValue: number,
  +endLabel?: TranslationType | React.Element<typeof Price>,
  +endValue?: number,
  +max: number,
  +min: number,
|};

const LABEL_MARGIN = parseInt(defaultTokens.spaceXSmall, 10);

export default function SliderLabels(props: Props) {
  const [width, setWidth] = React.useState(0);
  const [labelStartWidth, setLabelStartWidth] = React.useState(0);
  const [labelEndWidth, setLabelEndWidth] = React.useState(0);
  const [paddingLeft, setPaddingLeft] = React.useState(0);
  const [paddingRight, setPaddingRight] = React.useState(0);

  React.useEffect(() => {
    const maxOffsetLeft =
      width - labelStartWidth - labelEndWidth - LABEL_MARGIN + paddingRight;
    const offsetLeft = Math.max(
      (props.startValue / props.max) * width - labelStartWidth / 2,
      0,
    );
    setPaddingLeft(Math.min(maxOffsetLeft, offsetLeft));
  }, [props.startValue, labelStartWidth]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (props.endValue != null) {
      const maxOffsetRight =
        (width - labelEndWidth - labelStartWidth - LABEL_MARGIN - paddingLeft) *
        -1;
      const offsetRight = Math.min(
        (props.endValue / props.max) * width - width + labelEndWidth / 2,
        0,
      );

      setPaddingRight(Math.max(maxOffsetRight, offsetRight));
    }
  }, [props.endValue, labelEndWidth]); // eslint-disable-line react-hooks/exhaustive-deps

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
      style={styles.sliderLabels}
      onLayout={saveFullWidth}
      testID="sliderLabelsContainer"
    >
      <View
        onLayout={saveLabelStartWidth}
        style={{
          transform: [{ translateX: paddingLeft }],
        }}
        testID="startLabelContainer"
      >
        <Text style={styles.label}>{props.startLabel}</Text>
      </View>
      {props.endLabel && (
        <View
          onLayout={saveLabelEndWidth}
          style={{
            transform: [{ translateX: paddingRight }],
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
  label: {
    fontSize: 14,
    color: defaultTokens.paletteBlueNormal,
  },
});
