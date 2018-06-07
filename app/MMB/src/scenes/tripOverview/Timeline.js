// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import Dash from 'react-native-dash';
import idx from 'idx';

import TimelineDeparture from './TimelineDeparture';
import TimelineArrival from './TimelineArrival';
import type { Timeline as TimelineDataType } from './__generated__/Timeline.graphql';

const lineWidth = 2;
const circleSize = 12;
const lineOffset = circleSize / 2 - lineWidth / 2;

type Props = {|
  +children: React.Node[],
  +data: TimelineDataType,
|};

function Timeline(props: Props) {
  const children = [];
  const legs = idx(props, _ => _.data.legs) || [];

  legs.forEach((leg, index) => {
    if (!leg) {
      return;
    }

    children.push(
      <TimelineDeparture key={index} routeStop={leg.departure} legInfo={leg} />,
    );
    children.push(<TimelineArrival key={index} data={leg.arrival} />);
  });

  return children.map((child, index) => {
    const isLast = children.length === index + 1;
    const isOdd = index & 1;

    const shouldDrawSolidLine = !isLast && !isOdd;
    const shouldDrawDashedLine = isOdd && !isLast;

    const itemWrapperStyle = {};

    if (shouldDrawSolidLine === true) {
      itemWrapperStyle.borderColor = Color.ink.light;
      itemWrapperStyle.borderStartWidth = lineWidth;
    }

    return (
      <View key={index} style={styles.rowContainer}>
        {shouldDrawDashedLine === true && (
          // Dash component is a workaround for dashed border not supported in RN (https://github.com/facebook/react-native/blob/cb1bdf1e37236f5147ee5ef745573c0ced1b4f14/React/Views/RCTBorderDrawing.m#L394).
          // Please try to not use it very often. It's resource heavy.
          <Dash
            dashGap={lineWidth * 2}
            dashLength={lineWidth}
            dashThickness={lineWidth}
            dashColor={Color.ink.light}
            style={styles.dashedLine}
          />
        )}

        <View style={[styles.itemWrapper, itemWrapperStyle]}>
          <View style={styles.item}>{child}</View>
        </View>
        <View style={styles.circle} />
      </View>
    );
  });
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
    backgroundColor: Color.brand,
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
  Timeline,
  graphql`
    fragment Timeline on Trip {
      legs {
        departure {
          ...TimelineDeparture_routeStop
        }
        arrival {
          ...TimelineArrival
        }
        ...TimelineDeparture_legInfo
      }
    }
  `,
);
