// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import Dash from 'react-native-dash';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import TripStopOver from './TripStopOver';
import type { TimelineLegWrapper as TimelineLegWrapperType } from './__generated__/TimelineLegWrapper.graphql';

type Props = {|
  +children: React.Node,
  +shouldDrawDashedLine: boolean,
  +shouldDrawSolidLine: boolean,
  +color: string,
  +data: TimelineLegWrapperType,
|};

const lineWidth = 2;
const circleSize = 12;
const lineOffset = circleSize / 2 - lineWidth / 2;

function TimelineLegWrapper({
  children,
  shouldDrawDashedLine,
  shouldDrawSolidLine,
  color,
  data,
}: Props) {
  const itemWrapperStyle = {};

  if (shouldDrawSolidLine === true) {
    itemWrapperStyle.borderColor = defaultTokens.paletteInkLight;
    itemWrapperStyle.borderStartWidth = lineWidth;
  }

  return (
    <View style={styles.rowContainer}>
      {shouldDrawDashedLine === true && (
        // Dash component is a workaround for dashed border not supported in RN (https://github.com/facebook/react-native/blob/cb1bdf1e37236f5147ee5ef745573c0ced1b4f14/React/Views/RCTBorderDrawing.m#L394).
        // Please try to not use it very often. It's resource heavy.
        <Dash
          dashGap={lineWidth * 2}
          dashLength={lineWidth}
          dashThickness={lineWidth}
          dashColor={defaultTokens.paletteInkLight}
          style={styles.dashedLine}
        />
      )}

      <View style={[styles.itemWrapper, itemWrapperStyle]}>
        <View style={styles.item}>
          {children}
          {shouldDrawDashedLine === true && <TripStopOver data={data} />}
        </View>
      </View>
      <View style={[styles.circle, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    position: 'absolute',
    start: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTokens.paletteProductNormal,
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'column',
    borderStartWidth: 0,
    borderEndWidth: 0,
    marginStart: lineOffset,
    paddingStart: 15,
  },
  dashedLine: {
    width: 1,
    flexDirection: 'column',
    start: lineOffset,
  },
  item: {
    marginBottom: 20,
  },
});

export default createFragmentContainer(
  TimelineLegWrapper,
  graphql`
    fragment TimelineLegWrapper on Leg {
      ...TripStopOver
    }
  `,
);
