// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  StyleSheet,
  Icon,
  Color,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type CommonProps = {|
  title: React.Element<typeof Translation>,
  children: React.Node,
|};

type Props = {|
  type: 'danger' | 'warning' | 'success',
  ...CommonProps,
|};

type RenderAlertProps = {|
  containerStyle: StylePropType,
  titleStyle: StylePropType,
  icon: React.Element<typeof Icon>,
  ...CommonProps,
|};

const RenderAlert = (props: RenderAlertProps) => (
  <View style={[styles.container, props.containerStyle]}>
    <View style={styles.iconContainer}>{props.icon}</View>
    <View>
      <Text style={[styles.titleText, props.titleStyle]}>{props.title}</Text>
      <View style={styles.body}>{props.children}</View>
    </View>
  </View>
);

export default function Alert(props: Props) {
  switch (props.type) {
    case 'danger':
      return (
        <RenderAlert
          icon={<Icon name="warning" size={18} color={RED} />}
          title={props.title}
          titleStyle={styles.titleDanger}
          containerStyle={styles.containerDanger}
        >
          {props.children}
        </RenderAlert>
      );
    case 'warning':
      return (
        <RenderAlert
          icon={<Icon name="warning" size={18} color="#eb9d08" />}
          title={props.title}
          titleStyle={styles.titleWarning}
          containerStyle={styles.containerWarning}
        >
          {props.children}
        </RenderAlert>
      );
    case 'success':
      return (
        <RenderAlert
          icon={
            <Icon
              name="error-outline"
              size={18}
              color={Color.green.normal}
              style={styles.successIcon}
            />
          }
          title={props.title}
          titleStyle={styles.titleSuccess}
          containerStyle={styles.containerSuccess}
        >
          {props.children}
        </RenderAlert>
      );
    default:
      return null;
  }
}

const RED = '#d0021b';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    flexDirection: 'row',
  },
  containerDanger: {
    backgroundColor: 'rgba(208, 2, 27, 0.15)',
  },
  iconContainer: {
    marginRight: 12,
  },
  titleText: {
    fontSize: 12,
  },
  titleDanger: {
    color: RED,
  },
  body: {
    marginTop: 5,
  },
  successIcon: {
    transform: [{ rotate: '180deg' }],
  },
  containerSuccess: {
    backgroundColor: Color.green.light,
  },
  titleSuccess: {
    color: Color.green.dark,
  },
  containerWarning: {
    backgroundColor: 'rgba(235, 157, 8, 0.15)',
  },
  titleWarning: {
    color: '#eb9d08',
  },
});
