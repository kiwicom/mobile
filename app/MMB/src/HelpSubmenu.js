// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from './components/menu/MenuItem';
import MenuGroup from './components/menu/MenuGroup';

export default function MainMenu() {
  return (
    <ScrollView>
      <MenuGroup>
        <MenuItem title={<Translation id="mmb.sub_menu.help.help" />} />
        <MenuItem title={<Translation id="mmb.sub_menu.help.call_support" />} />
      </MenuGroup>
    </ScrollView>
  );
}
