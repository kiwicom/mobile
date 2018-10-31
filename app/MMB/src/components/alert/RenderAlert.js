// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  type StylePropType,
  TextIcon,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  containerStyle: StylePropType,
  titleStyle: StylePropType,
  icon: React.Element<typeof TextIcon>,
  title: React.Element<typeof Translation>,
  children?: React.Node,
|};

const RenderAlert = (props: Props) => (
  <View style={[styles.container, props.containerStyle]}>
    <View style={styles.iconContainer}>{props.icon}</View>
    <View>
      <Text style={[styles.titleText, props.titleStyle]}>{props.title}</Text>
      {props.children && <View style={styles.body}>{props.children}</View>}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginEnd: 12,
  },
  titleText: {
    fontSize: 12,
  },
  body: {
    marginTop: 5,
  },
});

export default RenderAlert;
