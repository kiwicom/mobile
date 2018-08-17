// @flow strict

import * as React from 'react';
import { StyleSheet, Icon, type StylePropType } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

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
          icon={
            <Icon
              name="warning"
              size={ICON_SIZE}
              color={defaultTokens.colorAlertIconCritical}
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
            <Icon
              name="warning"
              size={ICON_SIZE}
              color={defaultTokens.colorAlertIconWarning}
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
          icon={
            <Icon
              size={ICON_SIZE}
              name="error-outline"
              color={defaultTokens.colorAlertIconSuccess}
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

const styles = StyleSheet.create({
  containerDanger: {
    backgroundColor: defaultTokens.backgroundAlertCritical,
  },
  successIcon: {
    transform: [{ rotate: '180deg' }],
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
});
