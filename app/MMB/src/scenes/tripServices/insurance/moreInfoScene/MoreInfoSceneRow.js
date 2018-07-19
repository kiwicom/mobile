// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { StyleSheet, Color, TextIcon, Text } from '@kiwicom/mobile-shared';

type RowTitle = React.Element<typeof Translation>;
type Cell = React.Element<typeof Translation | typeof TextIcon>;

type RowData = {|
  +title: RowTitle,
  +travelBasic: Cell,
  +travelPlus: Cell,
|};

type RowProps = {|
  +data: RowData,
  +index: number,
|};

const Row = (props: RowProps) => {
  const backgroundColor =
    props.index % 2 === 1 ? styles.wrapperBackground : null;
  const headerColor = props.index === 0 ? styles.headerColor : null;
  return (
    <View style={[styles.rowWrapper, backgroundColor]}>
      <View style={styles.cellWrapper}>
        <Text style={[styles.textBold, headerColor]}>{props.data.title}</Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={[styles.smallerFont, styles.textCentered, headerColor]}>
          {props.data.travelBasic}
        </Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={[styles.smallerFont, styles.textCentered, headerColor]}>
          {props.data.travelPlus}
        </Text>
      </View>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  wrapperBackground: {
    backgroundColor: Color.backgroundGray,
  },
  cellWrapper: {
    flex: 1,
    paddingStart: 4,
    paddingEnd: 4,
  },
  smallerFont: {
    fontSize: 10,
  },
  textBold: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  textCentered: {
    textAlign: 'center',
  },
  headerColor: {
    color: Color.ink.light,
    fontWeight: 'bold',
  },
});
