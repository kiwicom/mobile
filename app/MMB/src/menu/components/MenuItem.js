// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Color,
  TextIcon,
  StyleSheet,
  Text,
  Touchable,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  onPress: () => void,
  isActive: boolean,
  icon?: React.Element<typeof TextIcon>,
  description?: React.Element<typeof Translation>,
|};

/**
 * With optional description:
 *
 * .------------------------------.
 * |                              |
 * |  IC    Bold Title            |
 * |  ON    Optional description  |
 * |                              |
 * `------------------------------`
 *
 * Without description (icon is optional as well):
 *
 * .------------------------------.
 * |                              |
 * |  ICON  Bold Title            |
 * |                              |
 * `------------------------------`
 *
 * Menu item can be activated. Activation style differs with device:
 *
 *  - iOS: background color is brand and all text/icon colors are inverted
 *  - Android: only left box border is in the brand color
 */
function MenuItem(props: Props) {
  const styleSheet = createStyleSheet(props);

  return (
    <Touchable onPress={props.onPress} style={styleSheet.wrapper}>
      <React.Fragment>
        {props.icon && (
          <View style={styleSheet.iconWrapper}>
            {React.cloneElement(props.icon, {
              style: styleSheet.icon,
            })}
          </View>
        )}

        <View>
          <Text style={styleSheet.title}>{props.title}</Text>
          {props.description && (
            <Text style={styleSheet.description}>{props.description}</Text>
          )}
        </View>
      </React.Fragment>
    </Touchable>
  );
}

AdaptableMenuItem.defaultProps = {
  isActive: false,
};

export default function AdaptableMenuItem(props: Props) {
  // Menu item can be activated but only on tablets (wide devices). Otherwise
  // it's not possible to activate it because new scene should always open
  // on mobile devices.
  return (
    <AdaptableLayout.Consumer
      renderOnNarrow={<MenuItem {...props} isActive={false} />}
      renderOnWide={<MenuItem {...props} />}
    />
  );
}

function createStyleSheet(props: Props) {
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal: props.description ? 13 : 15,
      android: {
        backgroundColor: Color.white,
        borderLeftWidth: 5,
        borderLeftColor: props.isActive ? Color.brand : Color.white,
      },
      ios: {
        backgroundColor: props.isActive ? Color.brand : Color.white,
      },
    },
    iconWrapper: {
      paddingRight: 15,
      justifyContent: 'center',
    },
    icon: {
      android: {
        fontSize: 15,
      },
      ios: {
        fontSize: 14,
        color: props.isActive ? Color.white : Color.grey.$600,
      },
    },
    title: {
      fontWeight: 'bold',
      android: {
        color: Color.textDark,
      },
      ios: {
        color: props.isActive ? Color.white : Color.textDark,
      },
    },
    description: {
      fontSize: 12,
      android: {
        color: Color.textLight,
      },
      ios: {
        color: props.isActive ? Color.white : Color.textLight,
      },
    },
  });
}
