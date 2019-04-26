// @flow

import * as React from 'react';

type Props = {|
  +labelEndWidth: number,
  +labelStartAtMax: boolean,
  +labelStartWidth: number,
  +paddingLeft: number,
  +paddingRight: number,
  +props: any,
  +width: number,
  +setPaddingLeft: number => void,
  +setLabelStartAtMax: boolean => void,
  +setPaddingRight: number => void,
  +min: number,
  +max: number,
  +endValue: ?number,
  +startValue: number,
|};

export default function useCalculateSliderPositions({
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
  min,
  max,
  endValue,
  startValue,
}: Props) {
  React.useEffect(() => {
    function getOffset(input: number) {
      let val;

      if (input > max) {
        val = max;
      } else if (input < min) {
        val = min;
      } else {
        val = input;
      }
      return Math.round((val / (max - min)) * width);
    }

    function calculateMarkerEndOffset(): number {
      if (!endValue) {
        return 0;
      }

      const offset = getOffset(endValue);
      return Math.round(width - offset);
    }

    function calculateMarkerStartOffset(): number {
      return getOffset(startValue);
    }

    function isBelowMaxPadding(value: number, gap: number = 0): boolean {
      const maxPadding = getMaxPadding(gap);
      return value + gap < maxPadding;
    }

    function setPaddingForOneLabel(): void {
      const startLabelOffset = getStartLabelOffset();
      const hasOffsetChanged = paddingLeft !== startLabelOffset;

      if (isBelowMaxPadding(startLabelOffset)) {
        if (hasOffsetChanged) {
          setPaddingLeft(startLabelOffset);
        }

        if (labelStartAtMax) {
          setLabelStartAtMax(false);
        }
      } else if (labelStartAtMax === false) {
        setLabelStartAtMax(true);
      }
    }

    function getMaxPadding(gap: number): number {
      return Math.floor(width - labelStartWidth - labelEndWidth - gap);
    }

    function getStartLabelOffset(): number {
      const startMarkerOffset = calculateMarkerStartOffset();
      const startLabelHalf = labelStartWidth / 2;

      return startMarkerOffset < startLabelHalf
        ? 0
        : startMarkerOffset - startLabelHalf;
    }

    function setPaddingForTwoLabels(): void {
      const startLabelOffset = getStartLabelOffset();
      const endMarkerOffset = calculateMarkerEndOffset();
      const endLabelHalf = labelEndWidth / 2;
      const endLabelOffset =
        endMarkerOffset < endLabelHalf ? 0 : endMarkerOffset - endLabelHalf;

      const hasOffsetChanged =
        paddingLeft !== startLabelOffset || paddingRight !== endLabelOffset;

      if (
        isBelowMaxPadding(startLabelOffset + endLabelOffset, 10) &&
        hasOffsetChanged
      ) {
        setPaddingLeft(startLabelOffset);
        setPaddingRight(endLabelOffset);
      }
    }

    if (props.endValue) {
      setPaddingForTwoLabels();
    } else {
      setPaddingForOneLabel();
    }
  }, [
    endValue,
    labelEndWidth,
    labelStartAtMax,
    labelStartWidth,
    max,
    min,
    paddingLeft,
    paddingRight,
    props,
    setLabelStartAtMax,
    setPaddingLeft,
    setPaddingRight,
    startValue,
    width,
  ]);
}
