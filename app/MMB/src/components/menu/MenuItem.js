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
  type StylePropType,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItemIcon from './MenuItemIcon';

type Props = {|
  title: React.Element<typeof Translation>,
  isActive: boolean,

  onPress?: () => void,
  // icon on the left
  icon?: React.Element<typeof TextIcon>,

  // icon on the right (arrow by default)
  actionIcon?: React.Element<typeof TextIcon>,
  description?: React.Element<typeof Translation>,

  // style props
  titleStyle?: StylePropType,
  descriptionStyle?: StylePropType,
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

  const IconRight = props.actionIcon ? (
    <View style={styleSheet.rightArrow}>{props.actionIcon}</View>
  ) : (
    <AdaptableLayout.Consumer
      renderOnNarrow={
        <View style={styleSheet.rightArrow}>
          <Icon name="chevron-right" size={26} color={Color.brand} />
        </View>
      }
    />
  );

  const MenuItemInner = (
    <React.Fragment>
      {props.icon && (
        <MenuItemIcon
          iconComponent={props.icon}
          invertColors={props.isActive}
        />
      )}

      <View style={styleSheet.middleWrapper}>
        <Text style={[styleSheet.title, props.titleStyle]}>{props.title}</Text>
        {props.description && (
          <Text style={[styleSheet.description, props.descriptionStyle]}>
            {props.description}
          </Text>
        )}
      </View>
      {/* Hide icon if menu item is not clickable */}
      {props.onPress && IconRight}
    </React.Fragment>
  );

  if (props.onPress) {
    return (
      <Touchable onPress={props.onPress} style={styleSheet.wrapper}>
        {MenuItemInner}
      </Touchable>
    );
  }
  return <View style={styleSheet.wrapper}>{MenuItemInner}</View>;
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
