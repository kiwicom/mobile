// @flow

import * as React from 'react';
import {
  StyleSheet,
  Icon,
  Color,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import RenderAlert from './RenderAlert';

type Props = {|
  +type: 'danger' | 'warning' | 'success',
  +title: React.Element<typeof Translation>,
  +children?: React.Node,
  +titleStyle?: StylePropType,
|};

const ICON_SIZE = 17;

export default function Alert(props: Props) {
  switch (props.type) {
    case 'danger':
      return (
        <RenderAlert
          icon={<Icon name="warning" size={ICON_SIZE} color={RED} />}
          title={props.title}
          titleStyle={[styles.titleDanger, props.titleStyle]}
          containerStyle={styles.containerDanger}
        >
          {props.children}
        </RenderAlert>
      );
    case 'warning':
      return (
        <RenderAlert
          icon={<Icon name="warning" size={ICON_SIZE} color="#eb9d08" />}
          title={props.title}
          titleStyle={[styles.titleWarning, props.titleStyle]}
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
              size={ICON_SIZE}
              name="error-outline"
              color={Color.green.normal}
              style={styles.successIcon}
            />
          }
          title={props.title}
          titleStyle={[styles.titleSuccess, props.titleStyle]}
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
  containerDanger: {
    backgroundColor: 'rgba(208, 2, 27, 0.15)',
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
  titleDanger: {
    color: RED,
  },
});
