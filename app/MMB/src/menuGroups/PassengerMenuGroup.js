// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import TitledMenuGroup from '../components/menu/TitledMenuGroup';
import MenuItem from '../components/menu/MenuItem';

type Props = {|
  openSubmenu: (activeId: string, menuId: string) => void,
  activeId: string,
|};

const VoidAction = () => {
  console.warn('TODO');
};

export default class PassengerMenuGroup extends React.Component<Props> {
  render = () => (
    <TitledMenuGroup title={<Translation id="mmb.main_menu.passengers" />}>
      <MenuItem
        onPress={VoidAction} // TODO: Add handler
        title={<Translation id="mmb.main_menu.details" />}
        isActive={false} // TODO: Add logic
        icon={<TextIcon code="&#xe087;" />}
      />
    </TitledMenuGroup>
  );
}
