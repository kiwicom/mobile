// @flow strict

import * as React from 'react';
import { View, FlatList } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

const lineWidth = 2;
const circleSize = 12;

type Props = {|
  +data: React.Node[],
|};

export default class Timeline extends React.Component<Props> {
  renderItem = ({ item, index }: {| +item: React.Node, +index: boolean |}) => {
    const isLast = this.props.data.length === index + 1;
    const lastItemStyle = {};

    if (!isLast) {
      lastItemStyle.borderColor = Color.ink.light;
      lastItemStyle.borderStartWidth = lineWidth;
    }

    return (
      <View style={styles.rowContainer}>
        <View style={[styles.itemWrapper, lastItemStyle]}>
          <View style={styles.item}>{item}</View>
        </View>
        <View style={styles.circle} />
      </View>
    );
  };

  render = () => (
    <FlatList data={this.props.data} renderItem={this.renderItem} />
  );
}

let styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
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
