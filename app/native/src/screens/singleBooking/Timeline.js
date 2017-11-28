// @flow

import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Color from '../../styles/Color';

const lineWidth = 1;
const circleSize = 10;

type Props = {
  componentsList: React.Node[],
};

export default class Timeline extends React.Component<Props> {
  render = () => (
    <FlatList
      style={styles.listView}
      data={this.props.componentsList}
      renderItem={({ item, index }) => {
        return this.renderItem(
          item,
          this.props.componentsList.length === index + 1,
        );
      }}
    />
  );

  renderItem = (item: React.Node, isLast: boolean) => {
    const lastItemStyle = {};
    if (!isLast) {
      lastItemStyle.borderColor = Color.brand;
      lastItemStyle.borderLeftWidth = lineWidth;
    }

    return (
      <View style={styles.rowContainer}>
        <View style={[styles.item, lastItemStyle]}>
          <View style={{ marginBottom: 20 }}>{item}</View>
        </View>
        <View style={styles.circle} />
      </View>
    );
  };
}

let styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
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
    left: lineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.brand,
  },
  item: {
    margin: -3,
    flex: 1,
    flexDirection: 'column',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: circleSize / 2 + lineWidth,
    paddingLeft: 15,
  },
});
