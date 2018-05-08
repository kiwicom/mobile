// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';

import MenuItem from './components/MenuItem';
import MenuGroup from './components/MenuGroup';

const VoidAction = () => {
  console.warn('TODO');
};

export default function HelpSubmenu() {
  return (
    <ScrollView>
      <MenuGroup>
        <MenuItem
          title={<Translation id="mmb.sub_menu.help.help" />}
          onPress={VoidAction}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.help.call_support" />}
          onPress={VoidAction}
        />
      </MenuGroup>
    </ScrollView>
  );
}
