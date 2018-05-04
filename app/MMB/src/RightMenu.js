// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { TextIcon, Color, StyleSheet } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from './components/MenuItem';
import MenuGroup from './components/MenuGroup';

export default function RightMenu() {
  // TODO: export translations (register them in the Localization package?)

  return (
    <ScrollView>
      <MenuGroup title={<Translation passThrough="Manage" />}>
        <MenuItem
          icon={<TextIcon style={styleSheet.icon}>F</TextIcon>}
          title={<Translation passThrough="Help" />}
          description={<Translation passThrough="Contact us" />}
        />
        <MenuItem
          icon={<TextIcon style={styleSheet.icon}>&#xe07d;</TextIcon>}
          title={<Translation passThrough="Other" />}
          description={
            <Translation passThrough="Booking cancellation, invoice, etc" />
          }
        />
      </MenuGroup>
    </ScrollView>
  );
}

const styleSheet = StyleSheet.create({
  icon: {
    color: Color.grey.$600,
    android: {
      fontSize: 15,
    },
    ios: {
      fontSize: 14,
    },
  },
});
