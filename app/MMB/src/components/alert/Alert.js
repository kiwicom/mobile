// @flow strict

import * as React from 'react';
import {
  StyleSheet,
  TextIcon,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import RenderAlert from './RenderAlert';

type Props = {|
  +type: 'danger' | 'warning' | 'success',
  +title: React.Element<typeof Translation>,
  +children?: React.Node,
  +titleStyle?: StylePropType,
|};

export default function Alert(props: Props) {
  switch (props.type) {
    case 'danger':
      return (
        <RenderAlert
          icon={
            <TextIcon
              code="&#xe07F;"
              style={[styles.icon, styles.iconCritical]}
            />
          }
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
          icon={
            <TextIcon
              code="&#xe07F;"
              style={[styles.icon, styles.iconWarning]}
            />
          }
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
          icon={<TextIcon code="U" style={[styles.icon, styles.successIcon]} />}
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

const styles = StyleSheet.create({
  containerDanger: {
    backgroundColor: defaultTokens.backgroundAlertCritical,
  },
  successIcon: {
    color: defaultTokens.colorAlertIconSuccess,
  },
  containerSuccess: {
    backgroundColor: defaultTokens.backgroundAlertSuccess,
  },
  titleSuccess: {
    color: defaultTokens.colorTextAlertSuccess,
  },
  containerWarning: {
    backgroundColor: defaultTokens.backgroundAlertWarning,
  },
  titleWarning: {
    color: defaultTokens.colorTextAlertWarning,
  },
  titleDanger: {
    color: defaultTokens.colorTextAlertCritical,
  },
  icon: {
    fontSize: 17,
  },
  iconWarning: {
    color: defaultTokens.colorAlertIconWarning,
  },
  iconCritical: {
    color: defaultTokens.colorAlertIconCritical,
  },
});
