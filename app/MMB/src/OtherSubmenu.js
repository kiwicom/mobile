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
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.invoice" />}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.open_on_web" />}
        />
        <MenuItem
          title={<Translation id="mmb.sub_menu.manage.other.refund_form" />}
          description={
            <Translation id="mmb.sub_menu.manage.other.apply_for_refund" />
          }
        />
      </MenuGroup>
    </ScrollView>
  );
}
