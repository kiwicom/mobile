// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TimelineDeparture from './TimelineDeparture';
import TimelineArrival from './TimelineArrival';
import type { Timeline as TimelineDataType } from './__generated__/Timeline.graphql';

const lineWidth = 2;
const circleSize = 12;

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

    children.push(<TimelineDeparture key={index} data={leg.departure} />);
    children.push(<TimelineArrival key={index} data={leg.arrival} />);
  });

  return children.map((child, index) => {
    const isLast = children.length === index + 1;
    const isOdd = index & 1;
    const itemWrapperStyle = {};

    if (!isLast) {
      itemWrapperStyle.borderColor = Color.ink.light;
      itemWrapperStyle.borderStartWidth = lineWidth;
    }

    if (isOdd) {
      itemWrapperStyle.borderColor = 'red'; // FIXME: this will require bigger refactoring due to RN limitations
    }

    return (
      <View key={index} style={styles.rowContainer}>
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
    marginStart: circleSize / 2 - lineWidth / 2,
    paddingStart: 15,
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
          ...TimelineDeparture
        }
        arrival {
          ...TimelineArrival
        }
      }
    }
  `,
);
