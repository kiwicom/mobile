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
  Icon,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItemIcon from './MenuItemIcon';

type Props = {|
  title: React.Element<typeof Translation>,
  onPress: () => void,
  isActive: boolean,

  // icon on the left
  icon?: React.Element<typeof TextIcon>,

  // icon on the right (arrow by default)
  actionIcon?: React.Element<typeof TextIcon>,
  description?: React.Element<typeof Translation>,
  testID?: string,
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
          <MenuItemIcon
            iconComponent={props.icon}
            invertColors={props.isActive}
          />
        )}

        <View style={styleSheet.middleWrapper}>
          <Text style={styleSheet.title}>{props.title}</Text>
          {props.description && (
            <Text style={styleSheet.description}>{props.description}</Text>
          )}
        </View>

        {props.actionIcon ? (
          <View style={styleSheet.rightArrow}>{props.actionIcon}</View>
        ) : (
          <AdaptableLayout
            renderOnNarrow={
              <View style={styleSheet.rightArrow}>
                <Icon name="chevron-right" size={26} color={Color.brand} />
              </View>
            }
          />
        )}
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
    <AdaptableLayout
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
        borderStartWidth: 5,
        borderStartColor: props.isActive ? Color.brand : Color.white,
      },
      ios: {
        backgroundColor: props.isActive ? Color.brand : Color.white,
      },
    },
    middleWrapper: {
      flex: 1,
      justifyContent: 'center',
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
    rightArrow: {
      justifyContent: 'center',
    },
  });
}
