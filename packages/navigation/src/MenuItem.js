// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  Icon,
  StyleSheet,
  Text,
  Touchable,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import MenuItemIcon from './MenuItemIcon';

type Props = {|
  title: React.Element<typeof Translation>,
  onPress: () => void,
  isActive: boolean,

  // icon on the left
  icon?: React.Element<typeof Icon>,

  // icon on the right (arrow by default)
  actionIcon?: React.Element<typeof Icon>,
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
            renderOnNarrow={Platform.select({
              ios: (
                <View style={styleSheet.rightArrow}>
                  <Icon
                    name="chevron-right"
                    color={defaultTokens.paletteProductNormal}
                  />
                </View>
              ),
              android: null,
            })}
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
        backgroundColor: defaultTokens.paletteWhite,
        borderStartWidth: 5,
        borderStartColor: props.isActive
          ? defaultTokens.paletteProductNormal
          : defaultTokens.paletteWhite,
      },
      ios: {
        backgroundColor: props.isActive
          ? defaultTokens.paletteProductNormal
          : defaultTokens.paletteWhite,
      },
    },
    middleWrapper: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      fontWeight: 'bold',
      android: {
        color: defaultTokens.colorTextAttention,
      },
      ios: {
        color: props.isActive
          ? defaultTokens.paletteWhite
          : defaultTokens.colorTextAttention,
      },
    },
    description: {
      fontSize: 12,
      android: {
        color: defaultTokens.colorTextSecondary,
      },
      ios: {
        color: props.isActive
          ? defaultTokens.paletteWhite
          : defaultTokens.colorTextSecondary,
      },
    },
    rightArrow: {
      justifyContent: 'center',
    },
  });
}
